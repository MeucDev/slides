import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { SelectItem } from 'primeng/api/selectitem';
import { Song, Verse } from 'src/app/models';
import { SongsService } from '../songs.service';

@Component({
  templateUrl: './page-edit-song.component.html',
  styleUrls: ['./page-edit-song.component.scss']
})
export class PageEditSongComponent implements OnInit {

  public id: number;
  public song: Song;

  public verseTypeOptions: SelectItem[];

  @ViewChild('songForm', { static: false }) form!: NgForm;
  validated: boolean;

  private ongoingApiCall: boolean;

  constructor(
    private readonly router: Router,
    private readonly activeRoute: ActivatedRoute,
    private readonly songsService: SongsService
  ) {
    this.id = 0;
    this.song = this.songsService.getDefault();
    this.verseTypeOptions = this.songsService.getVerseTypeOptions();
    this.validated = false;
    this.ongoingApiCall = false;
  }

  ngOnInit() {
    const params = this.activeRoute.snapshot.paramMap;
    this.id = Number(params.get('id'));

    this.loadData();
  }

  loadData() {
    if (this.id !== 0) {
      this.songsService.get(this.id)
        .subscribe(song => {
          song.verses.forEach(this.formatVerseLyricsToHTML);
          this.song = song;
        });
    }
  }

  handleSave() {
    if (this.form.valid && !this.ongoingApiCall) {
      const updatedSong = _.cloneDeep(this.song) as Song;

      updatedSong.title = this.form.controls.title.value;
      updatedSong.songwriter = this.form.controls.songwriter.value;

      updatedSong.verses.forEach(v => this.formatVerseLyrics(v));
      updatedSong.verses.forEach((v: Verse, i: number) => v.order = i);

      this.ongoingApiCall = true;
      if (this.id == 0) {
        const observable = this.songsService.add(updatedSong);
        observable.subscribe(() => {
          this.router.navigate(['/songs']);
        }, (err: Error) => {
          alert(err.message);
        }, () => {
          this.ongoingApiCall = false;
        });
      } else {
        const observable = this.songsService.update(updatedSong);
        observable.subscribe(() => {
          this.router.navigate(['/songs']);
        }, (err: Error) => {
          alert(err.message);
        }, () => {
          this.ongoingApiCall = false;
        });
      }
    }

    this.validated = true;
  }

  handleCancel() {
    this.router.navigate(['/songs']);
  }

  handleAddVerse() {
    this.song.verses.push(this.songsService.getDefaultVerse(this.song.id));
  }

  br2nl(str?: string): string | undefined {
    if (!str) return undefined;

    return str.replace(/<\s*\/?br\s*[\/]?>/gi, '\n');
  }

  private formatVerseLyrics(verse: Verse) {
    verse.text = this.br2nl(verse.text);
  }

  private formatVerseLyricsToHTML(verse: Verse) {
    verse.text = verse.text?.replace('\n', '<br/>');
  }
}


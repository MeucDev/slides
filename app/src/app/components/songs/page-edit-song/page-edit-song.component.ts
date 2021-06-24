import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import * as _ from 'lodash';
import { Song } from 'src/app/models';
import { SongsService } from '../songs.service';

@Component({
  templateUrl: './page-edit-song.component.html',
  styleUrls: ['./page-edit-song.component.scss']
})
export class PageEditSongComponent implements OnInit {

  public id: number;
  public song: Song;

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
        .subscribe(song => { this.song = song; });
    }
  }

  handleSave() {
    if (this.form.valid && !this.ongoingApiCall) {
      const updatedSong = _.cloneDeep(this.song) as Song;

      updatedSong.title = this.form.controls.title.value;
      updatedSong.songwriter = this.form.controls.songwriter.value;

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
}


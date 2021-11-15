import { Component, EventEmitter, Output } from '@angular/core';
import { SlideSequence, SlideType } from 'src/app/models';
import { SongsService } from '../../songs/songs.service';

@Component({
  selector: 'add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent {
  tab = '';

  songSearchText = '';
  songSearchResult: SlideSequence[] = [];

  @Output() addItem = new EventEmitter<SlideSequence>();

  constructor(
    private readonly songsService: SongsService
  ) { }

  public search(): void {
    this.songsService
      .search(this.songSearchText)
      .subscribe(songs => {
        this.songSearchResult = songs.map(s => {
          return new SlideSequence().init({
            id: s.id,
            title: s.title,
            subtitle: s.songwriter,
            slides: s.verses.map(v => {
              return {
                type: SlideType.Lyrics,
                text: v.text
              };
            })
          });
        })
      });
  }

  public addSequence(song: SlideSequence): void {
    this.addItem.emit(song);
  }

  public setTab(tab: string): void {
    this.tab = tab;
  }
}

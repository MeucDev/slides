import { Component, EventEmitter, Output } from '@angular/core';
import { SlideSequence } from 'src/app/models';
import { SlideSequenceUtils } from 'src/app/utils';
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
        this.songSearchResult = songs.map(SlideSequenceUtils.convertFromSong)
      });
  }

  public addSequence(song: SlideSequence): void {
    this.addItem.emit(song);
  }

  public setTab(tab: string): void {
    this.tab = tab;
  }
}

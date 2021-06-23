import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Song } from 'src/app/models';
import { SongsService } from '../songs.service';

@Component({
  templateUrl: './page-songs.component.html',
  styleUrls: ['./page-songs.component.scss']
})
export class PageSongsComponent implements OnInit {

  public songs: Song[];

  constructor(
    private readonly router: Router,
    private readonly songsService: SongsService
  ) {
    this.songs = [];
  }

  ngOnInit() {
    this.songsService.getAll()
      .subscribe(songs => { this.songs = songs; });
  }

  handleAdd() {
    this.router.navigate(['/songs', 'add']);
  }
}

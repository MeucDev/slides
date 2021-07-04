import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Song } from 'src/app/models';

@Component({
  templateUrl: './page-sessions.component.html',
  styleUrls: ['./page-sessions.component.scss']
})
export class PageSessionsComponent {

  public songs: Song[];

  constructor(
    private readonly router: Router,
  ) {
    this.songs = [];
  }
}

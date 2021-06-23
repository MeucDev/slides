import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Song } from 'src/app/models';
import { SongsService } from '../songs.service';

@Component({
  templateUrl: './page-edit-song.component.html',
  styleUrls: ['./page-edit-song.component.scss']
})
export class PageEditSongComponent implements OnInit {

  public id: number;
  public song: Song;

  @ViewChild('songForm', { static: false }) form: NgForm | undefined;

  constructor(
    private readonly router: Router,
    private readonly activeRoute: ActivatedRoute,
    private readonly songsService: SongsService
  ) {
    this.id = 0;
    this.song = {};
  }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(this.loadData);
  }

  loadData(params: ParamMap) {
    this.id = Number(params.get('id'));

    if (this.id != 0) {
      this.songsService.get(this.id)
        .subscribe(song => { this.song = song; });
    }
  }

  handleSave() {
    // TODO
  }

  handleCancel() {
    this.router.navigate(['/songs']);
  }
}


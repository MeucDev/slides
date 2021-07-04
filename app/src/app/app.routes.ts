import { Routes } from '@angular/router';
import { PageHomeComponent } from './components/home/page-home/page-home.component';
import { PageSongsComponent } from './components/songs/page-songs/page-songs.component';
import { PageEditSongComponent } from './components/songs/page-edit-song/page-edit-song.component';
import { PageSessionsComponent } from './components/sessions/page-sessions/page-sessions.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: PageHomeComponent
  },
  {
    path: 'songs',
    children: [
      {
        path: '',
        component: PageSongsComponent,
        pathMatch: 'full'
      },
      {
        path: 'add',
        component: PageEditSongComponent
      },
      {
        path: ':id',
        component: PageEditSongComponent
      }
    ]
  },
  {
    path: 'sessions',
    children: [
      {
        path: '',
        component: PageSessionsComponent,
        pathMatch: 'full'
      }
    ]
  }
];

const pagesComponents = [
  PageHomeComponent,
  PageSongsComponent,
  PageEditSongComponent,
  PageSessionsComponent
];

export { appRoutes, pagesComponents };

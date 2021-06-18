import { Routes } from '@angular/router';
import { PageHomeComponent } from './components/home/page-home/page-home.component';
import { PageSongsComponent } from './components/songs/page-songs/page-songs.component';

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
    component: PageSongsComponent
  }
];

const pagesComponents = [
  PageHomeComponent,
  PageSongsComponent
];

export { appRoutes, pagesComponents };

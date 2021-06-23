import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { appRoutes, pagesComponents } from './app.routes';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/home/top-menu/top-menu.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '-lang.json');
}

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    ...pagesComponents,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        onSameUrlNavigation: 'reload'
      }
    ),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    }),
    FormsModule,
    TableModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

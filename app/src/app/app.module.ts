import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';

import { ContenteditableModule } from '@ng-stack/contenteditable';

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
    BrowserAnimationsModule,
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
    ContenteditableModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    TabViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

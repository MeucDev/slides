import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PageSongsComponent } from './page-songs.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateLoaderMock } from 'src/app/testing/translate-loader-mock';

describe('PageSongsComponent', () => {
  let component: PageSongsComponent;
  let fixture: ComponentFixture<PageSongsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateLoaderMock
          },
        })
      ],
      declarations: [ PageSongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

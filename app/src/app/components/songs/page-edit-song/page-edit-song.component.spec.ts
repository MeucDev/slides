import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PageEditSongComponent } from './page-edit-song.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateLoaderMock } from 'src/app/testing/translate-loader-mock';

describe('PageEditSongComponent', () => {
  let component: PageEditSongComponent;
  let fixture: ComponentFixture<PageEditSongComponent>;

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
      declarations: [ PageEditSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

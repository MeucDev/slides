import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PageSessionStartComponent } from './page-session-start.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateLoaderMock } from 'src/app/testing/translate-loader-mock';

describe('PageSessionStartComponent', () => {
  let component: PageSessionStartComponent;
  let fixture: ComponentFixture<PageSessionStartComponent>;

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
      declarations: [ PageSessionStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSessionStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

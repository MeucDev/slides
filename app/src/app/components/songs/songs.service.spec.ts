import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SongsService } from './songs.service';

describe('SongsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: SongsService = TestBed.inject(SongsService);
    expect(service).toBeTruthy();
  });
});

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { Observable } from 'rxjs';
import { Song, Verse } from 'src/app/models';
import { VerseType, VerseTypeUtils } from 'src/app/models/verse-type.enum';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  constructor(private http: HttpClient) { }

  public getDefault(): Song {
    return {
      title: '',
      verses: [
        this.getDefaultVerse()
      ]
    };
  }

  public getDefaultVerse(songId?: number): Verse {
    return {
      songId: songId,
      verseType: VerseType.Unknown
    };
  }

  public getVerseTypeOptions(): SelectItem[] {
    return VerseTypeUtils.toSelectItemArray();
  }

  public getAll(): Observable<Song[]> {
    return this.http.get<Song[]>('/api/songs');
  }

  public get(id: number): Observable<Song> {
    return this.http.get<Song>(`/api/songs/${id}`);
  }

  public add(song: Song): Observable<Song> {
    return this.http.post<Song>('/api/songs', song);
  }

  public update(song: Song): Observable<void> {
    return this.http.put<void>(`/api/songs/${song.id}`, song);
  }
}

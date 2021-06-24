import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Song } from "src/app/models";

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  constructor(private http: HttpClient) { }

  public getDefault(): Song {
    return {
      title: '',
      verses: [],
      songVerses: []
    };
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

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Song } from "src/app/models";

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  constructor(private http: HttpClient) { }

  public getAll(): Observable<Song[]> {
    return this.http.get<Song[]>('/api/songs');
  }

  public get(id: number): Observable<Song> {
    return this.http.get<Song>(`/api/songs/${id}`);
  }
}

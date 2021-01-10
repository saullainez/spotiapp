import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getQuery(query:string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': ''
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(map( data => data['albums'].items));
  }

  getArtist(termino : string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data => data['artists'].items));
  }
}

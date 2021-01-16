import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token:string;

  constructor( private http: HttpClient ) {
  }

  getToken(){
    return this.http.get('https://spotify-get-token.herokuapp.com/spotify/4137b5de554d4dc6a47d68ddb67651b3/f5faed3fe9674e63ae2f614e6960fb76').pipe(map(data => data['access_token']));
  }

  getQuery(query:string, token:string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(token:string) {
    return this.getQuery('browse/new-releases?limit=20', token).pipe(map( data => data['albums'].items));
  }

  getArtists(termino : string, token:string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`, token).pipe(map(data => data['artists'].items));
  }

  getArtist(id : string, token:string) {
    return this.getQuery(`artists/${id}`, token);
  }

  getTopTracks(id : string, token:string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`, token).pipe(map(data => data['tracks']));
  }
}

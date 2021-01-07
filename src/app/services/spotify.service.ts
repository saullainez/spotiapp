import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQClRhGkEMiWl0xZAh573Er11Rk8ZrriwQgOtV1z-IJjLFFLS4pBSaPqAK_Yx4tg_WEp5-WayDGotHg_hVw'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers}).pipe(map( data => data['albums'].items));
  }

  getArtist(termino : string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQClRhGkEMiWl0xZAh573Er11Rk8ZrriwQgOtV1z-IJjLFFLS4pBSaPqAK_Yx4tg_WEp5-WayDGotHg_hVw'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers}).pipe(map(data => data['artists'].items));
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCN6jFCFLA8--RMl38pWskxqP5NqiFJ1yues4GcveOVVKZPIGTRslmBruTUM-Hqy_whf7ivL6vrV6eEZzQ'
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers}).subscribe(data => {
      console.log(data);
    })
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDnMlLykmTSRoaMr3yJNDRiarIXIQL8YRTn7N2x0sau4kbTa5-38V8UbNEPrcbvFZnVFZRY0-Lf-ruuh6s'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
  }
}

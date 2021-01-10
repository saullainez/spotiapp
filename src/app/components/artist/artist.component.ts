import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ChildActivationStart } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  loading: boolean;
  topTracks: any = {};
  error: boolean = false;
  msjError: string;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  ngOnInit(): void {
  }

  getArtist(id:string){
    this.loading = true;
    this.spotify.getArtist(id).subscribe(artist => {
      this.artist = artist;
      this.loading = false;
    }, (serviceError) => {
      this.error = true;
      this.loading = false;
      this.msjError = serviceError.error.error.message;
      console.log(serviceError);
    })
  }

  getTopTracks(id:string){
    this.spotify.getTopTracks(id).subscribe(topTracks => {
      this.topTracks = topTracks;
    }, (serviceError) => {
      this.error = true;
      this.loading = false;
      this.msjError = serviceError.error.error.message;
      console.log(serviceError);
    })
  }

}

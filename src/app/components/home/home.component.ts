import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  constructor( private spotify : SpotifyService) { }

  ngOnInit(): void {
    this.spotify.getNewReleases().subscribe((data : any) => {
      this.nuevasCanciones = data;
    });
  }

}

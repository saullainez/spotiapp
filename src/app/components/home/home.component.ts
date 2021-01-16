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
  loading: boolean;
  error: boolean = false;
  msjError: string;

  constructor( private spotify : SpotifyService) { }

  ngOnInit(): void {
    this.loading = true;
    this.spotify.getToken().subscribe(token => {
      this.spotify.getNewReleases(token).subscribe((data : any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      }, (serviceError) => {
        this.error = true;
        this.loading = false;
        this.msjError = serviceError.error.error.message;
        console.log(serviceError);
      });
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artists:any[] = []; 
  loading: boolean;
  showCards : boolean;
  error: boolean = false;
  msjError: string;

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino : string) {
    if(termino){
      this.loading = true;
      this.spotify.getToken().subscribe(token => {
        this.spotify.getArtists(termino, token).subscribe((data : any) => {
          this.artists = data;
          this.loading = false;
          this.showCards = true;
        }, (serviceError) => {
          this.error = true;
          this.loading = false;
          this.msjError = serviceError.error.error.message;
          console.log(serviceError);
        });
      })
    }else{
      this.showCards = false;
    }
  }
}
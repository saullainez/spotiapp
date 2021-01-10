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

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino : string) {
    if(termino){
      console.log(termino);
      this.loading = true;
      this.spotify.getArtist(termino).subscribe((data : any) => {
        this.artists = data;
        this.loading = false;
        this.showCards = true;
      });
    }else{
      this.showCards = false;
    }

  }

}

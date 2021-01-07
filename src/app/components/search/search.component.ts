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

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino : string) {
    this.spotify.getArtist(termino).subscribe((data : any) => {
      console.log(data.artists.items);
      this.artists = data.artists.items;
    });
  }

}

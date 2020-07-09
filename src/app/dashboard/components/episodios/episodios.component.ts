import { EpikService } from './../../services/epik.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent implements OnInit {

  response = [];

  constructor(public episodeService : EpikService) { }

  ngOnInit(): void {

    this.episodeService.getEpisode().subscribe(
      rest =>{
        this.response = rest.results
      },
      error => {
        console.log(error)
      }
    );
  }

  ordenarData(){
    this.response = this.response.reverse();
  }

}

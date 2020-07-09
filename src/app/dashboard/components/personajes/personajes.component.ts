import { EpikService } from '../.././services/epik.service';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  @HostBinding('class') classes = 'row'; // crear filas en httml
  response=[];

  constructor(public epikService : EpikService) { }

  ngOnInit(): void {
    this.epikService.getPersonajes().subscribe(
      rest =>{
        console.log(rest.results[0]["image"]);
        this.response = rest.results
      },
      error =>{
        console.log(error);
      }
    );
  }

}

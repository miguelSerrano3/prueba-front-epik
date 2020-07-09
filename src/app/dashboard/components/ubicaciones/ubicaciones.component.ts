import { EpikService } from './../../services/epik.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubicaciones',
  templateUrl: './ubicaciones.component.html',
  styleUrls: ['./ubicaciones.component.css']
})
export class UbicacionesComponent implements OnInit {

  response =[];

  constructor(public locationService : EpikService) { }

  ngOnInit(): void {

    this.locationService.getLocation().subscribe(
      rest =>{
        this.response = rest.results
      },
      error =>{
        console.log(error);
      }
    );

  }

  Dettale(data){
    alert(JSON.stringify(data));
  }

}

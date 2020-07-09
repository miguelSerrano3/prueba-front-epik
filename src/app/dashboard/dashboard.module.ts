import { EpikService } from './services/epik.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavsComponent } from './components/navs/navs.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { UbicacionesComponent } from './components/ubicaciones/ubicaciones.component';
import { EpisodiosComponent } from './components/episodios/episodios.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    NavsComponent, 
    PersonajesComponent, 
    UbicacionesComponent, 
    EpisodiosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EpikService],
  bootstrap: []
})
export class DashboardModule { }

import { EpisodiosComponent } from './components/episodios/episodios.component';
import { UbicacionesComponent } from './components/ubicaciones/ubicaciones.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,
  children: [
    { path: 'personajes', component: PersonajesComponent },
    { path: 'ubicaciones', component: UbicacionesComponent },
    { path: 'episodios', component: EpisodiosComponent }
  ] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

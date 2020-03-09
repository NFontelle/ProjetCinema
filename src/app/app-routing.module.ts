import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConnexionComponent} from './connexion/connexion.component';
import {FilmsComponent} from './films/films.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {ReservationsComponent} from './reservations/reservations.component';

const routes: Routes = [
  {path: 'connexion', component: ConnexionComponent},
  {path: '', component: FilmsComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'reservations', component: ReservationsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { ReservationFormComponent } from './components/reservation/reservation-form/reservation-form.component';
import { ReservationListComponent } from './components/reservation/reservation-list/reservation-list.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'form',component:ReservationFormComponent},
  {path:'list',component:ReservationListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

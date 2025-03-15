import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { }

  getData(){
   return  JSON.parse(localStorage.getItem('reservation')|| 'null')
  }
}

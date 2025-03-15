import { Component } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent{
list : Reservation[] = []

  constructor(private rs:ReservationService) {
    
  }
  ngOnInit(): void{
 this.list = this.rs.getData()
}
  
}

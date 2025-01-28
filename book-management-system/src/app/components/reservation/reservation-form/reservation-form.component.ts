import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent {
// checkindate : Date = new Date()
// checkoutdate : Date = new Date()
// guestname : string = ''
// guestemail : string = ''

  reservation:any[] = [];
  myForm : FormGroup = new FormGroup({})
constructor(private fb :FormBuilder){

}

ngOnInit(){
  this.myForm = this.fb.group({
    checkoutdate : ['',Validators.required],
    checkindate : ['',Validators.required],
    guestname : ['',Validators.required],
    guestemail : ['',Validators.required]
  })
}

onSubmit(){
if(this.myForm.valid){
  this.reservation.push(this.myForm.value)
  localStorage.setItem("reservation",JSON.stringify(this.reservation))
}

}
}

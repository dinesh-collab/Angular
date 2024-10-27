import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent {

  ngOnInit(){
    this.appname = this.data.commondata;
  }
appointment : Appointment[] = []
appdate : Date = new Date()
arr = [];
appname :string = ''

add(){
   this.appointment.push(
    { 
      id: this.appointment.length + 1,
      name: this.appname,
      date: this.appdate
    }
   )
}
obj1 = [{
  name : "husain"
}]
obj2 = [{
  name : 'hati paraad'
}]
 a = 8;

myForm: FormGroup;

  constructor(private fb: FormBuilder,private data : DataService) {
    var a = 8;

    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
this.obj1 = this.obj2;
this.obj2 = [{
  name: 'indian'
}]
    if (this.myForm.valid) {
      console.log('Form submitted:', this.obj1 );
      
    }
  }
}

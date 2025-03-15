import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

ref:string = ''

myForm: FormGroup;

  constructor(private fb: FormBuilder,private data : DataService) {
    var a = 8;

    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date : new FormControl('')
    });
  }

  onSubmit() {
    this.appointment.push({
      name: this.myForm.value.name,
      id: this.appointment.length + 1,
      date: this.myForm.value.date
    })
    console.log(this.appointment)
}

del(value: any){
  alert(value)
}
}

import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
// @Input() testdata : 
items = [] as any[];
myform : FormGroup;
constructor(private data : DataService,private http: HttpClient,private fb:FormBuilder){
if(localStorage.getItem('appointment')){
  this.items = JSON.parse(localStorage.getItem('appointment') || '') ;
}
  this.myform = this.fb.group({
    name: ['',Validators.required],
    email : ['',[Validators.required,Validators.email]]
  })
}

onSubmit(){
  this.items.push(this.myform.value)
  localStorage.setItem('appointment',JSON.stringify(this.items))
}
remove(val: any){
this.items.splice(val,1);
localStorage.setItem('appointment',JSON.stringify(this.items))

}

}

import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
// @Input() testdata : 

constructor(private data : DataService,private http: HttpClient){

}
arr = []

ngOnInit(){
  this.data.commondata = "Tesa"
this.getData().subscribe(response =>{
  console.log(response)
})
}

getData() {
  // Return an Observable that makes the API call
  return this.http.get('https://jsonplaceholder.typicode.com/todos');
}
}

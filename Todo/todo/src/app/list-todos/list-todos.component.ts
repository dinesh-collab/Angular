import { Component, OnInit } from '@angular/core';
export class Todos {
  constructor(private id : number,
    private description:string,
    private date:Date){}
  
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {
todos = [
  new Todos(1,'Dance class',new Date()),
  new Todos(2,'Guitar class',new Date())
  // {id:1,description:'task1'},
  // {id:2,description:'task2'},
  // {id:3,description:'task3'}
]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {
todos = [
  {id:1,description:'task1'},
  {id:2,description:'task2'},
  {id:3,description:'task3'}
]
  constructor() { }

  ngOnInit(): void {
  }

}

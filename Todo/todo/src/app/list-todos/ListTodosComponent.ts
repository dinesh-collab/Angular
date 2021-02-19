import { Component, Input, OnInit } from '@angular/core';
import { Todos } from './list-todos.component';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {
  @Input() todoos : any;
  todos = [
    new Todos(1, 'Dance class', new Date()),
    new Todos(2, 'Guitar class', new Date())
    // {id:1,description:'task1'},
    // {id:2,description:'task2'},
    // {id:3,description:'task3'}
  ];
  constructor() { }

  ngOnInit(): void {
  }
  isExpanded: boolean = true;

  toggleShow() {
    this.isExpanded = !this.isExpanded;

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Name : string;
  Client : string[];

  constructor() { }

  ngOnInit(): void {
    this.Name="Dinesh Y";
    this.Client=["one ", "two","three","four"];
  }

}

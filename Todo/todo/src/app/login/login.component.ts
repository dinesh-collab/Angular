import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = 'dinesh'
  password = ''
  constructor() { }

  ngOnInit(): void {
  }
handleLogic(){
  console.log(this.username);
}
}

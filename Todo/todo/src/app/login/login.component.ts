
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = 'dinesh'
  password = ''
  errormessage = 'Incorrect Credentials'
  isValid = false
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
handleLogic(){
 // console.log(this.username);
 if(this.username==="dinesh" && this.password=== "enter"){
   this.isValid=false; 
  this.router.navigate(['welcome']);
   console.log(this.isValid);
 }else{
   this.isValid=true;
   console.log(this.isValid);

 }

}
}

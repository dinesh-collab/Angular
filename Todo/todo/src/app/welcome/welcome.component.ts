import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  name=''
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("welcome component");
    this.name = this.route.snapshot.params['name'];
    console.log(this.name);
  }

}

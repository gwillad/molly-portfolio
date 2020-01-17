import { Component, OnInit } from '@angular/core';

import { AboutService } from "../about.service";
import { About } from "../about";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private aboutService: AboutService) { }

  public about: About;

  ngOnInit() {
  	this.getAbout();
  }

  getAbout(): void {
  	this.aboutService.getAbout()
  		.subscribe(about => { 
  			this.about = about;
  		});
  }

}

import { Component, OnInit } from '@angular/core';

import { AboutService } from "../about.service";
import { Resume } from "../about";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private aboutService: AboutService) { }

  public resume: Resume

  ngOnInit() {
  	this.getResume();
  }

  getResume(): void { 
  	this.aboutService.getResume()
  		.subscribe(resume => {
  			this.resume = resume;
  		})
  }

}

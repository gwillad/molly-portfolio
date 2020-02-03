import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../project.service';
import { Image } from '../project';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  public images: Image[];
  currentImageIndex: number;

  ngOnInit() {
  	this.getSplashImages();
  }

  getSplashImages(): void {
  	this.projectService.getSplashImages()
  		.subscribe(images => {
	  		this.images = images;
	  		this.currentImageIndex = 0;
	  		this.switchCurrentImage(0);
	  		this.startImageSwitching();
  		});
  }

  startImageSwitching(): void {
  	setTimeout(() => this.switchImage(), 5000);
  }

  switchImage(): void {
  	this.switchCurrentImage((this.currentImageIndex + 1) % this.images.length);
  	this.startImageSwitching();
  }

  switchCurrentImage(newIndex: number): void {
  	this.images[this.currentImageIndex].class = "hidden";
  	this.images[newIndex].class = "";
  	this.currentImageIndex = newIndex;
  }
}

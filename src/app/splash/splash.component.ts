import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ProjectService } from '../project.service';
import { Image } from '../project';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
   host: {
    '(window:resize)': 'onResize()',
  }
})
export class SplashComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  public images: Image[];
  public imagesLength: number = 0;
  public currentSlideTransform: string = "";
  @ViewChild('slideContainer', {static: false}) slideContainer: ElementRef;

  currentImageIndex: number;
  imageTimer: NodeJS.Timer | null;

  ngOnInit() {
  	this.getSplashImages();
  }

  getSplashImages(): void {
  	this.projectService.getSplashImages()
  		.subscribe(images => {
	  		this.images = images;
        this.imagesLength = images.length;
	  		this.switchCurrentImage(0);
	  		this.startImageSwitching();
  		});
  }

  startImageSwitching(): void {
    if (this.imageTimer) {
      clearTimeout(this.imageTimer);
    }
  	this.imageTimer = setTimeout(() => this.switchImage(), 5000);
  }

  switchImage(): void {
  	this.switchCurrentImage((this.currentImageIndex + 1) % this.images.length);
  	this.startImageSwitching();
  }

  switchCurrentImage(newIndex: number): void {
    this.currentImageIndex = newIndex;

    const imageWidth = this.slideContainer.nativeElement.offsetWidth;

    const temp = newIndex * -imageWidth;
    if (temp !== 0) {
      this.currentSlideTransform = `translateX(${temp}px)`;
    } else {
      this.currentSlideTransform = "";
    }
  }

  goToIndex(i: number): void {
    this.switchCurrentImage(i);
    this.startImageSwitching();
  }

  onResize(): void {
    this.switchCurrentImage(this.currentImageIndex);
  }
}

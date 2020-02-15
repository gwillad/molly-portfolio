import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

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

  // template content
  public images: Image[];
  public imagesLength: number = 0;
  public currentSlideTransform: string = "";
  public isWidescreen: boolean;
  @ViewChild('slideContainer', { static: false }) slideContainer: ElementRef;

  // input vars
  @Input() content: Image[] | null = null;
  @Input() useAutoScroll: boolean = true;
  @Input() useSideButtons: boolean = false;
  @Input() useWideContent: boolean = false;

  // private vars
  currentImageIndex: number;
  autoScrollTimer: NodeJS.Timer | null;

  // life cycle events
  ngOnInit() {
  	this.getSplashImages();
  }

  ngAfterViewInit() {
    this.switchCurrentImage(0);
    this.tryStartAutoScroll();
  }

  // data retrieval
  getSplashImages(): void {
    if (this.content !== null) {
      this.images = this.content;
      this.imagesLength = this.images.length;
      this.checkWidescreen();
    } else {
  	this.projectService.getSplashImages()
  		.subscribe(images => {
	  		this.images = images;
        this.imagesLength = images.length;
        this.checkWidescreen();
  		});
    }
  }

  // image switching
  tryStartAutoScroll(): void {
    if (!this.useAutoScroll) {
      return;
    }

    if (this.autoScrollTimer) {
      clearTimeout(this.autoScrollTimer);
    }

  	this.autoScrollTimer = setTimeout(() => this.nextImage(), 5000);
  }

  switchCurrentImage(newIndex: number): void {
    this.currentImageIndex = newIndex;

    const dx = newIndex * -this.slideContainer.nativeElement.offsetWidth;
    if (dx !== 0) {
      this.currentSlideTransform = `translateX(${dx}px)`;
    } else {
      this.currentSlideTransform = "";
    }
  }

  goToIndex(i: number): void {
    this.switchCurrentImage(i);
    this.tryStartAutoScroll();
  }

  onResize(): void {
    this.goToIndex(this.currentImageIndex);
    this.checkWidescreen();
  }

  nextImage(): void {
    this.goToIndex((this.currentImageIndex + 1) % this.imagesLength);
  }

  previousImage(): void {
    // apparently JS % means remainder, not modulo
    // so doing this like nextImage(), but with - instead of + 
    // results in trying to go to image index -1. 
    // instead, we just go to the previous unless you're at index 0
    this.goToIndex(this.currentImageIndex === 0 ? this.imagesLength - 1 : this.currentImageIndex - 1);
  }

  checkWidescreen(): void {
    this.isWidescreen = innerWidth > 1389;
  }
}

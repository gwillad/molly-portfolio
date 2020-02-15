import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:resize)': 'onResize()',
  }
})
export class AppComponent implements OnInit {
  longTitle = ["MOLLY", "SMITH"];
  shortTitle = ["M", "S"];
  firstTitle: string;
  secondTitle: string;
  public isWidescreen: boolean = true;

  ngOnInit(): void {
  	this.onResize();
  }

  onResize(): void {
  	//TODO: Ideally we've got an icon + name as title
  	// in that case, we actually just remove the text
  	// when the screen is too small
  	if (innerWidth > 525) {
      this.isWidescreen = true;
  		this.setTitle(this.longTitle);
  	} else {
      this.isWidescreen = false;
  		this.setTitle(this.shortTitle);
  	}
  }

  setTitle(title: string[]): void {
    this.firstTitle = title[0];
    this.secondTitle = title[1];
  }
}

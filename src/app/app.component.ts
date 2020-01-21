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
  longTitle = "Molly Smith";
  shortTitle = "MS";
  title = this.longTitle;
  public isWidescreen: boolean = true;

  ngOnInit(): void {
  	this.onResize();
  }

  onResize(): void {
  	//TODO: Ideally we've got an icon + name as title
  	// in that case, we actually just remove the text
  	// when the screen is too small
  	if (innerWidth > 525) {
  		this.title = this.longTitle;
  	} else {
  		this.title = this.shortTitle;
  	}
  }
}

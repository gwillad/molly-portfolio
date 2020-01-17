import { Injectable } from '@angular/core';
import { About, Resume } from './about';
import { ABOUT, RESUME } from "./mock-projects";

import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }

  getAbout(): Observable<About> {
  	return of(ABOUT);
  }

  getResume(): Observable<Resume> {
  	return of(RESUME);
  }
}

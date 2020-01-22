import { Injectable } from '@angular/core';
import { About, Resume } from './about';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(
  	private http: HttpClient,
  ) { }

  private aboutUrl = 'api/about';
  private resumeUrl = 'api/resume';

  getAbout(): Observable<About> {
  	return this.http.get<About>(this.aboutUrl);
  }

  getResume(): Observable<Resume> {
  	return this.http.get<Resume>(this.resumeUrl);
  }
}

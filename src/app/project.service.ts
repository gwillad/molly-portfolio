import { Injectable } from '@angular/core';
import { Project, Image } from "./project";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
  	private http: HttpClient
  ) { }

  private projectsUrl = '/api/projects';
  private splashUrl = '/api/splash';

  getProjects(): Observable<Project[]> {
 	return this.http.get<Project[]>(this.projectsUrl);
  }

  getProject(id: number): Observable<Project> {
  	return this.http.get<Project>(this.projectsUrl + '/' + id.toString());
  }

  getSplashImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.splashUrl);
  }
}

import { Injectable } from '@angular/core';
import { Project } from "./project";
import { PROJECTS } from "../assets/data/data";

import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Observable<Project[]> {
 		return of(PROJECTS);
  }

  getProject(id: number): Observable<Project> {
    return of(PROJECTS.find(value => value.id === id));
  }
}

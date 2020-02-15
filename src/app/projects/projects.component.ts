import { Component, OnInit } from '@angular/core';

import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  host: {
    '(window:resize)': 'onResize()',
  }
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  isWidescreen: boolean;

  constructor(
  	private projectService: ProjectService
  ) { }

  ngOnInit() {
  	this.getProjects();
    this.onResize();
  }

  getProjects(): void {
  	this.projectService.getProjects()
  		.subscribe(projects => this.projects = projects);
  }

  onResize(): void {
    this.isWidescreen = innerWidth > 1389;
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project, Content } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  constructor(  	
  	private route: ActivatedRoute,
  	private projectService: ProjectService
  ) { }

  public project: Project;

  ngOnInit() {
  	this.getProject();
  }

    getProject(): void {
  		const projectId = +this.route.snapshot.paramMap.get('id');
  		this.projectService.getProject(projectId)
  			.subscribe(project => {
  				this.project = project;
  			});
  	}

  	isImage(content: any): boolean {
  		if (content.loc !== undefined && 
  			content.fname !== undefined) {
  			return true;
  		} else {
  			return false;
  		}
  	}

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project, Content, Image } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  host: {
    '(window:resize)': 'onResize()',
  }
})
export class ProjectDetailComponent implements OnInit {

  constructor(  	
  	private route: ActivatedRoute,
  	private projectService: ProjectService
  ) { }

  public project: Project;
  public isWidescreen: boolean;
  public separatedContent: { blurbs: string[], images: Image[] }

  ngOnInit() {
  	this.getProject();
    this.onResize();
  }

    getProject(): void {
  		const projectId = +this.route.snapshot.paramMap.get('id');
  		this.projectService.getProject(projectId)
  			.subscribe(project => {
  				this.project = project;
          this.separateContent();
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

    onResize(): void {
      this.isWidescreen = innerWidth > 1389;
    }

    separateContent(): void {
      this.separatedContent = { blurbs: [], images: [] };
      for (const content of this.project.arrangedContent) {
        if (typeof content === "string") {
          this.separatedContent.blurbs.push(content);
        } else {
          this.separatedContent.images.push(content);
        }
      }
    }

}

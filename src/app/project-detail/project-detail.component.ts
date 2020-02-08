import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project, Content, Image, ImageOrImageList } from '../project';
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
  public separatedContent: { blurbs: string[], images: ImageOrImageList[] };

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.getProject(routeParams.id);
    });
  }

  ngAfterViewInit() {
    this.onResize();
  }

    getProject(id: string): void {
  		const projectId = +id;
  		this.projectService.getProject(projectId)
  			.subscribe(project => {
  				this.project = project;
          this.separateContent();
  			});
  	}

    isImage(content: Content): content is Image {
      return ((content as Image).loc !== undefined
        && (content as Image).fname !== undefined);
    }
    
    isString(content: Content): content is string {
      return typeof(content) === "string";
    }
        
    isImageArray(content: Content): content is Image[] {
      return Array.isArray(content);
    }

  	isImg(content: Content): boolean {
  		if (this.isImage(content)) {
  			return true;
  		} 
  		return false;
  	}

    isBlurb(content: Content): boolean {
      if (this.isString(content)) {
        return true;
      }
      return false;
    }

    isImageList(content: Content): boolean {
      if (this.isImageArray(content)) {
        return true;
      } 
      return false;
    }

    onResize(): void {
      this.isWidescreen = innerWidth > 1389;
    }

    separateContent(): void {
      this.separatedContent = { blurbs: [], images: [] };
      for (const content of this.project.arrangedContent) {
        if (this.isString(content)) {
          this.separatedContent.blurbs.push(content);
        } else {
          this.separatedContent.images.push(content);
        }
      }
    }
}

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { PROJECTS, ABOUT, RESUME, SPLASH } from "../assets/data/data";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService extends InMemoryDbService {
	createDb() {
		const projects = PROJECTS;
		const about = ABOUT;
		const resume = RESUME;
		const splash = SPLASH;
		
		return { 
			projects: projects, 
			about: about, 
			resume: resume,
			splash: splash,
		};
	}
}

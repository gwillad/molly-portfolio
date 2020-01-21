import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../project.service";
import { Project } from "../project"

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

  public dropdownOpen: boolean = false;
  public projects: Project[] = [];
  closeDropdownTimer: NodeJS.Timer | null = null;

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

  showDropdown(): void {
    this.clearDropdownTimer();
    this.dropdownOpen = true;
  }

  hideDropdown(): void {
    this.clearDropdownTimer();
    this.closeDropdownTimer = setTimeout(
      ()=> this.dropdownOpen = false, 
      100);
  }

  clearDropdownTimer(): void {
    if (this.closeDropdownTimer) {
      clearTimeout(this.closeDropdownTimer);
      this.closeDropdownTimer = null;
    }
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { MenuComponent } from "./menu/menu.component";
import { ProjectDetailComponent } from "./project-detail/project-detail.component";
import { AboutComponent } from "./about/about.component";
import { ResumeComponent } from "./resume/resume.component";

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent},
  { path: 'details/:id', component: ProjectDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { Component } from '@angular/core';
import { ProjectService } from 'src/app/services/project-service.service';

@Component({
  selector: 'app-projectspage',
  templateUrl: './projectspage.component.html',
  styleUrls: ['./projectspage.component.scss']
})
export class ProjectspageComponent {
  ProjectList: any = [];
  footerLinks = [
    { url: '/projects', label: 'projects.title' },
    { url: '/homepage', label: 'homepage.return_button' },
    { url: '/certificates', label: 'certificates.title' },
  ];
  
  constructor(private projectService: ProjectService) {}

  ngOnInit(){
    this.projectService.getProjectsData().subscribe(projectData=>{
      this.ProjectList = projectData
    })
  }
}
import { Component } from '@angular/core';
import { ProjectService } from 'src/app/services/project-service.service';

@Component({
  selector: 'app-projectspage',
  templateUrl: './projectspage.component.html',
  styleUrls: ['./projectspage.component.scss']
})
export class ProjectspageComponent {
  ProjectList: any = [];
  
  constructor(private projectService: ProjectService) {}

  ngOnInit(){
    this.projectService.getProjectsData().subscribe(projectData=>{
      this.ProjectList = projectData
    })
  }
}
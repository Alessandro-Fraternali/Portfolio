import { Component } from '@angular/core';
import { IntroductionsService } from 'src/app/services/introductions-service.service';
import { ProjectService } from 'src/app/services/project-service.service';

@Component({
  selector: 'app-projectspage',
  templateUrl: './projectspage.component.html',
  styleUrls: ['./projectspage.component.scss']
})
export class ProjectspageComponent {
  ProjectList: any = [];
  ProjectIntroduction: any;
  
  constructor(private projectService: ProjectService, private introductionService: IntroductionsService) {}

  ngOnInit(){
    this.projectService.getProjectsData().subscribe(projectData=>{
      this.ProjectList = projectData
    })

    this.introductionService.getIntroductionsData().subscribe(introductionsData=>{
      this.ProjectIntroduction = introductionsData
    })
  }
}
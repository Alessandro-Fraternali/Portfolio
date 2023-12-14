import { Component } from '@angular/core';
import { SkillsService } from 'src/app/services/skills-service.service';

@Component({
  selector: 'app-aboutmepage',
  templateUrl: './aboutmepage.component.html',
  styleUrls: ['./aboutmepage.component.scss']
})
export class AboutmepageComponent {
  SkillsList: any = [];
  
  constructor(private skillsService: SkillsService) {}

  ngOnInit(){
    this.skillsService.getSkillsData().subscribe(skillsData=>{
      this.SkillsList = skillsData
    })
  }
}

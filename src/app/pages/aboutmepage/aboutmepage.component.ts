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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.target); // Verifica che l'elemento target sia corretto
        if (entry.isIntersecting) {
            entry.target.classList.add("right-slide-in");
        } else {
            // entry.target.classList.remove("side-slide");
        }
      });  
    });

    setTimeout(() => {
      const hiddenElements = document.querySelectorAll('.right-slide-out');
      hiddenElements.forEach((el) => observer.observe(el as Element));
    }, 120);
  
  }
}

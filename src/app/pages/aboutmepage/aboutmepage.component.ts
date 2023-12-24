import { Component } from '@angular/core';
import { SkillsService } from 'src/app/services/skills-service.service';
import { TranslationService } from '../../../app/services/translation-service.service';

@Component({
  selector: 'app-aboutmepage',
  templateUrl: './aboutmepage.component.html',
  styleUrls: ['./aboutmepage.component.scss']
})
export class AboutmepageComponent {
  SkillsList: any = [];
  aboutMe: any = [];
  aboutMeLoaded = false;
  footerLinks = [
    { url: '/contact_me', label: 'contact_me.title' },
    { url: '/homepage', label: 'homepage.return_button' },
    { url: '/projects', label: 'projects.title' },
  ];
  
  constructor(private skillsService: SkillsService, private translationService: TranslationService) {}

  ngOnInit(){
    this.translationService.getTranslations().subscribe((translations) => {
      if (translations) {
        this.aboutMe = translations.about_me;
        this.aboutMeLoaded = true;
      }
    });

    this.skillsService.getSkillsData().subscribe(skillsData=>{
      this.SkillsList = skillsData
    })

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
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
    }, 500);
  
  }
}

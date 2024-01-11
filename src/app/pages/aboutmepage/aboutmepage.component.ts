import { Component } from '@angular/core';
import { SkillsService } from 'src/app/services/skills-service.service';
import { TranslationService } from '../../../app/services/translation-service.service';
import { ThemeService } from 'src/app/services/theme-service.service';

@Component({
  selector: 'app-aboutmepage',
  templateUrl: './aboutmepage.component.html',
  styleUrls: ['./aboutmepage.component.scss']
})
export class AboutmepageComponent {
  isLightTheme: boolean = false;
  SkillsList: any = [];
  aboutMe: any = [];
  aboutMeLoaded = false;
  footerLinks = [
    { url: '/contact_me', label: 'contact_me.title' },
    { url: '/home', label: 'homepage.return_button' },
    { url: '/projects', label: 'projects.title' },
  ];
  
  constructor(private skillsService: SkillsService, private translationService: TranslationService, private themeService: ThemeService) {}
  ngOnInit(){
    this.translationService.getTranslations().subscribe((translations) => {
      if (translations) {
        this.aboutMe = translations.about_me;
        this.aboutMeLoaded = true;
      }
    });

    // Al cambio di pagina, verifica lo stato del tema e aggiorna di conseguenza
    this.themeService.isLightTheme$.subscribe((isLightTheme) => {
      // Aggiorna il tuo componente in base allo stato del tema
      this.isLightTheme = isLightTheme;
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

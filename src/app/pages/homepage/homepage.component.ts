import { Component } from '@angular/core';
import { ThemeService } from '../../../app/services/theme-service.service';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  isLightTheme: boolean = false;
  hexagons = [
    {
      title: 'about_me.title',
      link: '/about',
    },
    {
      title: 'projects.title',
      link: '/projects',
    },
    {
      title: 'certificates.title',
      link: '/certificates',
    },
    {
      title: 'details.title',
      link: '/details',
    },
    {
      title: 'contact_me.title',
      link: '/contact_me',
    },
  ];

  constructor(private themeService: ThemeService, private meta: Meta, public translate: TranslateService) {}

  ngOnInit() {
    this.meta.updateTag({ name: 'title', content: 'Alessandro Fraternali - Frontend Developer - Homepage' });
    this.translate.get('homepage.intro').subscribe((translatedDescription: string) => {
      this.meta.updateTag({ name: 'description', content: translatedDescription });
    });
    this.meta.updateTag({ name: 'keywords', content: 'Alessandro Fraternali, Frontend Web Developer, Portfolio, Angular' });
    this.meta.updateTag({ name: 'author', content: 'Alessandro Fraternali' });

    // Al cambio di pagina, verifica lo stato del tema e aggiorna di conseguenza
    this.themeService.isLightTheme$.subscribe((isLightTheme) => {
      // Aggiorna il tuo componente in base allo stato del tema
      this.isLightTheme = isLightTheme;
    });
  }
}

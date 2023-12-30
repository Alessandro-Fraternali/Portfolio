import { Component } from '@angular/core';
import { ThemeService } from '../../../app/services/theme-service.service';

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
      link: 'about_me',
    },
    {
      title: 'projects.title',
      link: 'projects',
    },
    {
      title: 'certificates.title',
      link: 'certificates',
    },
    {
      title: 'details.title',
      link: 'details',
    },
    {
      title: 'contact_me.title',
      link: 'contact_me',
    },
  ];

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // Al cambio di pagina, verifica lo stato del tema e aggiorna di conseguenza
    this.themeService.isLightTheme$.subscribe((isLightTheme) => {
      // Aggiorna il tuo componente in base allo stato del tema
      this.isLightTheme = isLightTheme;
    });
  }
}

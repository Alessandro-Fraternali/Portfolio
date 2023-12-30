import { Component, HostListener } from '@angular/core';
import { TranslationService } from '../../../app/services/translation-service.service';
import { ThemeService } from 'src/app/services/theme-service.service';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.scss'],
})
export class DetailspageComponent {
  isLightTheme: boolean = false;
  details: any = [];
  detailsLoaded = false;

  footerLinks = [
    { url: '/certificates', label: 'certificates.title' },
    { url: '/homepage', label: 'homepage.return_button' },
    { url: '/contact_me', label: 'contact_me.title' },
  ];

  constructor(private translationService: TranslationService, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.translationService.getTranslations().subscribe((translations) => {
      if (translations) {
        this.details = translations.details;
        this.detailsLoaded = true;
      }
    });

    // Al cambio di pagina, verifica lo stato del tema e aggiorna di conseguenza
    this.themeService.isLightTheme$.subscribe((isLightTheme) => {
      // Aggiorna il tuo componente in base allo stato del tema
      this.isLightTheme = isLightTheme;
    });
  }
}

// header.component.ts
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../../app/services/translation-service.service';
import { ThemeService } from 'src/app/services/theme-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  activeLanguage: string;
  isLightTheme: boolean = false;

  constructor(
    private translate: TranslateService,
    private translationService: TranslationService,
    private themeService: ThemeService
  ) {
    this.activeLanguage = 'it';
    this.translate.setDefaultLang('it');
  }

  ngOnInit() {
    this.translate.use('it');
    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
      this.activeLanguage = storedLang;
      this.translate.use(storedLang);
    }

    // Notifica il servizio di traduzione quando la lingua cambia
    this.translate.onLangChange.subscribe((event) => {
      this.translationService.loadTranslations();
    });

    // Inizializza lo stato del tema nel servizio
    this.themeService.setTheme(this.themeService.getStoredTheme());
    
    // Al cambio di pagina, verifica lo stato del tema e aggiorna di conseguenza
    this.themeService.isLightTheme$.subscribe((isLightTheme) => {
    // Aggiorna il tuo componente in base allo stato del tema
    this.isLightTheme = isLightTheme;
  });
  }

  switchLanguage(language: string) {
    localStorage.setItem('lang', language);
    this.activeLanguage = language;
    this.translate.use(language);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}

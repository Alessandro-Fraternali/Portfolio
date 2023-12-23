import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../../app/services/translation-service.service'; // Assicurati di importare il servizio

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  activeLanguage: string;

  constructor(
    private translate: TranslateService,
    private translationService: TranslationService
  ) {
    this.activeLanguage = 'it';
    this.translate.setDefaultLang('it');
  }

  ngOnInit() {
    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
      this.activeLanguage = storedLang;
      this.translate.use(storedLang);
    }

    // Notifica il servizio di traduzione quando la lingua cambia
    this.translate.onLangChange.subscribe((event) => {
      this.translationService.loadTranslations();
    });
  }

  switchLanguage(language: string) {
    localStorage.setItem('lang', language);
    this.activeLanguage = language;
    this.translate.use(language);
  }
}

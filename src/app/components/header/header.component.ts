import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../../app/services/translation-service.service';

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

    this.translate.onLangChange.subscribe((event) => {
      setTimeout(() => {
        if (this.areTranslationsLoaded()) {
          this.translationService.loadTranslations();
        }
      }, 500);
    });
  }

  switchLanguage(language: string) {
    localStorage.setItem('lang', language);
    this.activeLanguage = language;
    this.translate.use(language);
  }

  private areTranslationsLoaded(): boolean {
    return this.translate.instant('example_key') !== 'example_key';
  }
}

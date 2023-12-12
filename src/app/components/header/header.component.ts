import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeLanguage: string; // Aggiungi questa variabile

  constructor(private translate: TranslateService) {
    this.activeLanguage = 'it'; // Imposta la lingua predefinita
    this.translate.setDefaultLang('it');
  }

  ngOnInit() {
    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
      this.activeLanguage = storedLang; // Imposta la lingua memorizzata come lingua attiva
      this.translate.use(storedLang);
    }
  }

  switchLanguage(language: string) {
    localStorage.setItem('lang', language);
    this.activeLanguage = language; // Imposta la lingua attiva quando viene cambiata
    this.translate.use(language);
  }
}

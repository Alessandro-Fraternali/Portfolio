import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // Dichiarazione della proprietà translate
  translate: TranslateService;

  constructor(translate: TranslateService) {
    this.translate = translate;
    this.translate.setDefaultLang('it');
  }

  ngOnInit() {
    // Leggi la lingua memorizzata nel localStorage e imposta la lingua
    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
      this.translate.use(storedLang);
    }
  }

  switchLanguage(language: string){
    // Salva la lingua nel localStorage
    localStorage.setItem('lang', language);
    this.translate.use(language);
  }
}
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private translationsSubject = new BehaviorSubject<any>(null);

  constructor(private translate: TranslateService) {
    this.loadTranslations();
  }

  loadTranslations(): void {
    const activeLanguage = this.translate.currentLang;
    this.translate.getTranslation(activeLanguage).subscribe((translations) => {
      this.translationsSubject.next(translations);
    });
  }

  getTranslations(): Observable<any> {
    return this.translationsSubject.asObservable();
  }
}

// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly localStorageKey = 'isLightTheme';
  private isLightThemeSubject = new BehaviorSubject<boolean>(this.getStoredTheme());
  isLightTheme$: Observable<boolean> = this.isLightThemeSubject.asObservable();

  toggleTheme() {
    const currentTheme = this.isLightThemeSubject.value;
    this.setStoredTheme(!currentTheme);
    this.isLightThemeSubject.next(!currentTheme);
  }

  setTheme(isLightTheme: boolean) {
    this.setStoredTheme(isLightTheme);
    this.isLightThemeSubject.next(isLightTheme);
  }

  getStoredTheme(): boolean {
    const storedTheme = localStorage.getItem(this.localStorageKey);
    return storedTheme ? storedTheme === 'true' : false;
  }

  private setStoredTheme(isLightTheme: boolean) {
    localStorage.setItem(this.localStorageKey, isLightTheme.toString());
  }
}

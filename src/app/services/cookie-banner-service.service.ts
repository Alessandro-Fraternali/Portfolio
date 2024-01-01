import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CookieBannerService {
  private bannerStateSubject = new BehaviorSubject<boolean>(true);

  constructor() {
    // Carica lo stato del banner dal localStorage al momento dell'inizializzazione del servizio
    this.loadBannerState();
  }

  // Carica lo stato del banner dal localStorage
  private loadBannerState(): void {
    const storedState = localStorage.getItem('cookieBannerState');
    const initialState = storedState ? JSON.parse(storedState) : true;
    this.bannerStateSubject.next(initialState);
  }

  // Restituisce lo stato corrente del banner
  getBannerState(): Observable<boolean> {
    return this.bannerStateSubject.asObservable();
  }

  // Chiude il banner e salva la scelta nel localStorage
  closeBanner(): void {
    this.bannerStateSubject.next(false);
    localStorage.setItem('cookieBannerState', 'false');
  }
}

import { Component, Inject } from '@angular/core';
import { ThemeService } from 'src/app/services/theme-service.service';
import { CookieBannerService } from 'src/app/services/cookie-banner-service.service';

@Component({
  selector: 'app-privacy-banner',
  templateUrl: './privacy-banner.component.html',
  styleUrls: ['./privacy-banner.component.scss']
})
export class PrivacyBannerComponent {
  isLightTheme: boolean = false;
  isBannerVisible: boolean = true;

  constructor(private themeService: ThemeService, @Inject(CookieBannerService) private cookieBannerService: CookieBannerService) {}

  ngOnInit(): void {
    // Al cambio di pagina, verifica lo stato del tema e aggiorna di conseguenza
    this.themeService.isLightTheme$.subscribe((isLightTheme) => {
      // Aggiorna il tuo componente in base allo stato del tema
      this.isLightTheme = isLightTheme;
    });

    this.cookieBannerService.getBannerState().subscribe((state: boolean) => {
    this.isBannerVisible = state;
  });
  }

  // Funzione chiamata al clic sul pulsante "OK"
  onCloseBanner(): void {
    // Chiudi il banner utilizzando il servizio
    this.cookieBannerService.closeBanner();
  }
}

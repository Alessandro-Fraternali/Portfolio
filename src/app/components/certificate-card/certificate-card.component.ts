import { Component, Input } from '@angular/core';
import { ThemeService } from 'src/app/services/theme-service.service';

@Component({
  selector: 'app-certificate-card',
  templateUrl: './certificate-card.component.html',
  styleUrls: ['./certificate-card.component.scss']
})
export class CertificateCardComponent {
  isLightTheme: boolean = false;
  @Input() certificateCard: any;
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // Al cambio di pagina, verifica lo stato del tema e aggiorna di conseguenza
    this.themeService.isLightTheme$.subscribe((isLightTheme) => {
      // Aggiorna il tuo componente in base allo stato del tema
      this.isLightTheme = isLightTheme;
    });
  }
}

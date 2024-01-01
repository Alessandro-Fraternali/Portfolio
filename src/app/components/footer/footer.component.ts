import { Component, Input } from '@angular/core';
import { ThemeService } from 'src/app/services/theme-service.service';
import { faChevronRight, faChevronLeft, faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faHouse = faHouse;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  @Input() links: { url: string; label: string }[] = [];
  isLightTheme: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // Al cambio di pagina, verifica lo stato del tema e aggiorna di conseguenza
    this.themeService.isLightTheme$.subscribe((isLightTheme) => {
      // Aggiorna il tuo componente in base allo stato del tema
      this.isLightTheme = isLightTheme;
    });
  }
}

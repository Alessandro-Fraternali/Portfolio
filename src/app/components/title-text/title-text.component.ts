import { Component, Input } from '@angular/core';
import { ThemeService } from 'src/app/services/theme-service.service';


@Component({
  selector: 'app-title-text',
  templateUrl: './title-text.component.html',
  styleUrls: ['./title-text.component.scss']
})
export class TitleTextComponent {
  isLightTheme: boolean = false;
  @Input() titleText: any;
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // Al cambio di pagina, verifica lo stato del tema e aggiorna di conseguenza
    this.themeService.isLightTheme$.subscribe((isLightTheme) => {
      // Aggiorna il tuo componente in base allo stato del tema
      this.isLightTheme = isLightTheme;
    });
  }
}

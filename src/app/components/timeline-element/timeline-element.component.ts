import { Component, Input } from '@angular/core';
import { ThemeService } from 'src/app/services/theme-service.service';

@Component({
  selector: 'app-timeline-element',
  templateUrl: './timeline-element.component.html',
  styleUrls: ['./timeline-element.component.scss']
})
export class TimelineElementComponent {
  isLightTheme: boolean = false;
  @Input() timelineElement: any;
  @Input() i: any;
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // Al cambio di pagina, verifica lo stato del tema e aggiorna di conseguenza
    this.themeService.isLightTheme$.subscribe((isLightTheme) => {
      // Aggiorna il tuo componente in base allo stato del tema
      this.isLightTheme = isLightTheme;
    });
  }
}

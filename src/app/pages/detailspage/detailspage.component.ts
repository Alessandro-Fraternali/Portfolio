import { Component, HostListener } from '@angular/core';
import { TranslationService } from '../../../app/services/translation-service.service';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.scss'],
})
export class DetailspageComponent {
  details: any;
  detailsLoaded = false;
  visibleElementsCount = 0;

  footerLinks = [
    { url: '/certificates', label: 'certificates.title' },
    { url: '/homepage', label: 'homepage.return_button' },
    { url: '/contact_me', label: 'contact_me.title' },
  ];

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.getTranslations().subscribe((translations) => {
      if (translations) {
        this.details = translations.details;
        this.detailsLoaded = true;
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll(): void {
    // Calcolare l'indice degli elementi visibili durante lo scrolling
    const timelineElements = document.querySelectorAll('.timeline-element');
    timelineElements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
      if (isVisible) {
        this.visibleElementsCount = Math.max(this.visibleElementsCount, index + 1);
      }
    });
  }
}

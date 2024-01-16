import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme-service.service';
import { faChevronRight, faChevronLeft, faHouse } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faHouse = faHouse;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  isLightTheme: boolean = false;

  // Aggiorna automaticamente i link del footer
  linksMap: { [key: string]: { url: string; label: string; icon: IconProp }[] } = {
    '/about': [
      { url: '/contact_me', label: 'contact_me.title', icon: faChevronLeft },
      { url: '/home', label: 'homepage.return_button', icon: faHouse },
      { url: '/projects', label: 'projects.title', icon: faChevronRight }
    ],
    '/projects': [
      { url: '/about', label: 'about_me.title', icon: faChevronLeft },
      { url: '/home', label: 'homepage.return_button', icon: faHouse },
      { url: '/certificates', label: 'certificates.title', icon: faChevronRight }
    ],
    '/certificates': [
      { url: '/projects', label: 'projects.title', icon: faChevronLeft },
      { url: '/home', label: 'homepage.return_button', icon: faHouse },
      { url: '/details', label: 'details.title', icon: faChevronRight }
    ],
    '/details': [
      { url: '/certificates', label: 'certificates.title', icon: faChevronLeft },
      { url: '/home', label: 'homepage.return_button', icon: faHouse },
      { url: '/contact_me', label: 'contact_me.title', icon: faChevronRight }
    ],
    '/contact_me': [
      { url: '/details', label: 'details.title', icon: faChevronLeft },
      { url: '/home', label: 'homepage.return_button', icon: faHouse },
      { url: '/about', label: 'about_me.title', icon: faChevronRight }
    ],
  };

  constructor(
    private themeService: ThemeService,
    private router: Router,
    public translate: TranslateService
  ) {}

  ngOnInit() {
    // Al cambio di pagina, verifica lo stato del tema e aggiorna di conseguenza
    this.themeService.isLightTheme$.subscribe((isLightTheme) => {
      // Aggiorna il tuo componente in base allo stato del tema
      this.isLightTheme = isLightTheme;
    });
  }

  // Getter per ottenere l'URL corrente
  get currentPage() {
    return this.router.url;
  }
}

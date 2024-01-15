import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme-service.service';
import { faChevronRight, faChevronLeft, faHouse } from '@fortawesome/free-solid-svg-icons';

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

  // Aggiorna questo oggetto con i link per ogni pagina
  linksMap: { [key: string]: { url: string; label: string }[] } = {
    '/about': [
      { url: '/contact_me', label: 'contact_me.title' },
      { url: '/home', label: 'homepage.return_button' },
      { url: '/projects', label: 'projects.title' }
    ],
    '/projects': [
      { url: '/about', label: 'about_me.title' },
      { url: '/home', label: 'homepage.return_button' },
      { url: '/certificates', label: 'certificates.title' }
    ],
    '/certificates': [
      { url: '/projects', label: 'projects.title' },
      { url: '/home', label: 'homepage.return_button' },
      { url: '/details', label: 'details.title' }
    ],
    '/details': [
      { url: '/certificates', label: 'certificates.title' },
      { url: '/home', label: 'homepage.return_button' },
      { url: '/contact_me', label: 'contact_me.title' }
    ],
    '/contact_me': [
      { url: '/details', label: 'details.title' },
      { url: '/home', label: 'homepage.return_button' },
      { url: '/about', label: 'about_me.title' }
    ],
  };

  constructor(
    private themeService: ThemeService,
    private router: Router
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

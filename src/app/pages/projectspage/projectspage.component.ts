import { Component } from '@angular/core';
import { ProjectService } from 'src/app/services/project-service.service';
import { ThemeService } from 'src/app/services/theme-service.service';

@Component({
  selector: 'app-projectspage',
  templateUrl: './projectspage.component.html',
  styleUrls: ['./projectspage.component.scss']
})
export class ProjectspageComponent {
  isLightTheme: boolean = false;
  ProjectList: any = [];
  footerLinks = [
    { url: '/about_me', label: 'about_me.title' },
    { url: '/homepage', label: 'homepage.return_button' },
    { url: '/certificates', label: 'certificates.title' },
  ];
  
  constructor(private projectService: ProjectService, private themeService: ThemeService) {}

  ngOnInit(){
    this.projectService.getProjectsData().subscribe(projectData=>{
      this.ProjectList = projectData
    })
    // Al cambio di pagina, verifica lo stato del tema e aggiorna di conseguenza
    this.themeService.isLightTheme$.subscribe((isLightTheme) => {
      // Aggiorna il tuo componente in base allo stato del tema
      this.isLightTheme = isLightTheme;
    });
  }
}
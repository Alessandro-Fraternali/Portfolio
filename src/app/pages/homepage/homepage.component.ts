import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  hexagons = [
    {
      title: 'aboutme.title',
      link: 'about_me',
    },
    {
      title: 'projects.title',
      link: 'projects',
    },
    {
      title: 'certificates.title',
      link: 'certificates',
    },
    {
      title: 'details.title',
      link: 'details',
    },
    {
      title: 'contactme.title',
      link: 'contact_me',
    },
  ];

  ngOnInit(){
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
    
        if (entry.isIntersecting) {
          entry.target.classList.add("scale-in");
        } else {
          // entry.target.classList.remove("side-slide");
        }
      });
    });
    
    document.addEventListener("DOMContentLoaded", () => {
      const hiddenElements = document.querySelectorAll('.scale-out');
      hiddenElements.forEach((el) => observer.observe(el as Element));
    });
  }
}

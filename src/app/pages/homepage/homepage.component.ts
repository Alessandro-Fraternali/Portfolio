import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  hexagons = [
    {
      title: 'aboutme_title',
      link: 'about_me',
    },
    {
      title: 'projects_title',
      link: 'projects',
    },
    {
      title: 'certificates_title',
      link: 'certificates',
    },
    {
      title: 'details_title',
      link: 'details',
    },
    {
      title: 'contactme_title',
      link: 'contact_me',
    },
  ];
}

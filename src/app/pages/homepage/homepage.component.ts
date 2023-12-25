import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  hexagons = [
    {
      title: 'about_me.title',
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
      title: 'contact_me.title',
      link: 'contact_me',
    },
  ];
}

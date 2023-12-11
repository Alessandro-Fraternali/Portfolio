import { Component, OnInit } from '@angular/core';
import { IntroductionsService } from 'src/app/services/introductions-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  hexagons = [
    {
      title: 'Chi Sono',
      link: 'about_me',
    },
    {
      title: 'Progetti',
      link: 'projects',
    },
    {
      title: 'Attestati',
      link: 'certificates',
    },
    {
      title: 'Dettagli',
      link: 'details',
    },
    {
      title: 'Contattami',
      link: 'contact_me',
    },
  ];

  ngOnInit(): void {}
}

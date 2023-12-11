import { Component } from '@angular/core';
import { IntroductionsService } from 'src/app/services/introductions-service.service';
import { TextsService } from 'src/app/services/texts-service.service';

@Component({
  selector: 'app-aboutmepage',
  templateUrl: './aboutmepage.component.html',
  styleUrls: ['./aboutmepage.component.scss']
})
export class AboutmepageComponent {
  //AboutMeIntroduction: any = {};
  AboutMeText: any;

  constructor(private introductionService: IntroductionsService, private textService: TextsService) {
    
    //this.introductionService.getIntroductionsData().subscribe(introductionsData => {
    //  this.AboutMeIntroduction = (introductionsData as any[])[0] || {};
    //});

    this.textService.getAboutmeText().subscribe(textData => {
      this.AboutMeText = textData;
    });
  }
}

import { Component } from '@angular/core';
import { CertificatesService } from 'src/app/services/certificates-service.service';
import { IntroductionsService } from 'src/app/services/introductions-service.service';

@Component({
  selector: 'app-certificatespage',
  templateUrl: './certificatespage.component.html',
  styleUrls: ['./certificatespage.component.scss']
})
export class CertificatespageComponent {
  CertificateList: any = [];
  CertificateIntroduction: any;
  
  constructor(private certificatesService: CertificatesService, private certificateIntroduction: IntroductionsService) {}

  ngOnInit(){
    this.certificatesService.getCertificatesData().subscribe(certificateData=>{
      this.CertificateList = certificateData

      console.log(this.CertificateList)
    })
    
    this.certificateIntroduction.getIntroductionsData().subscribe(introductionData=>{
      this.CertificateIntroduction = introductionData
      
      console.log(this.CertificateIntroduction[2])
    })
  }
}

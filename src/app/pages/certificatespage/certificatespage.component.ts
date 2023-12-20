import { Component } from '@angular/core';
import { CertificatesService } from 'src/app/services/certificates-service.service';

@Component({
  selector: 'app-certificatespage',
  templateUrl: './certificatespage.component.html',
  styleUrls: ['./certificatespage.component.scss']
})
export class CertificatespageComponent {
  CertificateList: any = [];
  footerLinks = [
    { url: '/projects', label: 'projects.title' },
    { url: '/homepage', label: 'homepage.return_button' },
    { url: '/details', label: 'details.title' },
  ];
  
  constructor(private certificatesService: CertificatesService) {}

  ngOnInit(){
    this.certificatesService.getCertificatesData().subscribe(certificateData=>{
      this.CertificateList = certificateData
    })
  }
}

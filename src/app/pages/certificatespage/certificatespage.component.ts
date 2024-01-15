import { Component } from '@angular/core';
import { CertificatesService } from 'src/app/services/certificates-service.service';
import { ThemeService } from 'src/app/services/theme-service.service';

@Component({
  selector: 'app-certificatespage',
  templateUrl: './certificatespage.component.html',
  styleUrls: ['./certificatespage.component.scss']
})
export class CertificatespageComponent {
  isLightTheme: boolean = false;
  CertificateList: any = [];
  
  constructor(private certificatesService: CertificatesService, private themeService: ThemeService) {}

  ngOnInit(){
    this.certificatesService.getCertificatesData().subscribe(certificateData=>{
      this.CertificateList = certificateData
    })

    // Al cambio di pagina, verifica lo stato del tema e aggiorna di conseguenza
    this.themeService.isLightTheme$.subscribe((isLightTheme) => {
      // Aggiorna il tuo componente in base allo stato del tema
      this.isLightTheme = isLightTheme;
    });
  }
}

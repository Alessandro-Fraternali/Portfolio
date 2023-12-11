import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProjectspageComponent } from './pages/projectspage/projectspage.component';
import { CertificatespageComponent } from './pages/certificatespage/certificatespage.component';
import { AboutmepageComponent } from './pages/aboutmepage/aboutmepage.component';
import { DetailspageComponent } from './pages/detailspage/detailspage.component';
import { ContactmepageComponent } from './pages/contactmepage/contactmepage.component';
import { HexagonComponent } from './components/hexagon/hexagon.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { HttpClientModule } from '@angular/common/http';
import { TestHexagonComponent } from './components/test-hexagon/test-hexagon.component';
import { TextBlockComponent } from './components/text-block/text-block.component';
import { CertificateCardComponent } from './components/certificate-card/certificate-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProjectspageComponent,
    CertificatespageComponent,
    AboutmepageComponent,
    DetailspageComponent,
    ContactmepageComponent,
    HexagonComponent,
    HeaderComponent,
    ProjectCardComponent,
    TestHexagonComponent,
    TextBlockComponent,
    CertificateCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

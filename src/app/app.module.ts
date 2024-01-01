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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TextBlockComponent } from './components/text-block/text-block.component';
import { CertificateCardComponent } from './components/certificate-card/certificate-card.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HomeButtonComponent } from './components/home-button/home-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { TitleTextComponent } from './components/title-text/title-text.component';
import { TimelineElementComponent } from './components/timeline-element/timeline-element.component';
import { PrivacyBannerComponent } from './components/privacy-banner/privacy-banner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    TextBlockComponent,
    CertificateCardComponent,
    HomeButtonComponent,
    FooterComponent,
    TitleTextComponent,
    TimelineElementComponent,
    PrivacyBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

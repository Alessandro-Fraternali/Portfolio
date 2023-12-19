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

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
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
    HomeButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'it',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutmepageComponent } from './pages/aboutmepage/aboutmepage.component';
import { ProjectspageComponent } from './pages/projectspage/projectspage.component';
import { CertificatespageComponent } from './pages/certificatespage/certificatespage.component';
import { DetailspageComponent } from './pages/detailspage/detailspage.component';
import { ContactmepageComponent } from './pages/contactmepage/contactmepage.component';

const routes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'about_me', component: AboutmepageComponent},
  {path: 'projects', component: ProjectspageComponent},
  {path: 'certificates', component: CertificatespageComponent},
  {path: 'details', component: DetailspageComponent},
  {path: 'contact_me', component: ContactmepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

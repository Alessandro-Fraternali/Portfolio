import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ThemeService } from 'src/app/services/theme-service.service';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contactmepage',
  templateUrl: './contactmepage.component.html',
  styleUrls: ['./contactmepage.component.scss']
})
export class ContactmepageComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faIdBadge = faIdBadge;
  errorForm: boolean = false;
  mailSent: boolean = false
  isLightTheme: boolean = false;
  footerLinks = [
    { url: '/details', label: 'details.title' },
    { url: '/homepage', label: 'homepage.return_button' },
    { url: '/about_me', label: 'about_me.title' },
  ];

  form: FormGroup = this.fb.group({
    from_name: ["", Validators.required],
    from_email: ["", [Validators.required, Validators.email]],
    subject: ["", Validators.required],
    message: ["", Validators.required],
  });

  constructor(private fb: FormBuilder, private themeService: ThemeService){}

  async send() {
    emailjs.init('1UjnbgZkznrgXyIoh');
  
    if (this.form.valid) {
      let response = await emailjs.send("service_zcekyld","template_tghykqq",{
        from_name: this.form.value.from_name,
        from_email: this.form.value.from_email,
        subject: this.form.value.subject,
        message: this.form.value.message,
      });
  
      this.mailSent = true;
    } else {
      this.errorForm = true;
    }
  }

  ngOnInit(){
    // Al cambio di pagina, verifica lo stato del tema e aggiorna di conseguenza
    this.themeService.isLightTheme$.subscribe((isLightTheme) => {
      // Aggiorna il tuo componente in base allo stato del tema
      this.isLightTheme = isLightTheme;
    });
  }
}
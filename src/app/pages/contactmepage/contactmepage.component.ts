import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ThemeService } from 'src/app/services/theme-service.service';

@Component({
  selector: 'app-contactmepage',
  templateUrl: './contactmepage.component.html',
  styleUrls: ['./contactmepage.component.scss']
})
export class ContactmepageComponent {
  isLightTheme: boolean = false;
  footerLinks = [
    { url: '/details', label: 'details.title' },
    { url: '/homepage', label: 'homepage.return_button' },
    { url: '/about_me', label: 'about_me.title' },
  ];

  form: FormGroup = this.fb.group({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  constructor(private fb: FormBuilder, private themeService: ThemeService){}

  async send(){
    emailjs.init('1UjnbgZkznrgXyIoh')
    let response = await emailjs.send("service_zcekyld","template_tghykqq",{
    from_name: this.form.value.from_name,
    from_email: this.form.value.from_email,
    subject: this.form.value.subject,
    message: this.form.value.message,
    });

    alert("mail inviata");
    this.form.reset();
  }

  ngOnInit(){
    // Al cambio di pagina, verifica lo stato del tema e aggiorna di conseguenza
    this.themeService.isLightTheme$.subscribe((isLightTheme) => {
      // Aggiorna il tuo componente in base allo stato del tema
      this.isLightTheme = isLightTheme;
    });
  }
}
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contactmepage',
  templateUrl: './contactmepage.component.html',
  styleUrls: ['./contactmepage.component.scss']
})
export class ContactmepageComponent {

  form: FormGroup = this.fb.group({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  constructor(private fb: FormBuilder){}

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
}

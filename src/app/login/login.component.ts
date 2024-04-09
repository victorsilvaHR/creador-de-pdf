import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login: FormGroup;

  constructor (private formBuilder: FormBuilder ) {
    this.login = new FormGroup({
      email: new FormControl(['', Validators.required]),
      password: new FormControl(['', Validators.required])
    });
  }
  sendCredentials() {
    
    console.log(this.login);
    
  }
}

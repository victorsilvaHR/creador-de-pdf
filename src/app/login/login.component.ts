import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from '../../environments';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { UserService } from '../servicios/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  analytics: any;

  constructor (
    private router: Router,
    private userService : UserService
  ) {

    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  
  }
  ngOnInit(): void {
    const app = initializeApp(environment.firebaseConfig);
    this.analytics = getAnalytics(app);
  }

  sendCredentials() {
    console.log(this.loginForm.value);
    const { email, password } = this.loginForm.value;
    this.userService.singIn(email, password);
    this.login();
    
  }
  login() {
    this.router.navigateByUrl('/home');
  }
 
}
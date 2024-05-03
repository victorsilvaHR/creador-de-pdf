import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { UserService } from '../servicios/users.service';
import { environment } from '../../environments';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  analytics: any;
  mostrarPassword: boolean = false;
  badCredentials: boolean = false;
  showSpiner: boolean = false;
  campoVacio: boolean = false

  constructor (
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
  showPass() {
    this.mostrarPassword = !this.mostrarPassword;
  }
  async sendCredentials() {
    const { email, password } = this.loginForm.value;
    if(!!email && !!password) {
      this.showSpiner = true;
      try {
        const user =  await this.userService.singIn(email, password);
        console.log(user);
        sessionStorage.setItem('uid',user.uid);
        this.showSpiner = false;
      } catch (error) {
        console.log(error);
        this.badCredentials = true;
        this.showSpiner = false;
      }
    } else {
      this.campoVacio = true;

    }
    
    
  }
}
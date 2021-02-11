import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // UserName = "";
  // Password = "";
  loginForm = this.fb.group({
    username: [ "", [Validators.required] ],
    password: [ "", [Validators.required,Validators.minLength(5) ] ]
    // password: [ "", [Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
  })
  constructor(private router: Router, private bankService: BankService, private fb: FormBuilder) {
  }

  // onUsernameChange(event: any) {
  //   this.UserName = event.target.value;
  // }
  // onPasswordChange(event: any) {
  //   this.Password = event.target.value;
  // }
  login() {
    if (this.loginForm.valid == false) {
     alert("Invalif form")
    }
    else {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      const user = this.bankService.authenticateUser(username, password);
      if (user == 1) {
        alert("login sucessful")
        this.router.navigateByUrl("/home");

      }
      else if (user == 0) {
        alert("incorrect password")
      }
      else if (user == -1) {
        alert("no user exist with provided username")
      }
    }
  }
}



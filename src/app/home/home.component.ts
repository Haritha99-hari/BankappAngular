import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // UserName = "";
  // Password = "";
  // Amount: Number = 0;

  homeForm = this.fb.group({
    UserName:[""],
    Password:[""],
    Amount:[0]
  })
  constructor(private bankService: BankService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  // onUsernameChange(event: any) {
  //   this.UserName = event.target.value;
  // }
  // onPasswordChange(event: any) {
  //   this.Password = event.target.value;
  // }
  // onAmountChange(event: any) {
  //   this.Amount = parseInt(event.target.value);
  // }
  deposit() {
    const UserName=this.homeForm.value.UserName;
    const Password=this.homeForm.value.Password;
    const Amount=parseInt(this.homeForm.value.Amount);
    this.bankService.deposit(UserName,Password,Amount);
  }
  withdraw() {
    const UserName=this.homeForm.value.UserName;
    const Password=this.homeForm.value.Password;
    const Amount=parseInt(this.homeForm.value.Amount);
    this.bankService.withdraw(UserName,Password,Amount);
  }
}

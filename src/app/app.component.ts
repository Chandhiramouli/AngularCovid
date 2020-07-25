import { Component, OnInit } from '@angular/core';

import {LoginComponent} from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Enduser } from './enduser.model'
import {UserService} from './user.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users$: Enduser[];
  title: any;

  constructor (private userService: UserService){} 

  ngOnInit(){
    return this.userService.getUsers()
      .subscribe(data => this.users$=data);
  }
}
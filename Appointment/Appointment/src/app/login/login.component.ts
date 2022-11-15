
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BookService } from '../book/book.service';
import { LoginService } from './login.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  // uname: string="";
  // pass: string="";
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router, private loginServ: LoginService, private serv: BookService
    , private cookie: CookieService,) {
      // this.getCookie()
  }

  ngOnInit(): void {

    // var uname = this.getCookie('emailId')
    // var pname = this.getCookie('password')

    /* Add the following formcontrols to the loginForm reactive form instance with
    the given default values and validators for each form control
    1. emailId:- default:" ", Validators: required, email(It should be in correct email form)
    2.password:- default:" ", Validators: required, pattern- should have 1 capital, 1 lower, 1 number, 1 special character, minimum 8 characters. */
    this.loginForm = this.formbuilder.group({
      User_Id: ['', [Validators.required]],
      Passw: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,20}$/)
      ]],
      // rememberMe: [false]
    })

  }


 isUserValid:boolean=false;
  // login method define and login validation
  logInUser() {
    // console.log(this.loginForm)
    // if (this.loginForm.value.rememberMe == true) {
    //   this.cookie.set('uname', this.loginForm.value.User_Id)
    //   this.cookie.set('pass', this.loginForm.value.Passw)
  // }
    this.loginServ.logInUser(this.loginForm.value).subscribe((data) => {
      console.log(data)
      if(data.message=='Success'){
        console.log(this.loginForm)
        this.isUserValid=true;
        alert('Login Successful!!!');
          this.serv.setuid(data['id'])
        this.router.navigate(['/home'])
      }else{
        console.log(this.loginForm)
        // this.loginServ.get
        this.isUserValid=false;
        alert('Login Failed')
        // this.router.navigate(['/login'])
        this.loginForm.reset()
      }

    //   if (data.status == 'error') {
    //     return
    //   }



      // this.serv.setuid(data['id'])
      
    })
  }

  // getCookie(){
  //       this.uname = this.cookie.get('uname')
  //       // console.log(this.uname)
  //       this.pass = this.cookie.get('pass')
  //     }


}

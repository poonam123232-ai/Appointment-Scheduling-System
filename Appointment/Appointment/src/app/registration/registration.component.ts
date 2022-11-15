import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationform !: FormGroup;
  successMessage !: string
  errorMessage !: string


  constructor(private formBuilder: FormBuilder,private router: Router,private regServ:RegistrationService) { }

  ngOnInit(): void {
    this.registrationform = this.formBuilder.group({
      FirstName: ["", [Validators.required, Validators.pattern(/^[a-zA-Z]+[ ]*[a-zA-Z]*[ ]*[a-zA-Z]+$/)]],
      LastName: ["", [Validators.required, Validators.pattern(/^[a-zA-Z]+[ ]*[a-zA-Z]*[ ]*[a-zA-Z]+$/)]],
      Age: ["", [Validators.required]],
      Gender: ["", [Validators.required]],
      Email: ["", [Validators.required, Validators.pattern(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/)]],
      Phone: ["", [Validators.required, Validators.pattern(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/)]],
      Passw: ["", [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,20}$/)]]
    })
  }



  
  registerUser() {
    this.regServ.getUsers(this.registrationform.value.Email).subscribe((data:any)=>{
      if(data.status=='success'){
        alert("User with same emailId is already present")
        return
      }
      this.regServ.registerUser(this.registrationform.value).subscribe((res:any)=>{
        this.successMessage = res.message 
        console.log(res)
        alert('Registered Successfully with User Id : '+ res.userId)
        this.errorMessage = null
        console.log(this.successMessage)
      },(error)=>{
        this.errorMessage = error.message
        alert('Registration Failed')
        this.successMessage = null
      })
      this.router.navigate(['login'])
    },(error)=>{
      this.errorMessage = error.message
      alert(this.errorMessage)
      this.successMessage=null
    })


  }
}


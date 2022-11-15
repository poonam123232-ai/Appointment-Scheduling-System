import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from './book.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookForm !: FormGroup;
  successMessage!:string;
  constructor(private formbuilder: FormBuilder, private router: Router,private serv:BookService) { }


  c = new Date()
  d = new Date().setDate(new Date().getDate() + 10)


  ngOnInit(): void {
    this.bookForm = this.formbuilder.group({
      UserId:['',[Validators.required]],
      FirstName: ["", [Validators.required, Validators.pattern(/^[a-zA-Z]+[ ]*[a-zA-Z]*[ ]*[a-zA-Z]+$/)]],
      LastName: ["", [Validators.required, Validators.pattern(/^[a-zA-Z]+[ ]*[a-zA-Z]*[ ]*[a-zA-Z]+$/)]],
      Age: ["", [Validators.required]],
      Gender: ["", [Validators.required]],
      Email: ["", [Validators.required, Validators.pattern(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/)]],
      Phone: ["", [Validators.required, Validators.pattern(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/)]],
      ScheduleDate:["",[Validators.required]],
      Reason:['',[Validators.required]],
      RescheduleDate:[" "]

    })
  }
  bookUser(){
    console.log(this.bookForm.value)
    this.serv.postBook(this.bookForm.value).subscribe((res:any)=>{
      console.log(res)
      this.successMessage="Appointment Booked Successfully with Application ID : "+res.appId
      alert(this.successMessage);
      this.bookForm.reset();
    })
  }

}

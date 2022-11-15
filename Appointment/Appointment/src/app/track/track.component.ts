import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book/book.service';
@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
trackForm!:FormGroup;
table:boolean=false
track:any;
c:any;
d:any;
k:any;

resd:boolean=false;
  constructor(private formbuilder: FormBuilder, private router: Router,private serv:BookService) { }

  ngOnInit(): void {
    this.trackForm=this.formbuilder.group({
      AppId:["",],
      rescheduleDate:["",]
    })
  }


  trackUser(){
    this.table=true
    this.serv.getBook(this.trackForm.value).subscribe((res:any[])=>{
      this.track=res
      console.log(res)
    })
  }

  deleteUser(){
    this.serv.deleteId(this.trackForm.value).subscribe((res)=>{
      alert('App Id:'+this.trackForm.value.AppId+'Cancelled Successfully ')
      // this.trackForm.reset();
      this.router.navigate(['/home']);
    })
  }
  reschedule(){
    this.resd=true;
    this.serv.getBook(this.trackForm.value).subscribe((res)=>{
      this.c = res['scheduleDate']
      this.c=new Date(this.c)
      this.d = new Date().setDate(this.c.getDate() + 5)
      console.log(this.c)
    
    })
    
     }
     update(){
      this.serv.getBook(this.trackForm.value).subscribe((res)=>{
        this.k = res
        
        this.k['rescheduleDate']=this.trackForm.value.rescheduleDate
        console.log(this.k)
        this.serv.updateId(this.k).subscribe((data)=>{
          console.log(data)
          alert('updated Successfully')
        })
  
      })
      
     }
}

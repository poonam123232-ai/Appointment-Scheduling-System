
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService{
  public static id:String;

  sharedvalue$ = new Subject()
  constructor(private http:HttpClient) { }

  logInUser(data){
  //   const params = new HttpParams()
  //  .set('User_Id',data.User_Id)
  //  .set('Passw',data.Passw)
    let url ="http://localhost:10411/api/Users"
     let k =  this.http.post<any>(url+'/'+"LoginUser",data);
     console.log(k);
     return k
     
  }
}

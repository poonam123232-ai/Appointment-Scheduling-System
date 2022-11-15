import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }


  registerUser(data):Observable<any>{
    let url="http://localhost:10411/api/Users";
    return this.http.post<any>(url,data)

  }

  getUsers(emailId:any): Observable<any>{
    const params = new HttpParams()
    .set('emailId',emailId)
    let url="http://localhost:10411/api/Users/";
    return this.http.get<any>(url,{params})
  }
}

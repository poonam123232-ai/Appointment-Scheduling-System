import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { compileDeclareDirectiveFromMetadata } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  data:object;
  uid:string;
  AppId:string;
  login:boolean=false;

  constructor(private http: HttpClient) { }



  postBook(data){
    let url = "http://localhost:10411/api/Appointmentsses"
    return this.http.post(url,data)
  }
 
  getBook(data:any){
    // const params = new HttpParams()
    // .set('AppId',data)
    let url = "http://localhost:10411/api/Appointmentsses/"
    return this.http.get(url+data.AppId);
  }

  deleteId(data:any){
    let url ="http://localhost:10411/api/Appointmentsses/"
    return this.http.delete(url+data.AppId)
  } 

  updateId(data:any){
    let url="http://localhost:10411/api/Appointmentsses/"+data.appId
    return this.http.put(url,data)
  }











  getmovie(id: string) {
    let url = "http://localhost:3000/moviesId"
    const params = new HttpParams()
      .set('id', id)
    return this.http.get(url, { params });
  }

  setdata(da:any){
    this.data=da
  }
  setuid(id:any){
    this.uid=id
    this.login=true
  }
  getuid(){
    return this.uid
  }
  updatedata(da){
    for(let i in da){
      this.data[i]=da[i]
    }
  }
  getdata(){
    return this.data
  }


}

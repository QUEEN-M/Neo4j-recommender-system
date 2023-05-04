import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admins } from './admins.models';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {
  baseUrl:string ="http://127.0.0.1:5030/"

  constructor(
    private http : HttpClient
  ) { }
  public postAdmin(name:any,password:any,email:any){

    return this.http.post<Admins>(this.baseUrl+'admin',{name,password,email})
    .pipe(map((Admins:any) =>{
      return Admins;
    }))
  }
  public getAdmin(email:any,password:any){

    return this.http.post<Admins>(this.baseUrl+'login',{email,password})
    .pipe(map((Admins:any) =>{
      return Admins;
    }))
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';
import {Doctors} from './doctors.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  baseUrl:string ="http://127.0.0.1:5010/"

  constructor(
    private httpClient : HttpClient
  ) { }
  public addDoctor(name:any,id:any,age:any,tel:any,lieu:any,specialty:any){

    return this.httpClient.post<Doctors>(this.baseUrl+'doctors',{name,id,age,tel,lieu,specialty})
    .pipe(map((Doctors:any) =>{
      return Doctors;
    }))
  }
  public displayDoctor(){
    return this.httpClient.get<Doctors>(this.baseUrl+'displaydoctors')
  }

  public deleteDoctor(id:any){
    return this.httpClient.delete(this.baseUrl+'deletedoctor/'+id)
  }

  public getDoctorbyId(id:any)
  {
    return this.httpClient.get<Doctors>(this.baseUrl+'displaydoc/'+id)
  }

  public updateDoctor(doctors:any){
    return this.httpClient.put<Doctors>(this.baseUrl+'updatedoc/'+doctors.ID,doctors)
  }

}

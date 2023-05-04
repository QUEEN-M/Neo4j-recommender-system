import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';
import {Patients} from './patients.model'

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  baseUrl:string ="http://127.0.0.1:5010/"

  constructor(
    private httpClient : HttpClient
  ) { }
  public postPatient(name:any,id:any,age:any,tel:any){

    return this.httpClient.post<Patients>(this.baseUrl+'patients',{name,id,age,tel})
    .pipe(map((Patients:any) =>{
      return Patients;
    }))
  }
  public displayPatient(){
    return this.httpClient.get<Patients>(this.baseUrl+'display')
  }

  public deletePatient(id:any){
    return this.httpClient.delete(this.baseUrl+'delete/'+id)
  }

  public getPatientbyId(id:any)
  {
    return this.httpClient.get<Patients>(this.baseUrl+'displaypat/'+id)
  }

  public updatePatient(patients:any){
    return this.httpClient.put<Patients>(this.baseUrl+'updatepatient/'+patients.ID,patients)
  }

}

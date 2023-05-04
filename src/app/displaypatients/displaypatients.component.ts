import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientsService } from '../patients.service';
import { first } from 'rxjs';
@Component({
  selector: 'app-displaypatients',
  templateUrl: './displaypatients.component.html',
  styleUrls: ['./displaypatients.component.css']
})
export class DisplaypatientsComponent implements OnInit{
  patients: any;
  constructor(
    private router:Router,
    private patientsService: PatientsService){}
  
  
  ngOnInit(): void {
    this.patientsService.displayPatient().subscribe((data:any) =>{
      this.patients=data;
    })
  }

  deletePatient(pat_id:any):void{
    this.patientsService.deletePatient(pat_id)
    .subscribe (() =>{
      //this.patients = this.patients.filter((u:any)=> u!==pat_id);
      //this.router.navigate(['/list-patient'])
      setTimeout(()=>{
        this.patientsService.displayPatient()
        .subscribe((data:any) => {
          this.patients=data;         
        });
      },1000)
     });
  }

}

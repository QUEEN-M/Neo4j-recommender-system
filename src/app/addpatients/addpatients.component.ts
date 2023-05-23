import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientsService } from '../patients.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-addpatients',
  templateUrl: './addpatients.component.html',
  styleUrls: ['./addpatients.component.css']
})
export class AddpatientsComponent implements OnInit{

  ngForm: FormGroup;
  constructor(
    private fb:FormBuilder,
    private route:Router,
    private patientsService: PatientsService){
      this.ngForm= this.fb.group ({
        NAME: ['',Validators.required],
        ID: ['',Validators.required],
        AGE: ['',Validators.required],
        TEL: ['',Validators.required],
        SYMPTOMS: ['',Validators.required]
      });

  }
  ngOnInit(): void {
  }
  onsubmit(forms:any){
    this.patientsService.postPatient(
      this.ngForm.value.NAME,
      this.ngForm.value.ID,
      this.ngForm.value.AGE,
      this.ngForm.value.TEL,
      this.ngForm.value.SYMPTOMS
    ).pipe(first()).subscribe(response =>{this.route.navigate(['display-patient'])})
  }
  

}

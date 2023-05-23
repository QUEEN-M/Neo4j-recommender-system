import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorsService } from '../doctors.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-adddoctors',
  templateUrl: './adddoctors.component.html',
  styleUrls: ['./adddoctors.component.css']
})
export class AdddoctorsComponent implements OnInit{

  ngForm: FormGroup;
  constructor(
    private fb:FormBuilder,
    private route:Router,
    private doctorsService: DoctorsService){
      this.ngForm= this.fb.group ({
        NAME: ['',Validators.required],
        ID: ['',Validators.required],
        AGE: ['',Validators.required],
        TEL: ['',Validators.required],
        SPECIALTY:['',Validators.required]
      });

  }
  ngOnInit(): void {
  }
  onsubmit(forms:any){
    this.doctorsService.addDoctor(
      this.ngForm.value.NAME,
      this.ngForm.value.ID,
      this.ngForm.value.AGE,
      this.ngForm.value.TEL,
      this.ngForm.value.SPECIALTY
    ).pipe(first()).subscribe(response =>{this.route.navigate(['display-doctor'])})
  }
  

}

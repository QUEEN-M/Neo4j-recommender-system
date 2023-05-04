import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientsService } from '../patients.service';
import { Patients } from '../patients.model';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  ngForm: FormGroup;
  pat: any;
  subscription: any;
  id: any;
  success: string | undefined;
  
  constructor(
    private fb:FormBuilder,
    private route:Router,
    private patientsService: PatientsService,
    private activeRoute: ActivatedRoute
    ){
      this.ngForm= this.fb.group ({
        name: ['',Validators.required],
        id: ['',Validators.required],
        age: ['',Validators.required],
        tel: ['',Validators.required]
      });
      this.subscription =this.activeRoute.paramMap.subscribe(params =>{
        this.id =params.get('id')
      })

  }
  ngOnInit(): void {
    this.getSinglePatient(this.id);
  }

  getSinglePatient(id:any):void{
    this.patientsService.getPatientbyId(id).subscribe((res:any) =>{
      this.pat =res ;
      this.ngForm.patchValue(this.pat)
      console.log(res);
    }
  )
  }
  updateData(form:any){
    console.log(form.value)
      this.patientsService.updatePatient(form.value).subscribe((res:any)=>{
        this.pat=res;
        this.success='Created Successfully';
        this.route.navigate(['display-patient']);
        form.reset();
      })
  }

}

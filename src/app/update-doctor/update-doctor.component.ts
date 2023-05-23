import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorsService } from '../doctors.service';
import { Doctors } from '../doctors.model';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {

  ngForm: FormGroup;
  pat: any;
  subscription: any;
  id: any;
  success: string | undefined;
  
  constructor(
    private fb:FormBuilder,
    private route:Router,
    private doctorService: DoctorsService,
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
    this.getSingleDoctor(this.id);
  }

  getSingleDoctor(id:any):void{
    this.doctorService.getDoctorbyId(id).subscribe((res:any) =>{
      this.pat =res ;
      this.ngForm.patchValue(this.pat)
      console.log(res);
    }
  )
  }
  updateData(form:any){
    console.log(form.value)
      this.doctorService.updateDoctor(form.value).subscribe((res:any)=>{
        this.pat=res;
        this.success='Created Successfully';
        this.route.navigate(['display-doctor']);
        form.reset();
      })
  }

}

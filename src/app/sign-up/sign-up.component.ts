import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminsService } from '../admins.service';
import { first } from 'rxjs';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  ngForm: FormGroup;
  constructor(
    private fb:FormBuilder,
    private route:Router,
    private adminsService: AdminsService){
      this.ngForm= this.fb.group ({
        name: ['',Validators.required],
        password: ['',Validators.required],
        email: ['',Validators.required]
      });

  }



  ngOnInit(): void {
  }
  signup(forms:any):void{
    this.adminsService.postAdmin(
      this.ngForm.value.name,
      this.ngForm.value.password,
      this.ngForm.value.email
    ).pipe(first()).subscribe(response =>{this.route.navigate(['display-patient'])})
  }
}

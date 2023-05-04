import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminsService } from '../admins.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngForm: FormGroup;
  authError:string="";
  error: any;
  
  constructor(
    private fb:FormBuilder,
    private route:Router,
    private adminsService: AdminsService){
      this.ngForm= this.fb.group ({
        password: ['',Validators.required],
        email: ['',Validators.required]
      });

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  login(forms:any){
    this.adminsService.getAdmin(
      this.ngForm.value.email,
      this.ngForm.value.password
      ).subscribe((result:any)=>
    {console.warn(result)
      if(result){
        console.warn(result);
        localStorage.setItem('Admin',JSON.stringify(result))
        this.route.navigate(['patients']);
        

      }else{
        
      }
    },error => {
      console.log(error);
      this.error = error.error.message;
      console.warn('login failed')
    this.authError="Email or password is not correct"
    });
    
  }

}

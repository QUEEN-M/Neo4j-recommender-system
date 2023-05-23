import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorsService } from '../doctors.service';
import { first } from 'rxjs';
@Component({
  selector: 'app-displaydoctors',
  templateUrl: './displaydoctors.component.html',
  styleUrls: ['./displaydoctors.component.css']
})
export class DisplaydoctorsComponent implements OnInit{
  doctors: any;
  constructor(
    private router:Router,
    private doctorsService: DoctorsService){}
  
  
  ngOnInit(): void {
    this.doctorsService.displayDoctor().subscribe((data:any) =>{
      this.doctors=data;
    })
  }

  deleteDoctor(pat_id:any):void{
    this.doctorsService.deleteDoctor(pat_id)
    .subscribe (() =>{
      //this.doctors = this.doctors.filter((u:any)=> u!==pat_id);
      //this.router.navigate(['/list-patient'])
      setTimeout(()=>{
        this.doctorsService.displayDoctor()
        .subscribe((data:any) => {
          this.doctors=data;         
        });
      },1000)
     });
  }

}

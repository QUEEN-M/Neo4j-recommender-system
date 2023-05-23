import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private route:Router){}
  @Output() sideNavToggled =new EventEmitter<boolean>();
  menuStatus:boolean =false;
  menuType: string='default';
  adminName:string='';
  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if (localStorage.getItem('Admin') && val.url.includes('patient') || val.url.includes('doctor'))
        {
          console.warn('in admin area')
          this.menuType="admin"
        }else{
          console.warn('outside admin')
          this.menuType="default"
        }

      }
    })
    
  }
  logout(){
    localStorage.removeItem('Admin')
    this.route.navigate(['/'])
  }

  sideNavToggle(){
    this.menuStatus=!this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

}

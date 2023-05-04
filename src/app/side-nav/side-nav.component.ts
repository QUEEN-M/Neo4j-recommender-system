import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit{
  menuType: string='default';
  constructor(
    private route: Router
  ){}

  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if (localStorage.getItem('Admin') && val.url.includes('patient'))
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
  @Input() sideNavStatus:boolean=false;

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AddpatientsComponent } from './addpatients/addpatients.component';
import { DisplaypatientsComponent } from './displaypatients/displaypatients.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatIconModule} from '@angular/material/icon';
import{MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { PatientsComponent } from './patients/patients.component';

import { HomeComponent } from './home/home.component';@NgModule({

import { AdddoctorsComponent } from './adddoctors/adddoctors.component';
import { DisplaydoctorsComponent } from './displaydoctors/displaydoctors.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { DoctorsComponent } from './doctors/doctors.component';@NgModule({

  declarations: [
    AppComponent,
    AddpatientsComponent,
    DisplaypatientsComponent,
    UpdatePatientComponent,
    HeaderComponent,
    SideNavComponent,
    SignUpComponent,
    LoginComponent,
    PatientsComponent,

    HomeComponent,
    AdddoctorsComponent,
    DisplaydoctorsComponent,
    UpdateDoctorComponent,
    DoctorsComponent,
>
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule , 
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

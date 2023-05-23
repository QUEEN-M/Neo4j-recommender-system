import { NgModule } from "@angular/core";
import { Routes ,RouterModule} from "@angular/router";
import { AddpatientsComponent } from "./addpatients/addpatients.component";
import { DisplaypatientsComponent } from "./displaypatients/displaypatients.component";
import { UpdatePatientComponent } from "./update-patient/update-patient.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { LoginComponent } from "./login/login.component";
import { PatientsComponent } from "./patients/patients.component";
import { AdddoctorsComponent } from "./adddoctors/adddoctors.component";
import { DisplaydoctorsComponent } from "./displaydoctors/displaydoctors.component";
import { DoctorsComponent } from "./doctors/doctors.component";




const routes:Routes=[
    {path:'post-patient',component:AddpatientsComponent},
    {path:'display-patient',component:DisplaypatientsComponent},
    {path:'add-doctor',component:AdddoctorsComponent},
    {path:'display-doctor',component:DisplaydoctorsComponent},
    {path:'update/:id',component:UpdatePatientComponent},
    {path:'sign-up',component:SignUpComponent},
    {path:'login',component:LoginComponent},
    {path:'patients',component:PatientsComponent},
    {path:'doctors',component:DoctorsComponent}

    
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
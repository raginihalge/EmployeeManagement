import { Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { LayoutComponent } from './Layout/layout/layout.component';
import { EmpRegistrationComponent } from './EmployeeRegister/emp-registration/emp-registration.component';
import { empty } from 'rxjs';
import { DashboradComponent } from './dashborad/dashborad.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children:[
            {
                path:'Dashborad',
                component:DashboradComponent
            },
            {
                path:'Employee-registration',
                component:EmpRegistrationComponent
            }
        ]
    }

];

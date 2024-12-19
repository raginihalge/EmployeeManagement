import { Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { LayoutComponent } from './Layout/layout/layout.component';
import { EmpRegistrationComponent } from './EmployeeRegister/emp-registration/emp-registration.component';
import { empty } from 'rxjs';

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
                path:'Employee-registration',
                component:EmpRegistrationComponent
            }
        ]
    }

];

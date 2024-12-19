import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpEmpRegistrationService } from '../../../service/emp-emp-registration.service';

@Component({
  selector: 'app-emp-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emp-registration.component.html',
  styleUrl: './emp-registration.component.css'
})
export class EmpRegistrationComponent {

  EmpDetails:any={
Username:'',
Password:'',
ConfirmPassword:'',
MobileNumber:'',
EmailID:''
  }

  responseData: any;

constructor(private router:Router,private http:HttpClient,private apiservice:EmpEmpRegistrationService)
{

}

SaveEmployee(){
  debugger;
  this.apiservice.SaveEmployee('api/EmployeeRegister/EmployeeSignUp', this.EmpDetails).subscribe(
    (response) => {
      debugger;
      console.log('API Response:', response);
      this.responseData = response; // Handle the response here
    },
    (error) => {
      console.error('API Error:', error); // Handle errors here
    }
  );
  this.router.navigateByUrl("Employee-registration");

}

}

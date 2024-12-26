import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpEmpRegistrationService } from '../../../service/emp-emp-registration.service';
import { EncryptionService } from '../../../service/encryption.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emp-registration',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './emp-registration.component.html',
  styleUrl: './emp-registration.component.css'
})
export class EmpRegistrationComponent {

  passwordMessage: string = '';
  passwordsMatch: boolean = false;

  EmpDetails: any = {
    UserName: '',
    Password: '',
    ConfirmPassword: '',
    MobileNumber: '',
    EmailID: ''
  }

  responseData: any;

  constructor(private router: Router, private http: HttpClient, private apiservice: EmpEmpRegistrationService, private encrypt: EncryptionService) {
  }

  validatePasswords(): void {
    if (this.EmpDetails.Password === '' || this.EmpDetails.ConfirmPassword === '') {
      this.passwordMessage = 'Both fields are required.';
      this.passwordsMatch = false;
    } else if (this.EmpDetails.Password === this.EmpDetails.ConfirmPassword) {
      this.passwordMessage = 'Passwords match!';
      this.passwordsMatch = true;
    } else {
      this.passwordMessage = 'Passwords do not match.';
      this.passwordsMatch = false;
    }
  }

  // passwordMatchValidator(formGroup: FormGroup) {
  //   const password = formGroup.get('password')?.value;
  //   const confirmPassword = formGroup.get('confirmPassword')?.value;

  //   return password === confirmPassword ? null : { mismatch: true };
  // }

  SaveEmployee() {
    debugger;
    this.EmpDetails.Username = this.encrypt.encrypt(this.EmpDetails.UserName);
    this.EmpDetails.password = this.encrypt.encrypt(this.EmpDetails.Password);

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

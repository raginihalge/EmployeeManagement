import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserApiServiceService } from '../../../service/user-api-service.service';
import { EncryptionService } from '../../../service/encryption.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  UserCred:any = {
    username:'',
    password:''
};

 responseData: any;

constructor(private router:Router,private http: HttpClient,private apiService:UserApiServiceService,private encrypt:EncryptionService)
 {

 }

CheckLogin(){
if(this.UserCred.username=="testuser" || this.UserCred.password=="password"){
  debugger;
  this.UserCred.username=this.encrypt.encrypt(this.UserCred.username);
  this.UserCred.password=this.encrypt.encrypt(this.UserCred.password);
  // return this.http.post(`${this.baseUrl}/api/user/login`, this.UserCred);
  this.apiService.postData('api/user/login', this.UserCred).subscribe(
    (response) => {
      debugger;
      console.log('API Response:', response);
      this.responseData = response; // Handle the response here
      localStorage.setItem('authToken', response.token);
    },
    (error) => {
      console.error('API Error:', error); // Handle errors here
    }
  );
  this.router.navigateByUrl("Employee-registration");
}
else{
alert("Invalid Credentials.");
}

}
}

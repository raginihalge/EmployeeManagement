import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

 Username:string="";
 Password:string="";



constructor(private router:Router)
 {

 }

CheckLogin(){
if(this.Username=="Admin" || this.Password=="123"){
  this.router.navigateByUrl("Dashborad");
}
else{
alert("Invalid Credentials.");
}

}
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  
  

  constructor(private http: HttpClient,private router: Router) {}

  onSignUp() {
    // Access the form data using form object and log it to the console.
   const  formdata={
      name:this.name,
      email:this.email,
      password:this.password,
      

    }
    console.log('data',formdata);
    const apiUrl = 'http://127.0.0.1:5000/users';

    this.http.post(apiUrl, formdata).subscribe(
      (response) => {
        console.log('API Response:', response);
        alert('Sign Up Successfully !!')
        this.router.navigate(['/signin']);
        // Handle the API response here
      },
      (error) => {
        console.error('API Error:', error);
        // Handle any API errors here
      }
    );
}
}

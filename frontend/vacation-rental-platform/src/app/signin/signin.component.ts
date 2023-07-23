import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
 
  email: string = '';
  password: string = '';

  
  constructor(private http: HttpClient,private router: Router,private location: Location) {}
  products: any[] = [];
  onSignIn() {
    // Access the form data using form object and log it to the console.
  
    
      //console.log('email',this.email)
      

    
    
  
    this.http
      .get<any[]>(
        `http://127.0.0.1:5000/users`
      )
      .subscribe((response) => {
        this.products = response.reverse();
         //console.log(this.products);
         const user = this.products.find((el) => el.email === this.email && el.password === this.password);

         if (user) {
           // Login successful
           console.log('Login successful');
           localStorage.setItem('user', 'true');
           alert('Sign In Successfully !!')
          
           this.router.navigate(['/']);
           
         } else {
           // Login failed
           console.log('Invalid email or password');
         }
      });
    
  
  }

  
}

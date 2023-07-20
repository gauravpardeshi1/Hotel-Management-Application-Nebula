import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})
export class HostsComponent {
  name: string = '';
  location: string = '';
  property: string = '';
  active:boolean = false;
  

  constructor(private http: HttpClient) {}

  onSignIn() {
    // Access the form data using form object and log it to the console.
   const  formdata={
      name:this.name,
      location:this.location,
      property:this.property,
      active:this.active

    }
    console.log('data',formdata);
    const apiUrl = 'http://127.0.0.1:5000/hosts';

    this.http.post(apiUrl, formdata).subscribe(
      (response) => {
        console.log('API Response:', response);
        alert('Host added Successfully !!')
        // Handle the API response here
      },
      (error) => {
        console.error('API Error:', error);
        // Handle any API errors here
      }
    );
    
  }
  
}

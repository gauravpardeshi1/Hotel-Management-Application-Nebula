import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent implements OnInit {
  dataItem: any;
  api = 'https://hotelsapis.onrender.com/placesStore';

  constructor(private route: ActivatedRoute, private http: HttpClient,private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.fetchDataItem(id);
    });
  }

  fetchDataItem(id: string) {
    const url = `${this.api}/${id}`;

    this.http.get(url).subscribe(response => {
      this.dataItem = response;
    });
  }
  name: string = '';
  gender: string = '';
  date: string = '';
  
  

 

  onSignIn() {
    // Access the form data using form object and log it to the console.
   const  formdata={
      name:this.name,
      gender:this.gender,
      date:this.date,
      hotel_name:this.dataItem.name,
      hotel_location:this.dataItem.location,
      hotel_price:this.dataItem.price
     

    }
   // console.log('data',formdata);
    
    const apiUrl = 'https://nebula-project.onrender.com/booking';

    this.http.post(apiUrl, formdata).subscribe(
      (response) => {
        console.log('API Response:', response);
        this.router.navigate(['/payment']);
        // Handle the API response here
      },
      (error) => {
        console.error('API Error:', error);
        // Handle any API errors here
      }
    );
    
  }
  
}

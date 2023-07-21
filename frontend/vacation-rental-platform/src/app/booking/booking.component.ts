import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface products {
  id: number;
  
  // Add other properties as needed
}
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  products: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get<any[]>(
        `http://127.0.0.1:5000/booking`
      )
      .subscribe((response) => {
        this.products = response.reverse();
         //console.log(response);
      });
  }

  deleteItem(_itemId: number) {
    // console.log('i',itemId)
    // const url = `${this.baseUrl}/items/${itemId}`; // Replace "items" with the appropriate endpoint for your delete request
    const url=`http://127.0.0.1:5000/booking/${_itemId}`
    this.http.delete(url).subscribe(
      (response) => {
        console.log('Item deleted successfully:', response);
        // Handle successful response or any other logic after deletion
        alert('Booking Deletd !!')
      },
      (error) => {
        console.error('Error deleting item:', error);
        // Handle error cases
      }
    );
    
   
  }
}

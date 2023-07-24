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
  modalOpen = false;

  toggleModal(): void {
    this.modalOpen = !this.modalOpen;
  }
  isModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  products: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get<any[]>(
        `https://nebula-project.onrender.com//booking`
      )
      .subscribe((response) => {
        this.products = response.reverse();
         //console.log(response);
      });
  }

  deleteItem(itemId: number) {
    // console.log('i',itemId)
    // const url = `${this.baseUrl}/items/${itemId}`; // Replace "items" with the appropriate endpoint for your delete request
    const url=`https://nebula-project.onrender.com//booking/${itemId}`
    this.http.delete(url).subscribe(
      (response) => {
        console.log('Item deleted successfully:', response);
        // Handle successful response or any other logic after deletion
        alert('Booking Deletd !!')
        window.location.reload()
      },
      (error) => {
        console.error('Error deleting item:', error);
        // Handle error cases
      }
    );
    
    
   
  }
}

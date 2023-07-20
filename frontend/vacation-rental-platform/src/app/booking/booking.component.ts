import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}

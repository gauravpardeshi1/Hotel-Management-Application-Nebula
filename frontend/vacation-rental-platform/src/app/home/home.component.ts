import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  page = 1;

  increment() {
    this.page++;
    this.http
    .get<any[]>(
      `https://hotelsapis.onrender.com/placesStore?_limit=20&_page=${this.page}`
    )
    .subscribe((response) => {
      this.products = response;
      // console.log(response);
    });
  }
  decrement() {
    if (this.page > 0) {
      this.page--;
      this.http
      .get<any[]>(
        `https://hotelsapis.onrender.com/placesStore?_limit=20&_page=${this.page}`
      )
      .subscribe((response) => {
        this.products = response;
        // console.log(response);
      });
    }
  }

  isDecrementDisabled() {
    return this.page === 1;
  }
 
  products: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get<any[]>(
        `https://hotelsapis.onrender.com/placesStore?_limit=20&_page=${this.page}`
      )
      .subscribe((response) => {
        this.products = response.reverse();
        // console.log(response);
      });
  }
}

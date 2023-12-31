import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Product {
  name: string;
  price: number;
  location: string;
} 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  page = 1;

  increment() {
    this.page++;
    console.log('page',this.page)
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
      console.log('page',this.page)
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
  sortDirection:  'asc' | 'desc' | null = null; // Default sorting order is ascending
  selectedLocation: string | null = null;
  sortData() {
    this.products.sort((a, b) => {
      // Define sorting logic based on price
    
      if (this.sortDirection  === 'asc') {
        return a.price - b.price; // Ascending order
      }
       else {
        return b.price - a.price; // Descending order
      }
    });
  }

  filterData() {
    if (this.selectedLocation) {
      //console.log('l',this.selectedLocation)
       //this.products = this.products.filter(product => product.location === this.selectedLocation);
       this.http
      .get<any[]>(
        `https://hotelsapis.onrender.com/placesStore?_limit=20&_page=${this.page}&location=${this.selectedLocation}`
      )
      .subscribe((response) => {
        this.products = response.reverse();
        // console.log(response);
      });
    }
  }
  
  // filteredProducts= this.products; // Initialize with all products
  // location: string[] = ['india', 'russia', 'london', 'spain'];// Initialize with all products

  // filterDataByLocation(event: Event) {
  //   const target = event.target as HTMLSelectElement;
  //   const location: string = target.value;
  //   if (location === ' ') {
  //     this.filteredProducts = this.products; // Show all products
  //   } else {
  //     this.filteredProducts = this.products.filter(product => product.location === location);
  //   }
   
  // }
 
}

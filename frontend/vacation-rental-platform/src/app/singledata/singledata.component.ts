import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-singledata',
  templateUrl: './singledata.component.html',
  styleUrls: ['./singledata.component.css']
})
export class SingledataComponent implements OnInit {
  dataItem: any;
  api = 'https://hotelsapis.onrender.com/placesStore';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

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

  
}
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vacation-rental-platform';
  showLi = false;
  showbut=false;
  user: string | null;
  constructor() {
    // Retrieve value from local storage based on the key
    this.user = localStorage.getItem('user');
    //console.log('user',this.user)
    if(this.user=='true'){
      this.showbut=true;
    }else{
this.showLi=true;
    }
  }
   
  deleteKey() {
    const keyToDelete = 'user'; // Replace 'your-key' with the key you want to delete
    localStorage.removeItem(keyToDelete);
    alert('Are you Logout from here..!!')
    window.location.reload();
  }
 
  ngOnInit(): void {
    initFlowbite();
  }
  
   symdata=[
    {"img":"https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg","title":"Rooms"},
    {"img":"https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg","title":"Pools"},
    {"img":"https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg","title":"Views"},
    {"img":"https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg","title":"New"},
    {"img":"https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg","title":"Golifig"},
    {"img":"https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg","title":"Farms"},
    {"img":"https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg","title":"Beach"},
    {"img":"https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg","title":"Country"},
    {"img":"https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg","title":"OMG"},
    {"img":"https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg","title":"LakeFronts"},
    {"img":"https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg","title":"Cabins"},
    {"img":"https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg","title":"Histrorical"}
   ]
}

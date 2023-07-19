import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostsComponent } from './hosts/hosts.component';
import { RouterModule, Routes } from '@angular/router';
import  {PropertiesComponent}  from './properties/properties.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SingledataComponent } from './singledata/singledata.component';

const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'hosts', component: HostsComponent },
  { path: 'properties', component: PropertiesComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'hotels/:id', component: SingledataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

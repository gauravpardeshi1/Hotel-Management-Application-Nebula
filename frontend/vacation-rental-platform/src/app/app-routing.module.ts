import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostsComponent } from './hosts/hosts.component';
import { RouterModule, Routes } from '@angular/router';
import  {PropertiesComponent}  from './properties/properties.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SingledataComponent } from './singledata/singledata.component';
import { BookingComponent } from './booking/booking.component';
import { GuestsComponent } from './guests/guests.component';
import { PaymentComponent } from './payment/payment.component';
import { AuthGuard } from './authGuard';
const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'hosts', component: HostsComponent },
 { path: 'guest/:id', component: GuestsComponent },
 { path: 'booking', component: BookingComponent,canActivate: [AuthGuard] },
  { path: 'properties', component: PropertiesComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'hotels/:id', component: SingledataComponent,canActivate: [AuthGuard] },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

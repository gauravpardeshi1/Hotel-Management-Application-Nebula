import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HostsComponent } from './hosts/hosts.component';
import { PropertiesComponent } from './properties/properties.component';
import { GuestsComponent } from './guests/guests.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SingledataComponent } from './singledata/singledata.component';
import { BookingComponent } from './booking/booking.component';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component'; // Import FormsModule here

@NgModule({
  declarations: [
    AppComponent,
    HostsComponent,
    PropertiesComponent,
    GuestsComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    
    SingledataComponent,
         BookingComponent,
         PaymentComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

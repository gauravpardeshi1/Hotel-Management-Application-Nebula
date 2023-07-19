import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HostsComponent } from './hosts/hosts.component';
import { PropertiesComponent } from './properties/properties.component';

@NgModule({
  declarations: [
    AppComponent,
    HostsComponent,
    PropertiesComponent
  ],
  
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

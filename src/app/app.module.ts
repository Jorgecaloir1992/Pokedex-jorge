import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pokedex } from './Navbar/component';
import { MaterialListComponent } from './Navbar/material-list/material-list.component';

@NgModule({
  declarations: [
    AppComponent,
    Pokedex,
    MaterialListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

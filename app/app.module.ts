import { NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AppComponent}  from './app.component';
import {routing} from './routes/app.routing';
import {HeaderComponent} from './modules/components/header/header.component';



@NgModule({
  imports: [BrowserModule, routing, HttpModule, FormsModule, ReactiveFormsModule ],
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
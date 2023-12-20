import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableLeftComponent } from './table-left/table-left.component';
import { TableRightComponent } from './table-right/table-right.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { SearchResultComponent } from './search-result/search-result.component';
import { FillFormComponent } from './fill-form/fill-form.component';
import { TicketComponent } from './ticket/ticket.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    TableLeftComponent,
    TableRightComponent,
    HomeComponent,
    SearchComponent,
    SearchResultComponent,
    FillFormComponent,
    TicketComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

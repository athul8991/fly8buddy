import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableLeftComponent } from './table-left/table-left.component';
import { TableRightComponent } from './table-right/table-right.component';

@NgModule({
  declarations: [
    AppComponent,
    TableLeftComponent,
    TableRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FillFormComponent } from './fill-form/fill-form.component';
import { TicketComponent } from './ticket/ticket.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path:"" ,redirectTo:'home',pathMatch:'full'},
  {path:'search',component:SearchComponent},
  {path:'home',component:HomeComponent},
  {path:"searchresult",component:SearchResultComponent},
  {path:"fillForm",component:FillFormComponent},
  {path:"ticket-view",component:TicketComponent},
  {path:"success",component:SuccessComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

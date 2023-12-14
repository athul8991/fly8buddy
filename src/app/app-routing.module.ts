import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  {path:"" ,redirectTo:'home',pathMatch:'full'},
  {path:'search',component:SearchComponent},
  {path:'home',component:HomeComponent},
  {path:"searchresult",component:SearchResultComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

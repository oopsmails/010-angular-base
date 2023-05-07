import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeMadeDropdownSearchAsyncComponent3 } from './homemade/hm-dropdown-search-async3/hm.dropdown.search.async.component3';
import { HomeMadeDropdownSearchAsyncComponent } from './homemade/hm-dropdown-search-async/hm.dropdown.search.async.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'hello', component: HomeComponent },
  { path: 'hm-search', component: HomeMadeDropdownSearchAsyncComponent },
  { path: 'hm-search3', component: HomeMadeDropdownSearchAsyncComponent3 },
  { path: '**', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

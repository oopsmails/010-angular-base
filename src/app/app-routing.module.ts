import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './home/hello.component';
import { HomeMadeDropdownSearchAsyncComponent3 } from './homemade/hm-dropdown-search-async3/hm.dropdown.search.async.component3';

const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'test', component: HomeMadeDropdownSearchAsyncComponent3 },
  { path: '**', component: HelloComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListnameComponent } from './listname/listname.component';
import { EnternameComponent } from './entername/entername.component';

const routes: Routes = [
  {path:'', component: ListnameComponent},
  {path: 'add', component:EnternameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

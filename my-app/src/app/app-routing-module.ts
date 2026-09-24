import { NgModule } from '@angular/core';

import {
  RouterModule,
  Routes
} from '@angular/router';

import {
  GroupCustomerComponent
} from './group-customer-component/group-customer-component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'group-customer',
    pathMatch: 'full'
  },

  {
    path: 'group-customer',
    component: GroupCustomerComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
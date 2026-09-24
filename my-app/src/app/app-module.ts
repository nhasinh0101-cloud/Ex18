import {
  NgModule,
  provideBrowserGlobalErrorListeners
} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import {
  provideHttpClient
} from '@angular/common/http';

import { App } from './app';

import {
  AppRoutingModule
} from './app-routing-module';

import {
  GroupCustomerComponent
} from './group-customer-component/group-customer-component';

@NgModule({

  declarations: [
    App,
    GroupCustomerComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],

  bootstrap: [
    App
  ]

})
export class AppModule { }
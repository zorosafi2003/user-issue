import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UserIssueLibModule } from '../../../user-issue-lib/src/lib/user-issue-lib.module'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule ,UserIssueLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

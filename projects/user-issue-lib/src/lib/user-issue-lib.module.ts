import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgStackFormsModule } from '@ng-stack/forms';
import { ToastrModule } from 'ng6-toastr-notifications';
import { NgxCaptureModule } from 'ngx-capture';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { UserIssueLibComponent } from './user-issue-lib.component';

export const LibConfigService = new InjectionToken<LibConfig>('LibConfig');


@NgModule({
  declarations: [UserIssueLibComponent],
  imports: [
    BrowserModule , CommonModule, HttpClientModule, ReactiveFormsModule ,NgStackFormsModule , FormsModule,
    NgxCaptureModule, NgSelectModule, ToastrModule.forRoot(), NgxSmartModalModule.forRoot()
  ],
  exports: [UserIssueLibComponent]
})
export class UserIssueLibModule {
   // public static forRoot(config: LibConfig): ModuleWithProviders {
  //   return {
  //     ngModule: UserIssueLibModule,
  //     providers: [
  //       {
  //         provide: LibConfigService,
  //         useValue: config
  //       }
  //     ]
  //   }
  // }
 }

export interface LibConfig {
  apiUrl: string;
  appName: string;
  appId: string;
}


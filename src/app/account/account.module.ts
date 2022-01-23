import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserProfileComponent } from './user-profile.component';



@NgModule({
  declarations: [ 
    UserProfileComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,  
    ReactiveFormsModule,
  ]
})
export class AccountModule { }

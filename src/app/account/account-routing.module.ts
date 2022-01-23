import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../Authorization/auth.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';
// import { UserProfileComponent } from './user-profile.component';

const routes: Routes = [
  // {
  //   component: UserProfileComponent,
  //   path: 'userprofile',
  //   data: {
  //     breadcrumb: 'User Profile'
  //   },
  //   canActivate: [AuthGuard]
  // },

  {
    component: ChangePasswordComponent, 
    path: 'changepassword',
    data: {
      breadcrumb: 'Change Password'
    },
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../Authorization/auth.guard';
import { UserRolesComponent } from './user-roles/user-roles.component';
// import { UsermanagementComponent } from './usermanagement.component';

const routes: Routes = [
    // {
    //   component: UsermanagementComponent, 
    //   path: 'usermanagement',
    //   data: {
    //     breadcrumb: 'All Users',
    //   },
    //   canActivate: [AuthGuard],
    // },

    {
      component: UserRolesComponent, 
      path: 'user-roles',
      data: {
        breadcrumb: 'User Roles',
      },
      canActivate: [AuthGuard],
    },
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { } 

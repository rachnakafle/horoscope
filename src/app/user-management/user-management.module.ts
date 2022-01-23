import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './Dialogs/user-management/create-user/create-user.component';
import { UserRolesComponent } from './user-roles/user-roles.component';
import { UsermanagementComponent } from './usermanagement.component';
import { EditUserComponent } from './Dialogs/user-management/edit-user/edit-user.component';
import { DeleteUserComponent } from './Dialogs/user-management/delete-user/delete-user.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateRolesComponent } from './Dialogs/user-roles/create-roles/create-roles.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChangepasswordUserComponent } from './Dialogs/user-management/changepassword-user/changepassword-user.component';
import { EditRolesComponent } from './Dialogs/user-roles/edit-roles/edit-roles.component';

@NgModule({
  declarations: [
    CreateUserComponent,
    UserRolesComponent,
    UsermanagementComponent,
    EditUserComponent,
    DeleteUserComponent,
    CreateRolesComponent,
    ChangepasswordUserComponent,
    EditRolesComponent,
  ],
  imports: [ 
    CommonModule,
    UserManagementRoutingModule ,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ]
})
export class UserManagementModule { }

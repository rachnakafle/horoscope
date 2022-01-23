import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserManagementService } from './user-management.service';
import { Userprofile } from '../interface/userprofile';
import { IRoles } from '../interface/iroles';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css'],
})
export class UsermanagementComponent implements OnInit {
  baseUrl = environment.baseUrl;
  allUsers!: any;
  // allUsers!: [Userprofile]; 
  allRoles: IRoles[] = [];
  loader: boolean = true;
  page: number = 1;
  allRoleLists: any;

  constructor(
    public dialogRef: MatDialog,
    public router: Router,
    private _userservices: UserManagementService
  ) {}

  ngOnInit(): void {
    this.assignAllUsers();
    this.assignAllRoles();
  }

  // previewUser() {
  //   this.dialogRef.open(PreviewUserComponent);
  // } 

  assignAllUsers() { 
    let testCurrentuser: any;
    this.loader = true;
    this._userservices.getAllusers().subscribe({
      next: (data) => {
        testCurrentuser = data;
      },
      error: (err: Error) => {
        alert('Error:' + err);
      },
      complete: () => {
        this.allUsers = testCurrentuser.users;
        this.loader = false;
      },
    });
  }

  assignAllRoles() {
    let roles: any;
    this._userservices.getAllRoles().subscribe({
      next: (data) => {
        roles = data;
        console.log(roles);
      },
      error: (err: Error) => {
        alert('Error:' + err);
      },
      complete: () => {
        roles.roles.forEach((data: { roleName: any }) => {
          var i = 1;
          var RoleObject: IRoles = {
            rid: i++,
            name: data.roleName,
            isselected: false,
          };
          this.allRoles.push(RoleObject);
        });
      },
    });
  }
}



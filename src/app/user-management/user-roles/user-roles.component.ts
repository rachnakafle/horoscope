import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserRolesService } from './user-roles.service';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent implements OnInit {
  allRoles!: any;
  testRoles: any;
  constructor( private dialogRef :MatDialog, public router: Router, private _userroleservices: UserRolesService) { } 


  ngOnInit(): void { 

    this._userroleservices.getAllRoles().subscribe({
      next: (data) => {
        this.testRoles = data;
      },
      error: (err: Error) => {
        alert('Error:' + err);
      },
      complete: () => { 
        this.allRoles = this.testRoles.roles;
        console.log(this.allRoles); 
      }
    }) 
  }


}

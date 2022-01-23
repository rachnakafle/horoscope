import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRolesService } from 'src/app/user-management/user-roles/user-roles.service';

@Component({
  selector: 'dialog-create-roles',
  templateUrl: './create-roles.component.html',
  styleUrls: ['./create-roles.component.css']
})
export class CreateRolesComponent implements OnInit {

  constructor(private _userroles: UserRolesService) { }

  createRoleForm = new FormGroup({
    roleName : new FormControl('',[Validators.required, Validators.minLength(4)])
  })

  ngOnInit(): void {
  }

  // get roleName(){
  //   return this.createRoleForm.value.roleName;
  // }

  createRole(){
    let roleName = this.createRoleForm.value.roleName;

    this._userroles.create(roleName).subscribe({
      next:()=>{
        console.log('New Role Created');
      },
      error:(err:any)=>{
        alert('Error:' + err);       
      },
      complete:()=>{}
    });
  }
}
 
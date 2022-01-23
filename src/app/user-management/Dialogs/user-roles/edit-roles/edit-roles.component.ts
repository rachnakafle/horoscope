import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRolesService } from 'src/app/user-management/user-roles/user-roles.service';

@Component({
  selector: 'dialog-edit-roles',
  templateUrl: './edit-roles.component.html',
  styleUrls: ['./edit-roles.component.css'],
})
export class EditRolesComponent implements OnInit {
  selectedRoleId: any;

  constructor(private _userroles: UserRolesService) {}

  editRoleForm = new FormGroup({
    roleName: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  assignRole(id: any) {
    this.selectedRoleId = id;
  }

  editRole() {
    let roleName = this.editRoleForm.value.roleName;
    let data = {
      roleId: this.selectedRoleId,
      roleName: roleName,
    };
    this._userroles.edit(this.selectedRoleId,data).subscribe({
      next: () => {
        console.log('Role Updated Sucessfully');
      },
      error: (err: any) => {
        alert('Error:' + err);
      },
      complete:()=>{}
    });
  }
}

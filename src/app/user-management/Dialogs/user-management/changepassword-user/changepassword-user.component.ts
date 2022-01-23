import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserManagementService } from 'src/app/user-management/user-management.service';
import 'jquery';

@Component({
  selector: 'dialog-changepassword-user',
  templateUrl: './changepassword-user.component.html',
  styleUrls: ['./changepassword-user.component.css']
})
export class ChangepasswordUserComponent implements OnInit {
  selectedId!:string;

  constructor(private _userservice : UserManagementService) { }

  resetPasswordForm = new FormGroup({
    rpassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    rconfirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  ngOnInit(): void {
  }

  changePassword(id:any){
    this.selectedId = id;
    console.log(this.selectedId);   
  }

  resetPword(){
    let data = {
      password: this.resetPasswordForm.value.rpassword,
      confirmPassword: this.resetPasswordForm.value.rconfirmPassword
  }

    this._userservice.resetPassword(this.selectedId,data).subscribe({
      next:()=>{
        console.log("Password Changed Sucessfully");       
      },
      error:(err:any)=>{
        console.log("Error:"+err);
      },
      complete:()=>{
        (<any>$('.modal')).modal('hide');
      }
    })
  }
}

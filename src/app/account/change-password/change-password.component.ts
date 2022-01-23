import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UprofileServiceService } from '../uprofile-service.service';
// import { UprofileServiceService } from '../user-profile/uprofile-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  submitted = false;
  submitted_success = false;
  submitted_msg:string = '';

  changePasswordForm = new FormGroup({
    currentPassword: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  constructor( private _uprofileservice : UprofileServiceService) { }

  get currentPassword(){
    return this.changePasswordForm.get('currentPassword');
  }
  get newPassword(){
    return this.changePasswordForm.get('newPassword');
  }
  get confirmPassword(){
    return this.changePasswordForm.get('confirmPassword');
  }

  ngOnInit(): void { 
  }

  changePassword(){
    let uId = this._uprofileservice.getUserId();

    let data = {
      id: uId,
      currentPassword: this.changePasswordForm.value.currentPassword,
      newPassword: this.changePasswordForm.value.newPassword,
      confirmPassword: this.changePasswordForm.value.confirmPassword
    }

    this._uprofileservice.changePassword(data).subscribe({
      next:(x:any)=>{
        this.submitted = true;
        this.submitted_success = true;
        this.submitted_msg = "Password Changed Successfully!";
      },
      error:(err:any)=>{
        this.submitted = true;
        this.submitted_success = false;
        this.submitted_msg = "Couldn't Changed Password! Error:" + err;
        console.log(err);
      },
      complete:()=>{
        this.changePasswordForm.reset();
       }
    });
  }
}

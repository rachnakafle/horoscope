import { Injectable } from '@angular/core';
import { Userprofile } from '../interface/userprofile';
import { UprofileServiceService } from './uprofile-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  currentUser: Userprofile ={
    fullName: '',
    userName: '',
    address: '',
    email: '',
    roles: [],
    phoneNumber: '',
    mobileNumber: '',
    gender: '',
    dateOfBirth: '',
    dateOfJoining: '',
    department: '',
    password: '',
    confirmPassword: '',
    profileImagePath: '',
    isActive: true,
  };

  constructor(private _userservice: UprofileServiceService) { }

  getUserByUserName(username:any):Userprofile{ 
    let testCurrentUser:any;
    this._userservice.getUserByUsername(username).subscribe({
      next:(data)=>{
        testCurrentUser = data;
      },
      error: (err: Error) => {
        alert('Error:' + err);
      },
      complete: () => { 
        this.currentUser = testCurrentUser;
        console.log(this.currentUser);
        return this.currentUser;
      }
    });
    return this.currentUser;
  }
}

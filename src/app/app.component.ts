import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UprofileServiceService } from './account/uprofile-service.service';
import { Userprofile } from './interface/userprofile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  baseUrl = environment.baseUrl;
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
    department: '',
    password: '',
    confirmPassword: '',
    profileImagePath: '',
    isActive: true,
    dateOfJoining: '',
  };

  openNav: boolean = true; 

  constructor(public router: Router, private _userservice:UprofileServiceService ) {   
  } 

  ngOnInit(): void {
    var mytoken = this._userservice.getToken();
    var username = this._userservice.getUserByToken(mytoken) || 'sorry';
    this.getUserByUsername(username);
  }
 
  toggleSideNav() {  
    this.openNav = !this.openNav;  
  } 

  getUserByUsername(username:any){
    let testCurrentuser: any;
    this._userservice.getUserByUsername(username).subscribe({
      next: (data) => {
        testCurrentuser = data;
      },
      error: (err: Error) => {
        alert('Error:' + err);
      },
      complete: () => {
        this.currentUser = testCurrentuser;
      },
    });
  }
   
}

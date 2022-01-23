import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from '../Authorization/i-login';
import { AuthService } from '../Authorization/auth.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css'],  
}) 

export class LoginComponent implements OnInit { 
  // name: String = "Rachana";
  // pword: String = "1234567";
  submitted: boolean = false;
  submitted_msg: string = '';
  currentUser: ILogin = {
    userName: '', 
    email: '',
    roles: '',
  };

  // header = new HttpHeaders({
  //  Authorization: `Bearer {$token}`
  // })
 
  loginform = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private router: Router, private authservice: AuthService) {}

  ngOnInit(): void {}

  get user() {
    return this.loginform.get('user');
  }

  get password() {
    return this.loginform.get('password');
  }

  onSubmit() { 
    var login_model = {
      userName: this.loginform.value.user,
      password: this.loginform.value.password,
    };
 
    this.authservice.login(login_model).subscribe({
      next: () => {
        // alert('Logged In Sucessfully');
      },
      error: () => {
       this.submitted = true;
       this.submitted_msg = "Username and/or password incorrect";
      },

      complete: () => {
        this.router.navigate(['/']);
      },
    });
  }

  // loginUser() {
  //   if (this.loginform.value.user === this.name && this.loginform.value.password === this.pword) {
  //     // alert('Login Sucessful');
  //     localStorage.setItem('token', "hwuheqwoeqo.fwirhiow")
  //     this.router.navigate(['']); 
  //   }

  //   else{
  //     alert('Please enter correct name & password ');
  //   }
  // }
}

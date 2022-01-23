import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core'; 
import { FormControl, FormGroup, Validators } from '@angular/forms'; 
import { IRoles } from 'src/app/interface/iroles';
import { UserManagementService } from 'src/app/user-management/user-management.service'; 

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html', 
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  submitted: boolean = false;
  submitted_success: boolean = false;
  submitted_msg: string = '';
  userAvatarPath: any;
  userAvatar: any;
  formData: any; 

  @Input() allRoleLists: IRoles[] = [];
  @Output('assignAllUsers') assignAllUsers: EventEmitter<any> =
    new EventEmitter();

  userForm = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    dob: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    // jdate: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    gender: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    roles: new FormControl('', [Validators.required]),
    department: new FormControl(''),
    avatar: new FormControl(''),
  });

  get fullName() {
    return this.userForm.get('fullname');
  }
  get email() {
    return this.userForm.get('email');
  }
  get mobile() {
    return this.userForm.get('mobile');
  }
  get username() {
    return this.userForm.get('username');
  }
  get password() {
    return this.userForm.get('password');
  }
  get confirmPassword() {
    return this.userForm.get('confirmPassword');
  }

  constructor(
    private _userservice: UserManagementService, 
  ) {}


  ngOnInit(): void {
    // this.assignAllRoles();
    // console.log(this.allRoleLists);
    // console.log(this.userForm.value);
  }


  uploadFile(e: any) {
    if (e.target.files.length > 0) {
      this.userAvatar = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.userAvatarPath = event.target.result;
      };
    }
  }

  // FOR ADDING NEW USER
  clicksub() {
    let formData = new FormData();
    formData.append('fullName', this.userForm.value.fullname || '');
    formData.append('userName', this.userForm.value.username || '');
    formData.append('dateOfBirth', this.userForm.value.dob || '');
    formData.append('phoneNumber', this.userForm.value.phone || '');
    formData.append('mobileNumber', this.userForm.value.mobile || '');
    formData.append('dateOfJoining', this.userForm.value.jdate || '');
    formData.append('password', this.userForm.value.password || '');
    formData.append('gender', this.userForm.value.gender || '');
    formData.append('address', this.userForm.value.address || '');
    formData.append('email', this.userForm.value.email || '');
    formData.append('department', this.userForm.value.department || '');
    formData.append('profileImage', this.userAvatar || '');
    formData.append('confirmPassword', this.userForm.value.confirmPassword || ''); 

    let roleCount = 0;
    // console.log(this.allRoleLists);
    this.allRoleLists.filter((role) => {
      if (role.isselected === true) {
        roleCount++;
        formData.append('roles', role.name);
      }
    });
    if (roleCount < 1) {
      formData.append('roles', 'customer');
    }

    this._userservice.create(formData).subscribe({
      next: (x: number) => {
        this.submitted = true;
        this.submitted_success = true;
        this.submitted_msg = 'New User Created Successfully!';
        console.log(x);
      },
      error: (err: Error) => {
        this.submitted = true;
        this.submitted_msg = "Couldn't Create User. Error: " + err.message;
        console.log(err);
      },
      complete: () => {
        console.log(this.assignAllUsers);
        this.assignAllUsers.emit();
        this.userForm.reset();
      },
    });
  }
}

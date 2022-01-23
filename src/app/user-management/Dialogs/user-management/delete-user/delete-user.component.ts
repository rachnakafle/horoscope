import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserManagementService } from 'src/app/user-management/user-management.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit { 
  @Input() public userIdToDelete:any;
  @Input() public usertodelete:any;
  @Output("assignAllUsers") assignAllUsers: EventEmitter<any> = new EventEmitter(); 

  constructor(private _userservice : UserManagementService) { }

  ngOnInit(): void {
    this.userIdToDelete = this.usertodelete;
  }

  deleteUser(id: any){
    this.userIdToDelete = id; 
    console.log(this.userIdToDelete);
    
  }
  
  confirmDelete(){
    this._userservice.deleteUserById(this.userIdToDelete).subscribe({ 
      next:(x) =>{
        console.log("User" + x + "Deleted");       
      },
      error:(err) =>{
        console.log("Error"+ err);
      },
      complete:()=>{
        this.assignAllUsers.emit();
      }
    });
  }

  
}

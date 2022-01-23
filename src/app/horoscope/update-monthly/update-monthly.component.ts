import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateMonthlyComponent } from '../Dialogs/update-monthly/create-monthly/create-monthly.component';

@Component({
  selector: 'app-update-monthly',
  templateUrl: './update-monthly.component.html',
  styleUrls: ['./update-monthly.component.css']
})
export class UpdateMonthlyComponent implements OnInit {

  constructor( private dialogRef: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialogRef.open(CreateMonthlyComponent);
  }

}

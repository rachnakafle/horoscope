import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateWeeklyComponent } from '../Dialogs/update-weekly/create-weekly/create-weekly.component';

@Component({
  selector: 'app-update-weekly',
  templateUrl: './update-weekly.component.html',
  styleUrls: ['./update-weekly.component.css']
})
export class UpdateWeeklyComponent implements OnInit {

  constructor(  private dialogRef: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialogRef.open(CreateWeeklyComponent);
  }
} 

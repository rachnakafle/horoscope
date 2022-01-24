import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { CreateMonthlyComponent } from '../Dialogs/update-monthly/create-monthly/create-monthly.component';

@Component({
  selector: 'app-update-monthly',
  templateUrl: './update-monthly.component.html',
  styleUrls: ['./update-monthly.component.css'],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],

})
export class UpdateMonthlyComponent implements OnInit {
  selected_date: Date;

  constructor( private dialogRef: MatDialog, private _datepipe: DatePipe) { this.selected_date = new Date();
   }

  ngOnInit(): void {
  }

  dateChanged(e:any){}

  openDialog(){ 
    this.dialogRef.open(CreateMonthlyComponent);
  }

}

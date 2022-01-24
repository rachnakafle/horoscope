import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { CreateYearlyComponent } from '../Dialogs/update-yearly/create-yearly/create-yearly.component';

@Component({
  selector: 'app-update-yearly',
  templateUrl: './update-yearly.component.html',
  styleUrls: ['./update-yearly.component.css'],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
})
export class UpdateYearlyComponent implements OnInit {
  selected_date: Date;

  constructor( private dialogRef:MatDialog, private _date: DatePipe ) { this.selected_date = new Date();}

  ngOnInit(): void { 
  }

  dateChanged(e:any){}

  openDialog(){
    this.dialogRef.open(CreateYearlyComponent);
  }

}

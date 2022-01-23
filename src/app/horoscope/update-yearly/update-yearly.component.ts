import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateYearlyComponent } from '../Dialogs/update-yearly/create-yearly/create-yearly.component';
// import { CreateYearlyComponent } from 'src/app/Dialogs/update-yearly/create-yearly/create-yearly.component';

@Component({
  selector: 'app-update-yearly',
  templateUrl: './update-yearly.component.html',
  styleUrls: ['./update-yearly.component.css']
})
export class UpdateYearlyComponent implements OnInit {

  constructor( private dialogRef:MatDialog) { }

  ngOnInit(): void { 
  }

  openDialog(){
    this.dialogRef.open(CreateYearlyComponent);
  }

}

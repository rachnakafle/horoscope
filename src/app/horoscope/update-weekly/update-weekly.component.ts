import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateWeeklyComponent } from '../Dialogs/update-weekly/create-weekly/create-weekly.component';
import 'jquery';
import {
  NgbDateAdapter,
  NgbDateNativeAdapter,
} from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { UpdateWeeklyService } from '../service/update-weekly.service';

@Component({
  selector: 'app-update-weekly',
  templateUrl: './update-weekly.component.html',
  styleUrls: ['./update-weekly.component.css'],
  providers: [
    {
      provide: NgbDateAdapter,
      useClass: NgbDateNativeAdapter,
    },
  ],
})
export class UpdateWeeklyComponent implements OnInit {
  selected_date: Date;
  allweekly:any;
  formatted_date: any;
  weeklyrange: any;

  constructor(
    private dialogRef: MatDialog,
    private _datepipe: DatePipe,
    private _weeklyservice: UpdateWeeklyService
  ) {
    this.selected_date = new Date();
    this.formatted_date = _datepipe.transform(this.selected_date, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.getWeeklyRange();
    // this.getWeeklyByDate();
  }

  dateChanged(e: any) {
    this.selected_date = e;
    this.getWeeklyRange();
  }
  
  // getWeeklyByDate() { 
  //   let data:any;
  //   this._weeklyservice.getWeekById(this.formatted_date).subscribe({
  //     next:(x:any) => {
  //       data = x;
  //     },
  //     error:(e:any) => {
  //       console.log('Get Error:' + e);        
  //     },
  //     complete: () => {
  //       this.allweekly = data.date;
  //       console.log(this.allweekly);        
  //     }
  //   })
  // }

  getWeeklyRange() { 
    let data: any;    
    this._weeklyservice.getWeekRange(this.formatted_date).subscribe({
      next: (x: any) => {
        data = x;
      },
      error: (e: any) => {
        console.log('Get Error:' + e);        
      },
      complete: () => {
        this.weeklyrange = data.weekRange.weekRangeNepali;
        console.log(this.weeklyrange);        
      }
    });
  }

  openDialog() {
    this.dialogRef.open(CreateWeeklyComponent);
  }
}

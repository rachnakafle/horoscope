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
  selectedWeekStart: Date;
  selectedWeekEnd: Date;

  constructor(
    private dialogRef: MatDialog,
    private _datepipe: DatePipe,
    private _weeklyservice: UpdateWeeklyService
  ) {
    this.selected_date = new Date();
    this.selectedWeekStart = this.startOfWeek(this.selected_date);
    this.selectedWeekEnd = this.endofweek(this.selected_date);
  }

  ngOnInit(): void {
    console.log(this.selected_date.getDay());
  }

  startOfWeek(date: any) {
    var diff = date.getDate() - date.getDay();
    return new Date(date.setDate(diff));
  }
  endofweek(date: any) {
    var lastday = date.getDate() - date.getDay() + 6;
    return new Date(date.setDate(lastday));
  }

  dateChanged(e: any) {
    this.selected_date = e;
    this.selectedWeekStart = this.startOfWeek(this.selected_date);
    this.selectedWeekEnd = this.endofweek(this.selected_date);
    this.getWeeklyByDate();
  }
  getWeeklyByDate() {}

  // getWeeklyRange() {
  //   let selectedWeek = this._datepipe.transform(
  //     this.selected_date, 'yyy-MM-dd'
  //   );
  //   let data: any;
  //   this._weeklyservice.getWeekRange(selectedWeek).subscribe({
  //     next: (x: any) => {
  //       data = x;
  //     },
  //     error: (e: any) => {
  //       console.log('Get Error:' + e);        
  //     },
  //     complete: () => {
  //       this.allweekly = data.
  //     }
  //   });
  // }

  openDialog() {
    this.dialogRef.open(CreateWeeklyComponent);
  }
}

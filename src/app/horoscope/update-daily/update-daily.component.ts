import { Component, OnInit } from '@angular/core';
import { UpdateDailyService } from '../service/update-daily.service';
import { DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import 'jquery'; 
import { Observable } from 'rxjs';

interface FormatState {
  // message: string;
  dateFormat: string;
}

import {
  NgbDateAdapter,
  NgbDateNativeAdapter,
} from '@ng-bootstrap/ng-bootstrap';
import 'jquery'; 


@Component({
  selector: 'app-update-daily', 
  templateUrl: './update-daily.component.html',
  styleUrls: ['./update-daily.component.css'],
  providers: [
    {
      provide: NgbDateAdapter,
      useClass: NgbDateNativeAdapter,
    },
  ],
})
export class UpdateDailyComponent implements OnInit {
  selectedDateFormat$!:Observable<string>;
  selected_date!: Date;
  alldaily: any;
  formatted_date: any;
  constructor(
    private _dailyservice: UpdateDailyService,
    private _datepipe: DatePipe,
    private store: Store<FormatState>
  ) {
    this.selected_date = new Date();
    this.formatted_date = _datepipe.transform(this.selected_date, 'yyyy-MM-dd');

  }
  ngOnInit(): void {
    this.getDailyHoros();
    this.store.dispatch({type: 'M/d/yy'});
    this.selectedDateFormat$ = this.store.select('dateFormat');
  }

  dateChanged(e: any) {
    this.selected_date = e;
    this.getDailyHoros();
  }

  getDailyHoros() {
    let selectedDate = this._datepipe.transform(
      this.selected_date,'yyy-MM-dd');
    let data: any;
    this._dailyservice.getByDate(selectedDate).subscribe({
      next: (x: any) => {
        data = x;
      },
      error: (e: any) => {
        console.log('Get Error:' + e);
      },
      complete: () => {
        console.log(data);
        
        this.alldaily = data.horoscopeDetailsDaily;
        (<any>$('.modal')).modal('hide');
      },
    });
  }
} 

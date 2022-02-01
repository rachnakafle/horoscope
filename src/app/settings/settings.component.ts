import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface FormatState {
  // message: string;
  dateFormat: string; 
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  constructor(  private store: Store<FormatState>) {
  
  }
  // selectedDateFormat!: any ;
  currentdate = new Date();
  selectedDateFormat$!:Observable<string>; 

  dateFormats = [
    {
      format: '6/15/15',
      value: 'M/d/yy',
    },
    {
      format: 'Jun 15, 2015',
      value: 'MMM d, y',
    },
    {
      format: 'June 15, 2015',
      value: 'MMMM d, y',
    },
    {
      format: 'Monday, June 15, 2015',
      value: 'EEEE, MMMM d, y',
    },
  ];

  //  random = "";
  // onChange(event: any) {
  //   this.selectedDateFormat = event.target.value;
  //   console.log(this.selectedDateFormat);
  // }

  ngOnInit(): void {
    // console.log(date.format);
    // console.log(this.selectedDateFormat);
    this.store.dispatch({type: 'M/d/yy'});
    this.selectedDateFormat$ = this.store.select('dateFormat');
  }

  onChange(event: any) {      
    this.store.dispatch({type: event.target.value});        
    this.selectedDateFormat$ = this.store.select('dateFormat');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  constructor() {}
  selectedDateFormat!: any ;
  currentdate = new Date();

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
  onChange(event: any) {
    // console.log(e.target.value);
    this.selectedDateFormat = event.target.value;
    console.log(this.selectedDateFormat);
  }

  ngOnInit(): void {
    // console.log(date.format);
    console.log(this.selectedDateFormat);
  }
}

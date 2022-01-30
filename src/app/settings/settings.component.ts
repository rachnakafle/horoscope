import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
 
  constructor() { }

  currentdate = new Date();

  dateFormats = [
    {
      dateformat: 'MM/DD/YYYY' 
    },
    {
      dateformat: 'DD/MM/YYYY' 
    },   
    {
      dateformat: 'YYYY/DD/MM'
    }
  ]

  
  
  ngOnInit(): void {
  }
}

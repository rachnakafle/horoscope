import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HoroscopeService } from './service/horoscope.service';
import 'jquery';
import { Observable } from 'rxjs';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-horoscope',
  templateUrl: './horoscope.component.html',
  styleUrls: ['./horoscope.component.css'],
})
export class HoroscopeComponent implements OnInit {
  baseUrl = environment.baseUrl;
  loader: boolean = false;
  horoscopedata: any;

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  constructor(
    public router: Router,
    private _horoscopeservice: HoroscopeService
  ) {}

  ngOnInit(): void {
    this.gethoroscope();
  }

  gethoroscope() {
    this.loader = true;
    let temp:any;
    this._horoscopeservice.getAll().subscribe({
      next:(x:any)=>{
        temp = x;
      },
      error(e:any){
        console.log('Error:'+e);
      },
      complete:()=>{
        this.horoscopedata = temp;
        (<any>$('.modal')).modal('hide');
        this.loader = false;
      } 
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  // openDialog(){
  //   this.dialogRef.open(CreateManageComponent);
  // }
}

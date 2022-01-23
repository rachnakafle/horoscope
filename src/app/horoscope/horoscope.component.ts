import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router'; 
import { environment } from 'src/environments/environment';
// import { CreateManageComponent } from './Dialogs/horoscope/create-horoscope/create-manage.component';
import { HoroscopeService } from './service/horoscope.service';
import 'jquery';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-horoscope', 
  templateUrl: './horoscope.component.html',
  styleUrls: ['./horoscope.component.css']
})
export class HoroscopeComponent implements OnInit {  
 baseUrl = environment.baseUrl;
  horoscopedata$!:Observable<any>;
  constructor( 
    public router: Router,
    private _horoscopeservice : HoroscopeService,
    private dialogRef: MatDialog
    ) { }

  ngOnInit(): void {
    this.gethoroscope();
  }

  gethoroscope() { 
    this.horoscopedata$ = this._horoscopeservice.getAll();
    (<any>$('modal')).modal('hide');
  }

  // openDialog(){
  //   this.dialogRef.open(CreateManageComponent); 
  // }

}

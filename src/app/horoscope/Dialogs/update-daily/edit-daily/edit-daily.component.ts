import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HoroscopeService } from 'src/app/horoscope/service/horoscope.service';
import { UpdateDailyService } from 'src/app/horoscope/service/update-daily.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'dialog-edit-daily',
  templateUrl: './edit-daily.component.html',
  styleUrls: ['./edit-daily.component.css'],
})
export class EditDailyComponent implements OnInit {
  baseUrl = environment.baseUrl;

  @Input() selected_date: any;
  @Output('getDailyHoros') getDailyHoros: EventEmitter<any> =
    new EventEmitter();

  editDailyForm = new FormGroup({
    horoscopeId: new FormControl(''),
  });
  allSigns: any;
  selectedId!: number;
  selectedDaily: any;
  engDesc: any;
  nepDesc: any;
  selectedSignImage: any;

  constructor(
    private _horoscopeservice: HoroscopeService,
    private _dailyservice: UpdateDailyService
  ) {}

  ngOnInit(): void {}

  getAllSigns(){
    this._horoscopeservice.getAll().subscribe({
      next: (x: any) => {
        this.allSigns = x;
      },
      error: (e: any) => {
        console.log('Error:' + e);
      },
      complete: () => {},
    });
  }

  assignAll(id:number) {
    this.selectedId = id;
    this.getAllSigns();
    
    let temp:any;
    this._dailyservice.getById(id).subscribe({
      next: (x: any) => {
        temp = x;
      },
      error: (e: any) => {
        console.log('Error:' + e);
      },
      complete: () => {
        this.selectedDaily = temp.horoscope;
        this.engDesc = this.selectedDaily.horoscopeDescriptionEnglish;
        this.nepDesc = this.selectedDaily.horoscopeDescriptionNepali;
        this.selectedSignImage = this.baseUrl + this.selectedDaily.horoscopeImagePath
      },
    });
  }

  descEngChange(e: any) {
    this.engDesc = e.editor.getData();
  }

  descNepChange(e: any) {
    this.nepDesc = e.editor.getData();
  }

  editDaily(){
    
    let data = {
      id: this.selectedId,
      horoscopeDescriptionEnglish: this.engDesc,
      horoscopeDescriptionNepali: this.nepDesc
    };
    console.log(data);

    this._dailyservice.update(data).subscribe({
      next:(x:any)=>{
        console.log("success"+x);
      },
      error:(err:any)=>{
        console.log("Error:"+err);
      },
      complete:()=>{
        this.getDailyHoros.emit();
      }
    });

  }

}

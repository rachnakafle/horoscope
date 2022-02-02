import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HoroscopeService } from 'src/app/horoscope/service/horoscope.service';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { UpdateWeeklyService } from 'src/app/horoscope/service/update-weekly.service';

@Component({
  selector: 'dialog-edit-weekly',
  templateUrl: './edit-weekly.component.html',
  styleUrls: ['./edit-weekly.component.css']
})
export class EditWeeklyComponent implements OnInit {
  baseUrl = environment.baseUrl;

  @Input() weeklyrange: any;
  @Output('getDailyHoros') getWeeklyHoros: EventEmitter<any> =
  new EventEmitter();

  editWeeklyForm = new FormGroup({
    horoscopeId: new FormControl(''),
  });
  allSigns: any;
  selectedId!: number;
  selectedhorosId!: number;
  selectedDaily: any;
  engDesc: any;
  nepDesc: any;
  selectedSignImage: any;

  constructor(
    private _horoscopeservice: HoroscopeService,
    private _weeklyservice: UpdateWeeklyService
  ) { }

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
    this.selectedhorosId = this.selectedhorosId;
    this.getAllSigns();
    
    let temp:any;
    this._weeklyservice.getWeekById(id).subscribe({
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

  editWeekly(){    
    let data = {
      id: this.selectedId,
      horoscopeId: this.selectedhorosId,
      horoscopeDescriptionEnglish: this.engDesc,
      horoscopeDescriptionNepali: this.nepDesc
    };
    console.log(data);

    this._weeklyservice.updateWeekly(data).subscribe({
      next:(x:any)=>{
        console.log("success"+x);
      },
      error:(err:any)=>{
        console.log("Error:"+err);
      },
      complete:()=>{
        this.getWeeklyHoros.emit();
        console.log(this.getWeeklyHoros);                
      }
    });
  }
}

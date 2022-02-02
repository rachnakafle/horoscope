import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { UpdateDailyService } from 'src/app/horoscope/service/update-daily.service';
import { HoroscopeService } from 'src/app/horoscope/service/horoscope.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'dialog-app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  baseUrl = environment.baseUrl;
  engDesc!: string;
  nepDesc!: string;
  allHoros: any;
  selectedHorosId!: number;
  selectedHorosImage: any;

  @Input() selected_date: any;
  formatted_date: any;
  @Output() getDailyHoros: EventEmitter<any> = new EventEmitter();

  createDailyForm = new FormGroup({
    horoscopeId: new FormControl('', Validators.required),
  });

  get horoscopeId() {
    return this.createDailyForm.get('horoscopeId');
  } 

  constructor(
    private _horoscopeservice: HoroscopeService,
    private _dailyservice: UpdateDailyService,
    private _datepipe: DatePipe
  ) { this.selected_date = new Date();
  this.formatted_date = _datepipe.transform(this.selected_date, 'yyyy-MM-dd');  
}

  ngOnInit(): void {}

  assignAllHoros() {
    this.engDesc = '';
    this.nepDesc = '';

    this._horoscopeservice.getAll().subscribe({
      next: (x: any) => {
        this.allHoros = x;
      },
      error: (e: any) => {
        console.log('Error:' + e);
      },
      complete: () => {},
    });
  }

  horosSelector(horosId: number, horosImage: any) {
    this.selectedHorosId = horosId;
    this.selectedHorosImage = this.baseUrl + horosImage;
  }

  descEngChange(e: any) {
    this.engDesc = e.editor.getData();
  }

  descNepChange(e: any) {
    this.nepDesc = e.editor.getData();
  }

  createDaily() {
    let data = {
      horoscopeId: this.createDailyForm.value.horoscopeId,
      horoscopeDateEnglish: this.selected_date,
      horoscopeDescriptionEnglish: this.engDesc,
      horoscopeDescriptionNepali: this.nepDesc,
    };

    this._dailyservice.adddaily(data).subscribe({
      next: (x: any) => {},
      error: (err: any) => {
        console.log('Error:' + err);
      },
      complete: () => {
        this.getDailyHoros.emit();
      },
    });
  }
}

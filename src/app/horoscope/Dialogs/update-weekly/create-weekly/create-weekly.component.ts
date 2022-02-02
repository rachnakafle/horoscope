import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HoroscopeService } from 'src/app/horoscope/service/horoscope.service';
import { UpdateWeeklyService } from 'src/app/horoscope/service/update-weekly.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'dialog-create-weekly',
  templateUrl: './create-weekly.component.html',
  styleUrls: ['./create-weekly.component.css'],
})
export class CreateWeeklyComponent implements OnInit {
  baseUrl = environment.baseUrl;
  selectedHorosId!: number;
  selectedHorosImage: any;
  engDesc!: string;
  nepDesc!: string;
  allHoros: any;

  @Input() selected_date: any;
  @Input() weeklyrange: any;
  @Output() getWeeklyHoros: EventEmitter<any> = new EventEmitter();

  createWeeklyForm = new FormGroup({
    horoscopeId: new FormControl('', Validators.required),
  });

  constructor(
    private _horoscopeservice: HoroscopeService,
    private _weeklyservice: UpdateWeeklyService
  ) {}

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

  createWeekly() {
    let data = {
      horoscopeId: this.createWeeklyForm.value.horoscopeId,
      horoscopeDateEnglish: this.selected_date,
      horoscopeDescriptionEnglish: this.engDesc,
      horoscopeDescriptionNepali: this.nepDesc,
    };

    console.log(data);
    

    this._weeklyservice.addWeekly(data).subscribe({
      next: (x: any) => {},
      error: (err: any) => {
        console.log('Error:' + err);
      },
      complete: () => {
        this.getWeeklyHoros.emit();      
        console.log(this.getWeeklyHoros);          
      },
    });
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HoroscopeService } from 'src/app/horoscope/service/horoscope.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'dialog-edit-horoscope',
  templateUrl: './edit-horoscope.component.html',
  styleUrls: ['./edit-horoscope.component.css'],
})
export class EditHoroscopeComponent implements OnInit {
  baseUrl = environment.baseUrl;
  submitted: boolean = false;
  symbol: any;
  symbolPath: any;
  selectedId: any;

  @Output('gethoroscope') gethoroscope: EventEmitter<any> = new EventEmitter();

  selectedHoros = {
    horoscopeNameEnglish: '',
    horoscopeSubTitleEnglish: '',
    horoscopeNameNepali: '',
    horoscopeSubTitleNepali: '',
    horoscopeImagePath: '',
  };

  editHorosForm = new FormGroup({
    HoroscopeNameEnglish: new FormControl(''),
    HoroscopeSubTitleEnglish: new FormControl(''),
    HoroscopeNameNepali: new FormControl(''),
    HoroscopeSubTitleNepali: new FormControl(''),
    image: new FormControl(''),
  });

  get image() {
    return this.editHorosForm.get('image');
  }

  constructor(private _horoscopeservice: HoroscopeService) {}

  ngOnInit(): void {}

  uploadFile(e: any) {
    if (e.target.files.length > 0) {
      this.symbol = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.symbolPath = event.target.result;
      };
    }
  }

  assignHoros(id: any) {
    this.submitted = false;
    this.selectedId = id;
    let temp: any;
    this._horoscopeservice.getById(id).subscribe({
      next: (x: any) => {
        temp = x;
        // console.log(temp);  
      },
      error: (err: any) => {
        console.log('Cannot edit horoscope by id:' + err);
      },
      complete: () => {
        this.selectedHoros = temp;
        this.symbolPath = this.baseUrl + this.selectedHoros.horoscopeImagePath;
        this.editHorosForm.setValue({
          HoroscopeNameEnglish: this.selectedHoros.horoscopeNameEnglish,
          HoroscopeSubTitleEnglish: this.selectedHoros.horoscopeSubTitleEnglish,
          HoroscopeNameNepali: this.selectedHoros.horoscopeNameNepali,
          HoroscopeSubTitleNepali: this.selectedHoros.horoscopeSubTitleNepali,
          image: '',
        });
        console.log(this.selectedHoros);        
      },
    });
  }

  submitEditHoros() {
    let formData : any = new FormData();
    formData.append('id', this.selectedId);
    formData.append(
      'horoscopeNameEnglish',
      this.editHorosForm.value.HoroscopeNameEnglish || ''
    );
    formData.append(
      'horoscopeSubTitleEnglish',
      this.editHorosForm.value.HoroscopeSubTitleEnglish || ''
    );
    formData.append(
      'HoroscopeNameNepali',
      this.editHorosForm.value.HoroscopeNameNepali || ''
    );
    formData.append(
      'horoscopeSubTitleNepali',
      this.editHorosForm.value.HoroscopeSubTitleNepali || ''
    );
    formData.append(
      'horoscopeImage',
      this.symbol || this.selectedHoros.horoscopeImagePath
    );

    this._horoscopeservice.update(formData).subscribe({
      next: (x: number) => {
        console.log('Next value: ' + x);
        console.log('Success');
      },
      error: (err: Error) => {
        console.error('Error:' + err.message);
      },
      complete: () => {
        this.gethoroscope.emit();
      },
    });
  }
}

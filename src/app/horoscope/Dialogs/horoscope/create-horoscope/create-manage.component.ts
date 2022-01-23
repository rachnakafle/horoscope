import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HoroscopeService } from 'src/app/horoscope/service/horoscope.service';

@Component({
  selector: 'dialog-create-manage',
  templateUrl: './create-manage.component.html',
  styleUrls: ['./create-manage.component.css'],
})
export class CreateManageComponent implements OnInit {
  @Output("gethoroscope") gethoroscope: EventEmitter<any> = new EventEmitter();

  createHorosForm = new FormGroup({
    HoroscopeNameEnglish: new FormControl(''),
    HoroscopeSubTitleEnglish: new FormControl(''),
    HoroscopeNameNepali: new FormControl(''),
    HoroscopeSubTitleNepali: new FormControl(''),
    uploadimage: new FormControl(''),
  });
  symbol: any;
  symbolPath: any;

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

  submitHorosForm() {
    let formData: any = new FormData();
    formData.append(
      'HoroscopeNameEnglish',
      this.createHorosForm.value.HoroscopeNameEnglish || ''
    );
    formData.append(
      'HoroscopeSubTitleEnglish',
      this.createHorosForm.value.HoroscopeSubTitleEnglish || ''
    );
    formData.append(
      'HoroscopeNameNepali',
      this.createHorosForm.value.HoroscopeNameNepali || ''
    );
    formData.append(
      'HoroscopeSubTitleNepali',
      this.createHorosForm.value.HoroscopeSubTitleNepali || ''
    );
    formData.append('horoscopeImage', this.symbol || '');

    this._horoscopeservice.create(formData).subscribe({
      next: (x: number) => {
        console.log('next value: ' + x);
        console.log('Sucessfully created horoscope!!');
      },
      error: (err: Error) => {
        console.error('Error:' + err.message);
        console.error('failed');
      },
      complete: () => {
        this.gethoroscope.emit();
        this.createHorosForm.reset();
        this.symbolPath = undefined;
      },
    });
  }
}

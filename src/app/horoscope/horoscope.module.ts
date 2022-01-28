import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from 'ckeditor4-angular';

import { HoroscopeRoutingModule } from './horoscope-routing.module'; 

import { UpdateDailyComponent } from './update-daily/update-daily.component'; 
import { UpdateMonthlyComponent } from './update-monthly/update-monthly.component';
import { UpdateWeeklyComponent } from './update-weekly/update-weekly.component';
import { UpdateYearlyComponent } from './update-yearly/update-yearly.component';
import { CreateComponent } from './Dialogs/update-daily/create-daily/create.component';
import { CreateWeeklyComponent } from './Dialogs/update-weekly/create-weekly/create-weekly.component';
import { CreateManageComponent } from './Dialogs/horoscope/create-horoscope/create-manage.component';
import { CreateMonthlyComponent } from './Dialogs/update-monthly/create-monthly/create-monthly.component';
import { DeleteDailyComponent } from './Dialogs/update-daily/delete-daily/delete-daily.component';
import { EditDailyComponent } from './Dialogs/update-daily/edit-daily/edit-daily.component';
import { CreateYearlyComponent } from './Dialogs/update-yearly/create-yearly/create-yearly.component';
import { HoroscopeComponent } from './horoscope.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditHoroscopeComponent } from './Dialogs/horoscope/edit-horoscope/edit-horoscope.component';
import { DeleteHoroscopeComponent } from './Dialogs/horoscope/delete-horoscope/delete-horoscope.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    CreateManageComponent, 
    CreateWeeklyComponent,
    CreateMonthlyComponent,
    CreateYearlyComponent,
    DeleteDailyComponent,
    EditDailyComponent,
    CreateComponent,
    HoroscopeComponent,
    UpdateDailyComponent,
    UpdateMonthlyComponent,
    UpdateWeeklyComponent,
    UpdateYearlyComponent,
    EditHoroscopeComponent,
    DeleteHoroscopeComponent,

  ],
  imports: [
    CommonModule,
    HoroscopeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CKEditorModule,
    DragDropModule, 
  ]
})
export class HoroscopeModule { }

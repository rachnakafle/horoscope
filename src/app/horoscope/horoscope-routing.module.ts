import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../Authorization/auth.guard'; 

import { UpdateDailyComponent } from './update-daily/update-daily.component';
import { UpdateMonthlyComponent } from './update-monthly/update-monthly.component';
import { UpdateWeeklyComponent } from './update-weekly/update-weekly.component';
import { UpdateYearlyComponent } from './update-yearly/update-yearly.component';

const routes: Routes = [ 
  {
    component: UpdateDailyComponent,  
    path: 'update-daily',
    data:{
      breadcrumb: 'Daily Update Horoscope'  
    },
    canActivate: [AuthGuard],
  },

  {
    component: UpdateWeeklyComponent,
    path: 'update-weekly',
    data:{
      breadcrumb: 'Weekly Update Horoscope'
    },
    canActivate: [AuthGuard],
  },

  {
    component: UpdateMonthlyComponent,
    path: 'update-monthly',
    data:{
      breadcrumb: 'Monthly Update Horoscope'
    },
    canActivate: [AuthGuard],
  },
  {
    component: UpdateYearlyComponent,
    path: 'update-yearly',
    data:{
      breadcrumb: 'Yearly Update Horoscope'
    }, 
    canActivate: [AuthGuard],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],  
  exports: [RouterModule] 
})
export class HoroscopeRoutingModule { }

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
      breadcrumb: 'Update Daily Component'  
    },
    canActivate: [AuthGuard],
  },

  {
    component: UpdateWeeklyComponent,
    path: 'update-weekly',
    data:{
      breadcrumb: 'Update Weekly Component'
    },
    canActivate: [AuthGuard],
  },

  {
    component: UpdateMonthlyComponent,
    path: 'update-monthly',
    data:{
      breadcrumb: 'Update Monthly Component'
    },
    canActivate: [AuthGuard],
  },
  {
    component: UpdateYearlyComponent,
    path: 'update-yearly',
    data:{
      breadcrumb: 'Update Yearly Component'
    }, 
    canActivate: [AuthGuard],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],  
  exports: [RouterModule] 
})
export class HoroscopeRoutingModule { }

// Installed modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { PieChartComponent } from './layout/pie-chart/pie-chart.component'; 
import { NgxPaginationModule } from 'ngx-pagination';
import { DatePipe } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';

// Component modules
import { AppComponent } from './app.component'; 
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component'; 
import { SidemenuComponent } from './layout/sidemenu/sidemenu.component';
import { BreadcrumbsComponent } from './layout/breadcrumbs/breadcrumbs.component';
import { LoginComponent } from './login/login.component';
import { PaymentmanagementComponent } from './payment-management/paymentmanagement.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//imported modules
import { HoroscopeModule } from './horoscope/horoscope.module';
import { AccountModule } from './account/account.module';
import { UserManagementModule } from './user-management/user-management.module';
import { CustompipePipe } from './payment-management/custompipe.pipe';
import { HighlightPipe } from './payment-management/highlight.pipe';
import { GenderPipe } from './payment-management/gender.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SidemenuComponent, 
    LoginComponent,
    BreadcrumbsComponent,
    PaymentmanagementComponent,
    SettingsComponent,
    DashboardComponent,
    PieChartComponent,
    CustompipePipe,
    HighlightPipe,
    GenderPipe,
  ],
  
  imports: [
    BrowserModule,
    HoroscopeModule,
    UserManagementModule,
    AppRoutingModule,
   
    FormsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    NgChartsModule,
    MatTabsModule, 
    HttpClientModule,
    MatDialogModule,   
    AccountModule,
 
    NgxPaginationModule, 
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }  

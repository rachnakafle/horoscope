import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root',
})
export class UpdateWeeklyService {
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.getToken()}`,
  });
  options = { headers: this.headers };

  constructor(private http: HttpClient) {}

  getToken() {
    return localStorage.getItem('token');
  }

  getWeeklyList() {
    return this.http.get(
      baseUrl + '/api/HoroscopeDetailsWeekly/get-horoscopedetails-weekly_list',
      this.options
    );
  }

  getWeekByDate(date: any): Observable<any> {
    return this.http.get(
      baseUrl +
        '/api/HoroscopeDetailsWeekly/get-horoscopedetails-weekly-by-date?dDate=' +
        date,
      this.options
    );
  }

  getWeekById(id: any): Observable<any> {
    return this.http.get(
      baseUrl +
        '/api/HoroscopeDetailsWeekly/get-horoscopedetails-weekly-by-id?Id=' +
        id,
      this.options
    );
  }

  getWeekRange(date: any) {
    return this.http.get(
      baseUrl + '/api/HoroscopeDetailsWeekly/get-week_range?dDate=' + date,
      this.options
    );
  }
}

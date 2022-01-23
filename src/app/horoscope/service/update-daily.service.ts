import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root',
})
export class UpdateDailyService {
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.getToken()}`,
  });
  options = { headers: this.headers };
  constructor(private http: HttpClient) {}

  getToken() {
    return localStorage.getItem('token');
  }

  getDailyList() {
    return this.http.get(
      baseUrl + '/api/HoroscopeDetailsDaily/get-horoscopedetails-daily_list',
      this.options
    );
  } 

  getByDate(date: any): Observable<any> {
    return this.http.get(
      baseUrl +
        '/api/HoroscopeDetailsDaily/get-horoscopedetails-daily-by-date?dDate=' +
        date,
      this.options
    );
  }


}

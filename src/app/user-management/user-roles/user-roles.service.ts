import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserRolesService {
  baseUrl: string = environment.baseUrl;
  jwthelper = new JwtHelperService();

  headers = new HttpHeaders({
    'Authorization':`Bearer ${this.getToken()}` 
    });
  options = { headers: this.headers };
 
  constructor(private http : HttpClient) { } 

  getToken(){
    return localStorage.getItem('token'); 
  }

  getAllRoles() {
    return this.http.get(this.baseUrl + '/api/UserManager/get-roles-list', this.options);
  } 

  create(data:string): Observable<any> {
    console.log(`Bearer ${this.getToken()}` );
    return this.http.post(this.baseUrl + '/api/UserManager/add-role?roleName='+data,'', this.options);
  }
  
  edit(id:string, data:any):Observable<any>{
    return this.http.put(this.baseUrl + '/api/UserManager/update-role?Id='+id, data , this.options);
  }
}

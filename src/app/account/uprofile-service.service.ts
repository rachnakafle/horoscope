import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { Observable, from } from 'rxjs';  


@Injectable({  
  providedIn: 'root'  
})

export class UprofileServiceService {

  baseUrl: string = environment.baseUrl;
  jwthelper = new JwtHelperService();
  headers = new HttpHeaders({
    'Authorizarion': `Bearer ${this.getToken()}`
  });
  options = {headers: this.headers};

  constructor(private http: HttpClient) { } 

  getUserId() {
    return localStorage.getItem('id') || undefined;
  }

  getUserByUsername(username: string):Observable<any>{
    return this.http.get(this.baseUrl + '/api/UserManager/get-user-by-username?userName='+username);  
  }

  getToken(){
    var mytoken = localStorage.getItem('token') || undefined;
    return mytoken;
  } 

  getUserByToken(token:any){
    var decodedToken:any = this.jwthelper.decodeToken(token);
    var user = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']; 
    return user;
  }

  changePassword(data:any):Observable<any>{
    return this.http.post(this.baseUrl+'/api/UserManager/change-password',data,this.options);
  }
}

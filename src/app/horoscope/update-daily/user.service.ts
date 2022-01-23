import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
 
const baseUrl: string = 'https://jsonplaceholder.typicode.com/posts';  
// const baseUrl: string = 'http://192.168.1.148:3000/signs';    


@Injectable({
  providedIn: 'root'    
})

export class UserService {
   
  constructor(private http: HttpClient) { }

  listUsers(){
    return this.http.get(baseUrl); 
  } 
}
 
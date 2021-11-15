import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  apiUrl = 'https://api.github.com/users';
  /** 
   * get all users
  */
 getUsers(){
  return this.http.get(`${this.apiUrl}?per_page=10`)
 }

 /**
  * get a single user by their username
  */

 getUser(username: string){
  return this.http.get(`${this.apiUrl}/${username}`)
 }



}

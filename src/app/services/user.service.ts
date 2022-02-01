import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Addrol } from '../models/addrol';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public currentUser = null;
  movilidadURL = "http://127.0.0.1:8081/api/"
  constructor(private httpClient: HttpClient) { 
     
    //this.currentUser = "ROLE_USER";
    //this.currentUser="ROLE_ADMIN";
     this.currentUser = localStorage.getItem('rol');
  }

  public lista(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(this.movilidadURL + "users/list");
  }

   public addUser(user:any):Observable<any>{
    return this.httpClient.post<any>(this.movilidadURL+"users",user);
  }

  public addRol(rol:any):Observable<any>{
    return this.httpClient.post<Addrol[]>(this.movilidadURL + "roles/add-to-user",rol);
  }
  public searchByUsername(username:String):Observable<Users>{
    return this.httpClient.get<Users>(this.movilidadURL+ `users/?username=${username}`);
  }

  

  // public updatePerson(person:Person):Observable<any>{
  //   return this.httpClient.put<any>(this.movilidadURL+"update",person);
  // }

  // public countPerson(): Observable<any> {
  //   return this.httpClient.get<any>(this.movilidadURL + "count");
  // }


}
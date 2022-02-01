import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  movilidadURL = "https://cochera-byron.herokuapp.com/person/"
  
  

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.movilidadURL + "all");
  }

  public searchByDni(dni:String):Observable<any>{
    return this.httpClient.get<any>(this.movilidadURL+ `find/${dni}`);
  }

   public addPerson(person:any):Observable<any>{
    return this.httpClient.post<any>(this.movilidadURL+"add",person);
  }

  public updatePerson(person:any):Observable<any>{
    return this.httpClient.put<any>(this.movilidadURL+"update",person);
  }

  public countPerson(): Observable<any> {
    return this.httpClient.get<any>(this.movilidadURL + "count");
  }

  public addToCar(body:any):Observable<any>{
    return this.httpClient.post<any>(this.movilidadURL+"add-to-car",body);
  }
  public removeToCar(body:any):Observable<any>{
    return this.httpClient.post<any>(this.movilidadURL+"remove-to-car",body);
  }

  public listcars(dni:String):Observable<any>{
    return this.httpClient.get<any>(this.movilidadURL+ `cars/${dni}`);
  }


}

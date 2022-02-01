import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/register';
import { Observable } from 'rxjs';
import { Checkin } from '../models/checkin';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  endpoint = "https://cochera-byron.herokuapp.com/register/"

  constructor(private httpClient: HttpClient) {  }

  public lista(day:string): Observable<Register[]> {
    
    return this.httpClient.get<Register[]>(this.endpoint + "searchday/" + day);
  }
 
  public addCheckin(checkin:Checkin):Observable<any>{
    return this.httpClient.post<any>(this.endpoint+"save",checkin);
  }

  public addCheckout(checkin:Checkin):Observable<any>{
    return this.httpClient.post<any>(this.endpoint+"checkout",checkin);
  }

  public countRegister(): Observable<any> {
    return this.httpClient.get<any>(this.endpoint + "count");
  }
  public searchById(id:any):Observable<Register>{
    return this.httpClient.get<Register>(this.endpoint+ `find/${id}`);
  }

  public countParking(): Observable<any> {
    return this.httpClient.get<any>(this.endpoint + "free");
  }
  public searchCarbyDay(registrationplate:string): Observable<Register[]> {
    
    return this.httpClient.get<Register[]>(this.endpoint + "searchplate/" + registrationplate);
  }
  
 
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Car} from '../models/car';
import {Brand} from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  movilidadURL = "https://cochera-byron.herokuapp.com/car/"

  constructor(private httpClient: HttpClient) { }
  public lista(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.movilidadURL + "all");
  }

  public addCar(car:Car):Observable<any>{
    return this.httpClient.post<any>(this.movilidadURL+"add",car);
  }

  public searchByPlaca(plate:String):Observable<Car>{
    return this.httpClient.get<Car>(this.movilidadURL+ `findcar/${plate}`);
  }

  public updateCar(car:Car):Observable<any>{
    return this.httpClient.put<any>(this.movilidadURL+"update",car);
  }
  public countCar(): Observable<any> {
    return this.httpClient.get<any>(this.movilidadURL + "count");
  }
  public models(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>("https://johsonrodriguez.github.io/apiautos/marca.json");
  }

}

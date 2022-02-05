import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  name:String = localStorage.getItem('username');
  rol:String = localStorage.getItem('rol');
  constructor() { }
}

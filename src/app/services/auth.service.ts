import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  authURL="https://lordbyron-dev.azure-api.net/oauth-service/oauth/token"
  // authURL="oauth/token"

  constructor(private httpClient: HttpClient,private cookies: CookieService) {
    this.token = '';
   }
  

  private getOptions(): any {
    return {
      headers: {
        'Authorization': 'Basic Zmlyc3QtY2xpZW50OmFzZGYxMjM0',
        'Content-Type':'application/x-www-form-urlencoded',
        'Ocp-Apim-Subscription-Key':'fdedf7de7f014ceea33b36bfedd8075e'
      }
    };
  }

  public login(username, password):any {
    
    const body = new HttpParams()
      .set('username', username)
      .set('grant_type',"password")
      .set('scope', "write")
      .set('password', password);
      return this.httpClient.post(this.authURL ,
      body, this.getOptions()
     
    );
    
    
  }
  

  setSessionToken(token: string): void {
    if (_.isEmpty(this.getSessionToken())) {
      this.cookies.set('session-token', token);
    }
  }
  getSessionToken(): string {
    if (_.isEmpty(this.token)) {
      this.token = this.cookies.get('session-token');
    }
    return this.token;
  }
  
  name:String = localStorage.getItem('username');
  rol:String = localStorage.getItem('rol');
  
}

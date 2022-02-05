import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { Session } from 'src/app/models/session';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/app/models/users';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials:any=LoginUsuario
  token="";
  rol:String="";
  
  roles:any[];
name:String="";
users: Users=null;
  username=""
  password=""

 
  constructor(
    private router: Router, 
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private sessionService: SessionService,
    private userService: UserService,
    private cookies: CookieService
    ) { }
   
 

  login():void{
    // this.sessionService.deleteSession();
    // this.cookies.delete('session-token');
    this.authService.login(this.username, this.password)   
      .subscribe((result: Session) => {
        this.authService.setSessionToken(result.access_token);
        var token =result.access_token;
        this.getuser(token);
        
        this.toastr.success('Bienvenido','Credenciales correctas',{
          timeOut:3000
        });
         this.router.navigate(['/dashboard/dashboard']);

      },err=>{
        this.toastr.error('Usuario y contraseña no son correctos','Error al iniciar sesion',{
          timeOut:3000
        });

      });   
      
  }
  nombre:String="";
  getuser(token){
    
    // var token = this.sessionService.getSessionToken();
    var decoded =jwt_decode(token);
    this.username = decoded["user_name"];
 
    this.userService.searchByUsername(this.username).subscribe(
      data=>{
        this.users=data;
        this.name=this.users["name"];
        this.roles=this.users["roles"];
        this.rol=this.roles[0].name;
        
        localStorage.setItem('username', JSON.stringify(this.name).replace(/['"]+/g, ''));
        localStorage.setItem('rol', JSON.stringify(this.rol).replace(/['"]+/g, ''));
      },
      err =>{
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut:3000
        });
                
      }
    );
    
 }

 
   
  


}

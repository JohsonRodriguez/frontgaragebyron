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


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials:any=LoginUsuario
  token="";

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
    private userService: UserService
    ) { }
   
 

  login():void{
    this.sessionService.deleteSession();

    this.authService.login(this.username, this.password)   
      .subscribe((result: Session) => {
        console.log(result)
        this.authService.setSessionToken(result.access_token);
        
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

 
   
  


}

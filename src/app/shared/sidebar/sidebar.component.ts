import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { SidebarService } from '../../services/sidebar.service';2
import { ToastrService } from 'ngx-toastr';
import jwt_decode from "jwt-decode";
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/app/models/users';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public get currentUser() {
    return this.userService.currentUser;
  }
  
 
token="";
username="";
name:String="";
users: Users=null;
roles?:any[];
  menuItems?:any[];
  menuItemsx?:any[];
  
  constructor(private sidebarService:SidebarService,private router:Router, private sessionService: SessionService,
    private toastr: ToastrService,
    private userService: UserService,
    private cookies: CookieService) { 
    this.menuItems=sidebarService.menu;
    this.menuItemsx=sidebarService.menux;
    this.getuser();
  }

 

  ngOnInit(): void {
   
    console.log(this.currentUser)
     


  }
  logout(): void {
    this.username="";
    this.name="";
    
    this.sessionService.deleteSession();
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
    
  }
  
  getuser(){
    var token = this.sessionService.getSessionToken();
    var decoded =jwt_decode(token);
    this.username = decoded["user_name"];
 console.log(this.username);
    this.userService.searchByUsername(this.username).subscribe(
      data=>{
        this.users=data;
        this.name=this.users["name"];
        this.cookies.set('username', this.name.toString());
        localStorage.setItem('username', JSON.stringify(this.name).replace(/['"]+/g, ''));
        // localStorage.setItem('rol', JSON.stringify(this.roles.name).replace(/['"]+/g, ''));
      },
      err =>{
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut:3000
        });
                
      }
    );
    this.username="";
    this.name="";
 }



}



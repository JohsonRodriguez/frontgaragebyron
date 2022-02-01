import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';

import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  styles: [
    `
      .greenClass { background-color: green }
      .redClass { background-color: red }
    `
  ]
})
export class UserComponent implements OnInit {

  users: Users[]=[];
  estate="";
  filter="";
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
    this.cargarUsers();
    

  }

  cargarUsers():void{
    this.userService.lista().subscribe(
      data=>{
        this.users=data;
        
       
      },
      err=>{
        console.log(err);
      }
    )
   
  }

 

}

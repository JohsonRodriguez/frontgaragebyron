import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { PersonService } from '../../services/person.service';


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
  styles: [
    `
      .greenClass { background-color: green }
      .redClass { background-color: red }
    `
  ]
})
export class PersonsComponent implements OnInit {

  persons: Person[]=[];
  
  filtername="";
  
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    
    this.cargarPersons();
    

  }

  cargarPersons():void{
    this.personService.lista().subscribe(
      data=>{
        this.persons=data;
        
      },
      err=>{
        console.log(err);
      }
    )
   
  }

 

}

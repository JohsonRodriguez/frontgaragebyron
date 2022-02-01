import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Person } from '../../../models/person';
import { PersonService } from '../../../services/person.service';
import { Observable } from 'rxjs';
import { CarService } from 'src/app/services/car.service';
import { UserService } from 'src/app/services/user.service';
import { Users } from '../../../models/users';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  users: Users=null;
 
  name?="";
  username="";
    
  

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(){
    // this.getDataPlate();
    const username= this.activatedRoute.snapshot.params.username;
    this.userService.searchByUsername(username).subscribe(
      data=>{
        this.users=data;
      },
      err =>{
        this.toastr.error(err.error.mensaje,'Fail',{
          timeOut:3000
        });
        
        this.router.navigate(['/dashboard/edituser']);
        
      }
    );
  }

  onUpdate(){
  //   var car1=this.registrationplate1["registrationplate"];
  //   var car2=this.registrationplate2["registrationplate"];
  //   var car3=this.registrationplate3["registrationplate"];
  //   var init=`[{"registrationplate":"`;
  //   var init2=`{"registrationplate":"`;
  //   var fin='"}]';
  //   var fin2='"},';

  //   if (car1==null){
  //     this.toastr.error('Error al asignar 1er vehiculo','Hubo un error',{
  //           timeOut:3000
  //         });
  //         this.router.navigate(['/dashboard/newperson']);
  //   }else if(car1!=null && car2==null && car3!=null){
  //     this.toastr.error('Error al asignar 2do vehiculo','Hubo un error',{
  //       timeOut:3000
  //     });
  //     this.router.navigate(['/dashboard/newperson']);

  //   }else{
  //   if (car1!=null && car2==null && car3==null){
  //     this.carros=init+car1+fin;
  //   }
  //   if (car1!=null && car2!=null && car3==null){
  //     if(car1==car2){
  //       this.toastr.error('No puedes asignar vehiculos con la misma placa','Hubo un error',{
  //         timeOut:3000
  //       });
  //       this.router.navigate(['/dashboard/newperson']);
  //     }else{
  //       this.carros=init+car1+fin2+init2+car2+fin;
  //     }
      
  //   }
  //   if (car1!=null && car2!=null && car3!=null){
  //     if(car1==car2|| car1==car3 || car2==car3){
  //       this.toastr.error('No puedes asignar vehiculos con la misma placa','Hubo un error',{
  //         timeOut:3000
  //       });
  //       this.router.navigate(['/dashboard/newperson']);
  //     }else{
  //       this.carros=init+car1+fin2+init2+car2+fin2+init2+car3+fin;
  //     }
       
  //   }}
  //   this.placas = 
  //   {
  //     "dni": this.person.dni,
  //     "name": this.person.name,
  //     "lastname": this.person.lastname,
  //     "phone":  this.person.phone,
  //     "type":this.person.type,
  //     "state": this.person.state,
  //     "cars":[
  //       {"registrationplate":this.registrationplate1["registrationplate"]},
  //       {"registrationplate":this.registrationplate2["registrationplate"]},
  //        {"registrationplate":this.registrationplate3["registrationplate"]}
  
  //     ]
  // }
  // console.log(this.placas)
  //   this.personService.updatePerson(this.placas).subscribe(
  //     data=>{
  //       console.log(data);
  //       this.toastr.success('Persona Actualizada','OK',{
  //         timeOut:3000
  //       });
  //       this.router.navigate(['/dashboard/persons']);

  //     },err=>{
  //       this.toastr.error(err.error.mensaje,'Fail',{
  //         timeOut:3000
  //       });
        
        

  //     }
      
  //   );
 
  };

  // getDataPlate(){
  //   this.data$=this.carService.lista();
  // }

}

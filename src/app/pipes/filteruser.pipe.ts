import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteruser'
})
export class FilteruserPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultname=[];
    for(const name of value){
      if(name.name.toUpperCase().indexOf(arg.toUpperCase())>-1 || name.username.toUpperCase().indexOf(arg.toUpperCase())>-1){

        resultname.push(name);
      };
    };
    return resultname;
  }

}

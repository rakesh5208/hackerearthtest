import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value){
      const money = parseInt(value) ;
      
      if(money > 999999)
      {
        return (money / 1000000) + " million"  ;
      }else{
        return money;
      }
    }else{
      return 'N/A';
    }
  }

}

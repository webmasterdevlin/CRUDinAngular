import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeName'
})
export class EmployeeNamePipe implements PipeTransform {
  // This method accepts an Employee object
  transform(value: any, args?: any): any {
    return value.firstName + ' ' + value.lastName;
  }

}

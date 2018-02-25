import { Component } from '@angular/core';
import {Employee} from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stock Trading';
  today = new Date();
  stocks = ['AAPL', 'IBM', 'GOOG', 'UBER', 'ABC', 'XYZ'];
  employee: Employee = new Employee('Devlin', 'Duldulao', '100000');

}

import {Component, OnInit} from '@angular/core';
import {Stock} from '../models/stock';
import {StockService} from '../services/stock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stocks: Stock[] = [];
  selectedStock: Stock;
  updateEnabled = false;

  constructor(private _stockService: StockService) {
  }

  getStocks() {
    this._stockService.getApi().subscribe(data => {
        console.log(data);
        this.stocks = data;
      }, error => console.log(error)
    );
  }

  ngOnInit() {
    return this.getStocks();
  }

  addStock(newCode: string, newName: string) {
    this._stockService.postStock(newCode, newName).subscribe(
      data => this.getStocks()
    );
  }

  loadDetails(stock: Stock) {
    this.updateEnabled = true;
    this.selectedStock = stock;
  }

  updateStock(newCode: string, newName: string) {
    this._stockService.putStock(this.selectedStock.id, newCode, newName).subscribe(
      data => this.getStocks()
    );
    console.log(this.selectedStock.name + ' is updated');
  }

  removeStock(id) {
    this._stockService.deleteStock(id).subscribe(
      data => this.getStocks()
    );
    console.log(`${id} is just deleted`);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Stock} from '../models/stock';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class StockService {

  private _url = 'http://localhost:3000/stocks/';

  constructor(private _httpClient: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return Observable.throw(error.message);
  }

  getApi(): Observable<Stock[]> {
    return this._httpClient
      .get<Stock[]>(this._url)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  postStock(newCode: string, newName: string): Observable<any> {
    return this._httpClient.post(this._url, {name: newName, stockCode: newCode});
  }
  putStock(id: number, newCode: string, newName: string): Observable<any> {
    return this._httpClient.put(`${this._url}${id}`, {
      stockCode: newCode,
      name: newName
    });
  }
  deleteStock(id: number): Observable<any> {
    return this._httpClient.delete(`${this._url}${id}`);
  }
}

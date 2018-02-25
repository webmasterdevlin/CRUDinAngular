import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import { DateFormatterPipe } from './pipes/date-formatter.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { EmployeeNamePipe } from './pipes/employee-name.pipe';
import {FormsModule} from '@angular/forms';
import { StocksComponent } from './stocks/stocks.component';
import {HttpClientModule} from '@angular/common/http';
import {StockService} from './services/stock.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    MutualfundsComponent,
    DateFormatterPipe,
    CapitalizePipe,
    EmployeeNamePipe,
    StocksComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    NgbModule.forRoot(),
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }

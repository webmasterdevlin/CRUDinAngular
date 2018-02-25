import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StocksComponent} from './stocks/stocks.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'stocks', component: StocksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AccessComponent } from './access/access.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AccountListComponent } from './account-list/account-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';


@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    ProductListComponent,
    AccountListComponent,
    OrderListComponent,
    InvoiceListComponent,
    HomeComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'orders', component: OrderListComponent },
      { path: 'invoices', component: InvoiceListComponent },
      { path: 'accounts', component: AccountListComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'reports', component: ReportsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

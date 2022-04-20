import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { EnquiryformComponent } from './enquiryform/enquiryform.component';
import { EnquirydetailComponent } from './enquirydetail/enquirydetail.component';
import { QuotationdetailComponent } from './quotationdetail/quotationdetail.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddquotationComponent } from './addquotation/addquotation.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SidebarComponent,
    CustomerDashboardComponent,
    EnquiryformComponent,
    EnquirydetailComponent,
    QuotationdetailComponent,
    AdmindashboardComponent,
    AddquotationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

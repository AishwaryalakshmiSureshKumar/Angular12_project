import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { EnquiryformComponent } from './enquiryform/enquiryform.component';
import { EnquirydetailComponent } from './enquirydetail/enquirydetail.component';
import { QuotationdetailComponent } from './quotationdetail/quotationdetail.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddquotationComponent } from './addquotation/addquotation.component';

const routes: Routes = [{path: 'signup', component: RegisterComponent}, {path: 'login', component: LoginComponent}, {path: 'customerdashboard', component: CustomerDashboardComponent}, {path: 'newenquiry', component: EnquiryformComponent}, {path: 'enquirydetail', component: EnquirydetailComponent},
                        {path: 'quotationdetail', component: QuotationdetailComponent}, {path: 'admindashboard', component: AdmindashboardComponent},
                        {path: 'addquotation', component: AddquotationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

console.log("11111111111111")

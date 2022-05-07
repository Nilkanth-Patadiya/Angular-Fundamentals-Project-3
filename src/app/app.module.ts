import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AcnemplistComponent } from './acnemplist/acnemplist.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    ProductlistComponent,
    AcnemplistComponent,
    HomeComponent,
    ContactUsComponent,
    PagenotfoundComponent
  ],
  imports: [BrowserModule,HttpClientModule,RouterModule.forRoot([
    {path:'home', component:HomeComponent},
    {path:'plist', component:ProductlistComponent},
    {path:'aelist', component:AcnemplistComponent},
    {path:'emplist', component:EmployeelistComponent},
    {path:'contus', component:ContactUsComponent},
    {path:'',redirectTo: '/home', pathMatch: 'full' },
    {path:'**',component:PagenotfoundComponent}
  ]

  )],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module
import { RoutingModule } from './routing.module';

//Pages
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class PagesModule { }

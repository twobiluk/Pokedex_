import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from '../pages/routing.module';





@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RoutingModule
  ],
  exports: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent

  ]
})
export class SharedModule { }

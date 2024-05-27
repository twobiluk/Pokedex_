import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';



@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokeHeaderComponent
  ]
})
export class SharedModule { }

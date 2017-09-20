import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StarComponent} from './star.component';
import {FormsModule} from '@angular/forms';
import {ConvertToSpacesPipes} from './convert-to-spaces.pipes';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent,
    ConvertToSpacesPipes
  ],
  exports: [
    StarComponent,
    ConvertToSpacesPipes,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }

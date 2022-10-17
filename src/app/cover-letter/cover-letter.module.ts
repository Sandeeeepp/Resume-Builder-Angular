import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Template1Component } from './template1/template1.component';
import {FormsModule} from '@angular/forms'



@NgModule({
  declarations: [
    Template1Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    Template1Component
  ]
})
export class CoverLetterModule { }

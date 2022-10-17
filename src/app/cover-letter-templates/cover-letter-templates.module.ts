import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Temp1Component } from './temp1/temp1.component';

@NgModule({
  declarations: [Temp1Component],
  imports: [CommonModule, FormsModule],
  exports:[Temp1Component]
})
export class CoverLetterTemplatesModule {}

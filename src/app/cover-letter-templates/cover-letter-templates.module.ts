import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputComponentComponent } from './input-component/input-component.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { Temp1Component } from './temp1/temp1.component'

@NgModule({
  declarations: [
    InputComponentComponent,
    Temp1Component
  ],
  imports: [CommonModule, FormsModule,MatExpansionModule,MatIconModule,MatInputModule,MatFormFieldModule,MatButtonModule],
  exports:[InputComponentComponent,Temp1Component]
})
export class CoverLetterTemplatesModule {}

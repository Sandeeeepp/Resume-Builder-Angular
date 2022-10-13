import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Template1Component } from './template1/template1.component';
import { CreateResumeComponent } from './create-resume/create-resume.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    Template1Component,
    CreateResumeComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSliderModule,
    MatChipsModule,
    MatSelectModule
    
    
  ],
  exports:[
    Template1Component,
    CreateResumeComponent,
  ],
})
export class ResumeModule { 
  
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Template1Component } from './template1/template1.component';
import { CreateResumeComponent } from './create-resume/create-resume.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import { Template2Component } from './template2/template2.component';
import { Template3Component } from './template3/template3.component';
import { Template4Component } from './template4/template4.component';
import {MatDialogModule} from '@angular/material/dialog';
import { GetInitialsPipe } from './get-initials.pipe';

@NgModule({
  declarations: [
    Template1Component,
    CreateResumeComponent,
    Template2Component,
    Template3Component,
    Template4Component,
    GetInitialsPipe,
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
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports:[
    Template1Component,
    CreateResumeComponent,
    Template2Component,
    Template3Component,
    Template4Component
  ],
})
export class ResumeModule { 
  
}

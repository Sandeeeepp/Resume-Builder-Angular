import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateOneComponent } from './template-one/template-one.component';
import { TemplateTwoComponent } from './template-two/template-two.component';
import { InputPageComponent } from './input-page/input-page.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { TemplateThreeComponent } from './template-three/template-three.component';
import { TemplateFourComponent } from './template-four/template-four.component';

@NgModule({
  declarations: [
    TemplateOneComponent,
    TemplateTwoComponent,
    InputPageComponent,
    TemplateThreeComponent,
    TemplateFourComponent,
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    MatChipsModule,
    MatExpansionModule,
    MatTabsModule,
    MatCardModule,
    MatSliderModule,
    MatDialogModule,
  ],
  exports: [
    TemplateOneComponent,
    TemplateTwoComponent,
    InputPageComponent,
    TemplateFourComponent,
    TemplateThreeComponent,
  ],
})
export class CvTemplatesModule {}

import { Component, Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Temp1Component } from './cover-letter-templates/temp1/temp1.component';
import { InputPageComponent } from './cv-templates/input-page/input-page.component';
import { TemplateOneComponent } from './cv-templates/template-one/template-one.component';
import { TemplateTwoComponent } from './cv-templates/template-two/template-two.component';
import { FAQsComponent } from './faqs/faqs.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateResumeComponent } from './resume/create-resume/create-resume.component';
import { Template1Component } from './resume/template1/template1.component';
import { Template2Component } from './resume/template2/template2.component';
import { Template3Component } from './resume/template3/template3.component';
import { Template4Component } from './resume/template4/template4.component';
import { ToolsComponent } from './tools/tools.component';


const routes: Routes = [
  { path: 'tools', component: ToolsComponent },
  { path: 'faqs', component: FAQsComponent },
  { path: 'createResume', component: CreateResumeComponent },
  { path: 'createCV', component: InputPageComponent },
  // {path: '**', component:PageNotFoundComponent},
  { path: '',component:HomeComponent},
  {path:'template2',component:Template2Component},
  { path: 'resumeTemp1',component:Template1Component},
  { path: 'resumeTemp2',component:Template2Component},
  { path: 'resumeTemp3',component:Template3Component},
  { path: 'resumeTemp4',component:Template4Component},
  { path: 'cvTemp1',component:TemplateOneComponent},
  { path: 'coverLetterTemp1',component:Temp1Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

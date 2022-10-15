import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InputPageComponent } from './cv-templates/input-page/input-page.component';
import { TemplateOneComponent } from './cv-templates/template-one/template-one.component';
import { TemplateTwoComponent } from './cv-templates/template-two/template-two.component';
import { FAQsComponent } from './faqs/faqs.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { CreateResumeComponent } from './resume/create-resume/create-resume.component';
import { Template1Component } from './resume/template1/template1.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  { path: 'tools', component: ToolsComponent },
  { path: 'faqs', component: FAQsComponent },
  { path: 'createResume', component: CreateResumeComponent },
  { path: 'createCV', component: InputPageComponent },
  // { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
  { path: '', component: HomeComponent },
  { path: 'resumeTemp1', component: Template1Component },
  { path: 'cvTemp1', component: TemplateOneComponent },
  { path: 'cvTemp2', component: TemplateTwoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

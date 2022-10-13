import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FAQsComponent } from './faqs/faqs.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { CreateResumeComponent } from './resume/create-resume/create-resume.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  {path:'tools',component:ToolsComponent},
   {path:'faqs',component:FAQsComponent},
   {path:'create',component:CreateResumeComponent},
  // {path: '**', component:PageNotFoundComponent},
  { path: '.',   redirectTo: '/Home', pathMatch: 'full' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

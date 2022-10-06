import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-template',
  templateUrl: './resume-template.component.html',
  styleUrls: ['./resume-template.component.css']
})
export class ResumeTemplateComponent implements OnInit {
  name='';
  constructor() { }

  ngOnInit(): void {
  }

  public get name1(){
    return localStorage.getItem('name');
  }
  public get email(){
    return localStorage.getItem('email');
  }
  public get phone(){
    return localStorage.getItem('phone');
  }


 

}

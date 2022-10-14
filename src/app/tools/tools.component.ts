import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css'],
})
export class ToolsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  events: string[] = [];
  opened: boolean = false;
  showResumeOptions = false;
  showCVOptins = false;
  showCoverLetterOptions = false;

  items = [
    './assets/template1.jpeg',
    './assets/template2.jpg',
    './assets/template3.jpeg',
    './assets/template1.jpeg',
  ];

  // shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  display = 'resumeTemplate';

  toCreateResume(currentTemplate:string){
    localStorage.setItem('currentTemplate',currentTemplate)
    this.router.navigateByUrl('create');
  }

  redirectTo(temp: string) {
    switch (temp) {
      case 'res1': {
        this.toCreateResume("resumeTemp1")
        break
      }
      case 'cv1':{
        this.toCreateResume("cvTemp1")
        break
      }
    }
  }
}

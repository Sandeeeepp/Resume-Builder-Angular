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

  toCreateResume(currentTemplate: string) {
    localStorage.setItem('currentTemplate', currentTemplate);
    this.router.navigateByUrl('createResume');
  }

  toCreateCV(currentTemplate: string) {
    localStorage.setItem('currentTemplate', currentTemplate);
    this.router.navigateByUrl('createCV');
  }

  toCreateCL(currentTemplate: string) {
    localStorage.setItem('currentTemplate', currentTemplate);
    this.router.navigateByUrl('CoverInput');
  }

  redirectTo(temp: string) {
    switch (temp) {
      case 'res1': {
        this.toCreateResume('resumeTemp1');
        break;
      }
      case 'res2': {
        this.toCreateResume('resumeTemp2');
        break;
      }
      case 'res3': {
        this.toCreateResume('resumeTemp3');
        break;
      }
      case 'res4': {
        this.toCreateResume('resumeTemp4');
        break;
      }
      case 'cv1': {
        this.toCreateCV('cvTemp1');
        break;
      }
      case 'cv2': {
        this.toCreateCV('cvTemp2');
        break;
      }
      case 'cv3': {
        this.toCreateCV('cvTemp3');
        break;
      }
      case 'cv4': {
        this.toCreateCV('cvTemp4');
        break;
      }
      case 'cl1': {
        this.toCreateCL('cl1');
        break;
      }
      case 'cl2': {
        this.toCreateCL('cl2');
        break;
      }
      case 'cl3': {
        this.toCreateCL('cl3');
        break;
      }
    }
  }
}

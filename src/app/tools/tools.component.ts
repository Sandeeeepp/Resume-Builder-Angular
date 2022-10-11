import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  events: string[] = [];
  opened: boolean=false;
  showResumeOptions=false;
  showCVOptins=false;
  showCoverLetterOptions=false;

  items = ["./assets/template1.jpeg","./assets/template2.jpg","./assets/template3.jpeg","./assets/template1.jpeg"]

  // shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  display='resumeTemplate'

}

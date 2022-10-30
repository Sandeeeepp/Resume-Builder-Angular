import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import { AuthService } from 'src/app/auth.service';
import { education } from 'src/app/education';
import { project } from 'src/app/project';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css'],
})
export class Template1Component implements OnInit {
  @ViewChild('content') content!: ElementRef;

  public downloadPDF() {
    let DATA: any = document.getElementById('content');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Resume.pdf');
    });
  }

  dataSource!: any;
  // proj!: project;
  projects: project[] = [];
  // edu!: education;
  educate: education[] = [];

  //education variables
  course!: string;
  school!: string;
  city!: string;
  sdate!: string;
  edate!: string;

  //projects variable
  name = '';
  title!: string;
  desc!: string;
  constructor(private store: AngularFirestore, private serv: AuthService) {}

  ngOnInit(): void {
    this.getAll();

    this.serv.messageSource.subscribe((message) => {
      this.projects = message;
    });
    this.serv.msgSource.subscribe((message) => {
      this.educate = message;
    });
  }

  getAll() {
    this.store
      .collection('ResumeDetails', (ref) =>
        ref.where('Email', '==', localStorage.getItem('email'))
      )
      .snapshotChanges()
      .subscribe((response) => {
        this.dataSource = response.map((item) =>
          Object.assign({ id: item.payload.doc.id }, item.payload.doc.data())
        );
      });
  }
}

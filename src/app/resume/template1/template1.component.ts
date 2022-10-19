import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { AuthService } from 'src/app/auth.service';
import { education } from 'src/app/education';
import { project } from 'src/app/project';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css'],
})
export class Template1Component implements OnInit {
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

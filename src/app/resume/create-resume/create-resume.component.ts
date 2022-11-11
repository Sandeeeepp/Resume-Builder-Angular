import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatAccordion } from '@angular/material/expansion';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import * as uuid from 'uuid';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { AuthService } from 'src/app/auth.service';
import { project } from 'src/app/project';
import { education } from 'src/app/education';
import { ServiceService } from 'src/app/service.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogElementComponent } from 'src/app/dialog-element/dialog-element.component';

export interface Fruit {
  name: string;
}

export interface Interest {
  name: string;
}

@Component({
  selector: 'app-create-resume',
  templateUrl: './create-resume.component.html',
  styleUrls: ['./create-resume.component.css'],
})
export class CreateResumeComponent implements OnInit {
  proj: project[] = [];
  edu!: education[];
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  panelOpenState = false;

  email = localStorage.getItem('email');
  dataSource: any;
  constructor(
    private store: AngularFirestore,
    private router: Router,
    private serv: AuthService,
    private service: ServiceService,
    public dialog: MatDialog
  ) {
    this.proj = [
      {
        title: this.title,
        desc: this.desc,
      },
    ];
    this.edu = [
      {
        // id:this.id,
        course: this.course,
        school: this.school,
        city: this.city,
        sdate: this.sdate,
        edate: this.edate,
      },
    ];
  }

  openDialog() {
    localStorage.setItem('createTemplate', 'create Resume');
    this.dialog.open(DialogElementComponent);
  }

  ngOnInit(): void {
    this.service.createTemplate.subscribe((value) => {
      if (value == 'create Resume') this.createResume();
    });
  }

  /// project variables
  title = '';
  desc = '';

  // education variables
  // id!:string
  course!: string;
  school!: string;
  city!: string;
  sdate!: string;
  edate!: string;

  //chips
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  //interest chips
  addOnBlurI = true;
  readonly separatorKeysCodesI = [ENTER, COMMA] as const;
  interests: Interest[] = [];

  addI(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.interests.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeI(interest: Interest): void {
    const index = this.interests.indexOf(interest);

    if (index >= 0) {
      this.interests.splice(index, 1);
    }
  }

  //add
  rows = [1];

  addEdu() {
    this.rows.push(2);
  }

  removeEdu() {
    this.rows.pop();
  }

  row = [1];

  addP() {
    this.row.push(2);
  }

  removeP() {
    this.row.pop();
  }

  //save
  show = 'step1';
  save(
    img: string,
    fname: string,
    lname: string,
    phone: string,
    url: string,
    headline: string,
    position: string
  ) {
    // this.store.collection('ResumeDetails').add({
    //   image: img,
    //   fName: fname,
    //   lName: lname,
    //   Phone: phone,
    //   Url: url,
    //   Email: this.email,
    //   HeadLine: headline,
    //    Position:position
    // });
    this.show = 'step2';
  }

  createResume() {
    let currentTemplate = localStorage.getItem('currentTemplate');
    if (currentTemplate != null) this.router.navigateByUrl(currentTemplate);
    this.serv.messageSource.next(this.proj);
    this.serv.msgSource.next(this.edu);
    this.serv.messageSrc.next(this.fruits);
    this.serv.msgSrc.next(this.interests);
    // this.router.navigate(['/resumeTemp1']);
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

  addEducation() {
    const uniqueID = uuid.v4();
    this.edu.push({
      course: '',
      school: '',
      city: '',
      sdate: '',
      edate: '',
    });
  }

  addProjects() {
    this.proj.push({
      title: '',
      desc: '',
    });
  }

  dropDownValue1 = '';

  SetDropDownValue(drpValue: any) {
    this.dropDownValue1 = drpValue.target.value;
  }

  SValue: boolean = true;

  selectValidate(sname: any) {
    if (sname == false) {
      this.SValue = true;
    } else {
      this.SValue = false;
    }
  }
}

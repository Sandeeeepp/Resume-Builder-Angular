import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatAccordion } from '@angular/material/expansion';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-create-resume',
  templateUrl: './create-resume.component.html',
  styleUrls: ['./create-resume.component.css'],
})
export class CreateResumeComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  panelOpenState = false;
  email = localStorage.getItem('Email');
  constructor(private store: AngularFirestore, private router: Router) {}

  ngOnInit(): void {}

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
    headline: string
  ) {
    // this.store.collection('ResumeDetails').add({image:img,fName:fname,lName:lname,Phone:phone,Url:url,Email:this.email,HeadLine:headline});
    this.show = 'step2';
  }

  createResume() {
    let currentTemplate = localStorage.getItem('currentTemplate');
    // alert(currentTemplate)
    if (currentTemplate != null) this.router.navigateByUrl(currentTemplate);
  }
}

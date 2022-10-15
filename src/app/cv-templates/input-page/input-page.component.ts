import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

export interface Skills {
  name: string;
}

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css'],
})
export class InputPageComponent implements OnInit {
  constructor(private router: Router, private store: AngularFirestore) {}

  ngOnInit(): void {
    this.getAll()
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  dataSource: any = {};

  getAll() {
    this.store
      .collection('cv-inputs', (ref) =>
        ref.where('email', '==', localStorage.getItem('email'))
      )
      .snapshotChanges()
      .subscribe((response) => {
        this.dataSource = response.map((item) =>
          Object.assign({ id: item.payload.doc.id }, item.payload.doc.data())
        );
      });
  }

  fname = '';
  lname = '';
  mname = '';
  email = '';
  phoneno = '';
  objective = '';
  addMiddleName = false;

  linkRows = [0];

  add() {
    this.linkRows.push(0);
  }

  remove() {
    this.linkRows.pop();
  }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  skills: Skills[] = [];

  addSkills(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.skills.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeSkills(fruit: Skills): void {
    const index = this.skills.indexOf(fruit);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  eduRows = [0];

  addEducation() {
    this.eduRows.push(0);
  }

  removeEducation() {
    this.eduRows.pop();
  }

  projectRows = [0];

  addProjects() {
    this.projectRows.push(0);
  }

  removeProjects() {
    this.projectRows.pop();
  }

  certificateRows = [0];

  addCertificates() {
    this.certificateRows.push(0);
  }

  removeCertificates() {
    this.certificateRows.pop();
  }

  internshipRows = [0];

  addInternships() {
    this.internshipRows.push(0);
  }

  removeInternships() {
    this.internshipRows.pop();
  }

  jobRows = [0];

  addJobs() {
    this.jobRows.push(0);
  }

  removeJobs() {
    this.jobRows.pop();
  }

  createCV() {
    let currentTemplate = localStorage.getItem('currentTemplate');
    // alert(currentTemplate)
    if (currentTemplate != null) this.router.navigateByUrl(currentTemplate);
    this.store
      .collection('cv-inputs')
      .add({
        email: this.email,
        fname: this.fname,
        mname: this.mname,
        lname: this.lname,
        phoneno: this.phoneno,
        objective: this.objective,
      });
  }
}

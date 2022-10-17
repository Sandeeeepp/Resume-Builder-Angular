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
import { ServiceService } from 'src/app/service.service';
import { details }  from '../input-page-class';

export interface Skills {
  name: string;
}

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css'],
})
export class InputPageComponent implements OnInit {
  constructor(
    private router: Router,
    private store: AngularFirestore,
    private service: ServiceService
  ) {}

  ngOnInit(): void {
    this.getAll();
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
  selectedCity = '';
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
  skillsValue = new Array();

  addSkills(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    this.skillsValue.push(value);

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

  eduRows = [''];

  addEducation() {
    this.eduRows.push('');
  }

  removeEducation() {
    this.eduRows.pop();
  }

  projectRows = [''];

  addProjects() {
    this.projectRows.push('');
  }

  removeProjects() {
    this.projectRows.pop();
  }

  certificateRows = [''];

  addCertificates() {
    this.certificateRows.push('');
  }

  removeCertificates() {
    this.certificateRows.pop();
  }

  internshipRows = [''];

  addInternships() {
    this.internshipRows.push('');
  }

  removeInternships() {
    this.internshipRows.pop();
  }

  jobRows = [''];

  addJobs() {
    this.jobRows.push('');
  }

  removeJobs() {
    this.jobRows.pop();
  }

  createCV() {
    this.getDetails();
    let currentTemplate = localStorage.getItem('currentTemplate');
    // alert(currentTemplate)
    if (currentTemplate != null) this.router.navigateByUrl(currentTemplate);
    // this.store.collection('cv-inputs').add({
    //   email: this.email,
    //   fname: this.fname,
    //   mname: this.mname,
    //   lname: this.lname,
    //   phoneno: this.phoneno,
    //   objective: this.objective,
    // });
  }

  selectedState = '';

  setState(drpValue: any) {
    this.selectedState = drpValue.target.value;
    // alert(this.linkWebsite)
    // alert(this.skillsValue);
  }

  linkWebsite = new Array();
  links = new Array();

  degree = new Array();
  school = new Array();
  cities = new Array();
  educationStartDate = new Array();
  educationEndDate = new Array();

  projectTitle = new Array();
  projectDescription = new Array();
  projectStartDate = new Array();
  projectEndDate = new Array();

  certificateTitle = new Array();

  internshipCompanyName = new Array();
  internshipDesignation = new Array();
  internshipDescription = new Array();

  jobCompanyName = new Array();
  jobRole = new Array();
  jobDescription = new Array();

  // setLinkWebsite(drpValue: any) {
  //   this.linkWebsite = drpValue.target.value;
  //   alert(this.linkWebsite)
  // }

  SValue: boolean = true;

  selectValidate(sname: any) {
    if (sname == false) {
      this.SValue = true;
    } else {
      this.SValue = false;
    }
  }

  getDetails() {
    let details: details = {
      fname: this.fname,
      lname: this.lname,
      mname: this.mname,
      email: this.email,
      phoneno: this.phoneno,
      state: this.selectedState,
      city: this.selectedCity,
      linkWebsite: this.linkWebsite,
      links: this.links,

      skills: this.skillsValue,
      objective: this.objective,

      degree: this.degree,
      school: this.school,
      cities: this.cities,
      educationStartDate: this.educationStartDate,
      educationEndDate: this.educationEndDate,

      projectTitle: this.projectTitle,
      projectDescription: this.projectDescription,
      projectStartDate: this.projectStartDate,
      projectEndDate: this.projectEndDate,

      certificateTitle: this.certificateTitle,

      internshipCompanyName: this.internshipCompanyName,
      internshipDesignation: this.internshipDesignation,
      internshipDescription: this.internshipDescription,

      jobCompanyName: this.jobCompanyName,
      jobRole: this.jobRole,
      jobDescription: this.jobDescription,
    };
    this.service.sendDetails(details);
  }
}

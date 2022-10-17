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

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-create-resume',
  templateUrl: './create-resume.component.html',
  styleUrls: ['./create-resume.component.css'],
})
export class CreateResumeComponent implements OnInit {
  proj:project[]=[];
  edu!:education[]
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  panelOpenState = false;

  
  email = localStorage.getItem('email');
  dataSource:any;
  constructor(private store: AngularFirestore, private router: Router,private serv:AuthService) {
    this.proj=[{
      title:this.title,
      desc:this.desc,
    }]
    this.edu=[{
      // id:this.id,
      course:this.course,
    school:this.school,
    city:this.city,
    sdate:this.sdate,
    edate:this.edate,
    }]
  }

  ngOnInit(): void {}




  /// project variables
  title=''
  desc=''


  // education variables
// id!:string
  course!:string;
    school!:string;
    city!:string;
    sdate!:string;
    edate!:string

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
     this.store.collection('ResumeDetails').add({image:img,fName:fname,lName:lname,Phone:phone,Url:url,Email:this.email,HeadLine:headline});
    this.show = 'step2';
  }

  createResume() {
    let currentTemplate = localStorage.getItem('currentTemplate');
    if (currentTemplate != null) this.router.navigateByUrl(currentTemplate);
  }
  submit(){
    
    this.serv.messageSource.next(this.proj)
    this.serv.msgSource.next(this.edu)
    this.router.navigate(['/resumeTemp1'])
    

  }



  getAll() {
    this.store.collection('ResumeDetails',ref=>ref.where('Email','==',localStorage.getItem('email'))).snapshotChanges().subscribe((response=>{
      this.dataSource=response.map(item=>
        Object.assign({id:item.payload.doc.id},item.payload.doc.data()))
      
    }))
  }

  addEducation() {
    const uniqueID = uuid.v4();
    this.edu.push({
      course: '',
      school: '',
      city: '',
      sdate: '',
      edate:'',
    });
  }

  addProjects(){
    this.proj.push({
      title:'',
      desc:''
    })
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

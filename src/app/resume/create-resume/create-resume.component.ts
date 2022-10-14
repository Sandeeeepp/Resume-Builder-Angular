import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatAccordion } from '@angular/material/expansion';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

import {MatChipInputEvent} from '@angular/material/chips';
import { project } from 'src/app/project';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { education } from 'src/app/education';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-create-resume',
  templateUrl: './create-resume.component.html',
  styleUrls: ['./create-resume.component.css']
})
export class CreateResumeComponent implements OnInit {
  proj!:project[];
  edu!:education[];
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  panelOpenState = false;
  email=localStorage.getItem('email')
//project variables

title!:string;
desc!:string;

//education variables
education!:string;
    school!:string;
    city!:string;
    sdate!:string;
    edate!:string;





  constructor(private store:AngularFirestore,private serv:AuthService,private route:Router) {
    this.proj=[{
      title:this.title,
      desc:this.desc,
    }
    ]
    this.edu=[{
      education:this.education,
      school:this.school,
      city:this.city,
      sdate:this.sdate,
      edate:this.edate,
    }]
   }

  ngOnInit(): void {
  }

  


  //chips
 addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
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
show='step1'
  save(img:string,fname:string,lname:string,phone:string,url:string,headline:string){
     this.store.collection('ResumeDetails').add({image:img,fName:fname,lName:lname,Phone:phone,Url:url,Email:this.email,HeadLine:headline});
    this.show='step2';
  }



  submit(){

    this.serv.messageSource.next([this.title,this.desc])
    this.serv.msgSource.next([this.education,this.school,this.city,this.sdate,this.edate])
     this.route.navigate(['/temp1'])

  }





}

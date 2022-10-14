import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { AuthService } from 'src/app/auth.service';
import { education } from 'src/app/education';
import { project } from 'src/app/project';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css']
})
export class Template1Component implements OnInit {
   dataSource!:any;
   proj!:project;
   projects:project[]=[];
   edu!:education;
   educate:education[]=[];
  name='';
  title!:string
   desc!:string
  constructor(private store:AngularFirestore,private serv:AuthService) { }



  pushing(data:project){
    this.projects.push(data)
  }
  pushing1(data:education){
    this.educate.push(data)
  }
  
  
  ngOnInit(): void {
    // this.getAll();

    this.serv.messageSource.subscribe((message)=>{
      this.proj={
       title:message[0],
        desc:message[1]
      }
      

      this.pushing(this.proj)
    
    })
    this.serv.msgSource.subscribe((message)=>{
      this.edu={
        education:message[0],
        school:message[1],
        city:message[2],
        sdate:message[3],
        edate:message[4],
      }
      console.log(this.edu.school)
      this.pushing1(this.edu)
    })
  }


  getAll(){
    this.store.collection('ResumeDetails',ref=>ref.where('Email','==',localStorage.getItem('email'))).snapshotChanges().subscribe((response=>{
      this.dataSource=response.map(item=>
        Object.assign({id:item.payload.doc.id},item.payload.doc.data()))
        // console.log(this.dataSource.Email)
    }))

}





}
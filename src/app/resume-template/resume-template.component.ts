import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-resume-template',
  templateUrl: './resume-template.component.html',
  styleUrls: ['./resume-template.component.css']
})
export class ResumeTemplateComponent implements OnInit {
   dataSource!:any;
  name='';
  value='clear me'
  constructor(private store:AngularFirestore) { }

  ngOnInit(): void {
    this.getAll();
  }


  getAll(){
    this.store.collection('login',ref=>ref.where("Email",'==',localStorage.getItem('email'))).snapshotChanges().subscribe((response=>{
      this.dataSource=response.map(item=>
        Object.assign({id:item.payload.doc.id},item.payload.doc.data()))
    }))

}

}
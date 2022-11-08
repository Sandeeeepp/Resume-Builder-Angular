import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatAccordion} from '@angular/material/expansion';
import { Router } from '@angular/router';
import { Cover } from '../cover';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;
  @Input() cover!:Cover



  id!:string;
  cname!: string;
  cemail!:string;
  cphno!: string;
  rtitle!: string;
  rname!: string;
  companyname!: string;
  companyaddress!: string;
  city!: string;
  state!: string;
  pcode!: string;
  jobtitle!: string;

  constructor(private store:AngularFirestore,private router:Router) { }

  myDate=new Date();
  ngOnInit(): void {
  }

  step = 0
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  submit(){
// this.store.collection('Cover').add({Date:this.myDate,Cname:this.cname,Cemail:this.cemail,Phone:this.cphno,Rtitle:this.rtitle,Rname:this.rname,Company:this.companyname,companyAddress:this.companyaddress,City:this.city,State:this.state,Pcode:this.pcode,Jobtitle:this.jobtitle})

this.router.navigateByUrl('clTemp1')
  }

}

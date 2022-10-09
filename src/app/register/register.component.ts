import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, query, where, getDocs } from "firebase/firestore";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'forms';
  SValue:boolean=true
  userdata:any
  name=''
  
    dataSource:any;
  schoolnames=[
    'ComputerScience','engineering','management'

  ]
 


  submit(fname:string,lname:string,email:string,PhoneNumber:string,password:string){
   
    localStorage.setItem('email',email);
     this.store.collection('login').add({fName:fname,lName:lname,Email:email,Phone:PhoneNumber,Password:password})
    

}

dropDownValue1=''
  SetDropDownValue(drpValue : any) {
    
    this.dropDownValue1 = drpValue.target.value;
  }



  selectValidate(sname:any){
    if(sname==false){
    this.SValue=true
  }else{
    this.SValue=false
  }
  
  }
  constructor(private store:AngularFirestore){
  }
  ngOnInit(){
  }
  

}


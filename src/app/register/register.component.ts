import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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
 


  submit(name:string,email:string,PhoneNumber:string,password:string){
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('phone',PhoneNumber);
     this.store.collection('login').add({Name:name,Email:email,Phone:PhoneNumber,Password:password})
    

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
    this.getAll();
  }
  getAll(){
    this.store.collection('login').snapshotChanges().subscribe((response=>{
      this.dataSource=response.map(item=>
        Object.assign({id:item.payload.doc.id},item.payload.doc.data()))
    }))

}
}

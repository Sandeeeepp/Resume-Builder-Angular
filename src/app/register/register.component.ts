import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  title = 'forms';
  SValue: boolean = true;
  userdata: any;
  name = '';
  email:string=''
  password:string=''

  dataSource: any;
  schoolnames = ['ComputerScience', 'engineering', 'management'];

  submit(
    fname: string,
    lname: string,
    
    PhoneNumber: string,
    
  ) {
    this.store
      .collection('login')
      .add({
        fName: fname,
        lName: lname,
        Email: this.email,
        Phone: PhoneNumber,
        Password: this.password,
      });
  }
  
  dropDownValue1 = '';
  SetDropDownValue(drpValue: any) {
    this.dropDownValue1 = drpValue.target.value;
  }

  selectValidate(sname: any) {
    if (sname == false) {
      this.SValue = true;
    } else {
      this.SValue = false;
    }
  }
  constructor(private store: AngularFirestore,private auth:AuthService) {}
  ngOnInit() {}


  register(){
    
if(this.email==''){
  alert('please enter email')
  return;
}if(this.password==''){
  alert('please enter password')
  return
}
this.auth.register(this.email,this.password)
this.email='';
this.password=''
  }
}

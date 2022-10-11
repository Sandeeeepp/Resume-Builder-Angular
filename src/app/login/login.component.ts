import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private store: AngularFirestore) {}
  ngOnInit() {}

  dataSource: any;
  email = '';
  password = '';

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  login() {
    //  if (this.email != null && password != null) {
    //   alert(this.store.collection('login', ref=>ref.where('Email',"==",email).where('password','==',password)));
    // }
    //   this.store.collection('login',ref=>ref.where("Email",'==',this.email)).snapshotChanges().subscribe((response=>{
    //     this.dataSource=response.map(item=>
    //       Object.assign({id:item.payload.doc.id},item.payload.doc.data()))
    //   }))
    //   for(let item of this.dataSource){
    //     alert(item.fName)
    //   }
  }
}

import { Component, Input, OnInit } from '@angular/core';

import { collection, query, where, getDocs } from 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Auth } from '@angular/fire/auth/firebase';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  dataSource: any;

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
  email: string = '';
  password: string = '';

  constructor(private store: AngularFirestore, private auth: AuthService) {}
  ngOnInit() {}

  dataSource: any;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  login() {
    // alert(this.store.collection('login',ref=>ref.where('Email','==',this.email)).doc())

    if (this.email == '') {
      alert('please enter email');
      return;
    }
    if (this.password == '') {
      alert('please enter password');
      return;
    }
    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  matcher = new MyErrorStateMatcher();
}

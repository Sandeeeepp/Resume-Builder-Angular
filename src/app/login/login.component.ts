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

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  login() {
    let email = document.getElementById('email')?.innerHTML;
    let password = document.getElementById('password')?.innerHTML;
    if (email != null && password != null) {
      // alert(this.store.collection('login', ref=>ref.where('email',"==",email).where('password','==',password)).g)
    }
  }
}

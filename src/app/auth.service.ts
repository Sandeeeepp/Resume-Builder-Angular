import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { education } from './education';
import { project } from './project';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private service: ServiceService,
    private store: AngularFirestore
  ) {}

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('email', email);
        localStorage.setItem('currentUserEmail', email);
        localStorage.setItem('token', 'true');
        this.router.navigate(['/tools']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/']);
      }
    );
  }

  register(
    email: string,
    password: string,
    fName: string,
    lName: string,
    phoneNo: string
  ) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      () => {
        alert('registration successful');
        this.service.changeShow(true);
        localStorage.setItem('recentRegisteredUserEmail', email);
        this.store
          .collection('registeredUsersDetails')
          .add({
            firstName: fName,
            lastName: lName,
            email: email,
            phoneNumber: phoneNo,
          });
      },
      (err) => {
        alert(err.message);
      }
    );
    this.router.navigate(['/']);
  }

  logout() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  messageSource = new BehaviorSubject<project[]>([]);
  msgSource = new BehaviorSubject<education[]>([]);
  messageSrc = new BehaviorSubject<string[]>([]);
}

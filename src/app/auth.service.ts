import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
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
    private service: ServiceService
  ) {}

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('email', email);
        localStorage.setItem('token', 'true');
        this.router.navigate(['/createCV']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/']);
      }
    );
  }

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      () => {
        alert('registration successful');
        this.service.changeShow(true);
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



  messageSource=new BehaviorSubject<project[]>([]);
  msgSource=new BehaviorSubject<education[]>([]);
  messageSrc=new BehaviorSubject<string[]>([]);
}

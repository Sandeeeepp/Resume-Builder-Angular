import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
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
        this.router.navigate(['/tools']);
      },
      (err) => {
        alert(err.message);
        // this.router.navigate(['/login']);
      }
    );
  }

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      () => {
        alert('registration successful');
        this.service.changeShow(true);
        // this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
        // this.router.navigate(['/register']);
      }
    );
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

  messageSource = new BehaviorSubject<string[]>([]);
  msgSource = new BehaviorSubject<string[]>([]);
  messageSrc = new BehaviorSubject<string[]>([]);
}

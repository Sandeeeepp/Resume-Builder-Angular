import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'project';
  show = true;
  image = '../assets/download.png';
  Home(): void {
    window.location.reload();
  }

  routerDecider = '';
  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit() {
    this.service.show.subscribe((value) => {
      this.show = value;
    });
  }

  submit() {
    this.show = !this.show;
    // this.router.navigateByUrl('register');
    let el = document.getElementById('action');
    if (el != null) {
      if (this.show == false) {
        el.innerHTML = 'Login';
      } else {
        el.innerHTML = 'Register';
      }
    }
  }
}

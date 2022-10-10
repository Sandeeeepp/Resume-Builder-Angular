import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {}

  ngOnInit(): void {}

  submit() {
    this.show = !this.show;
    this.router.navigateByUrl('register');
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

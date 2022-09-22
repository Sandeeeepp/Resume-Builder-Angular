import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'project';
  image='../assets/download.png';
  Home(): void {
    window.location.reload();
}
  constructor() { }

  ngOnInit(): void {
  }

  

}

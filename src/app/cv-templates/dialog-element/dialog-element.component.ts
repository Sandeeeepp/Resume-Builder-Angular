import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-dialog-element',
  templateUrl: './dialog-element.component.html',
})
export class DialogElementComponent {
  constructor(private service:ServiceService) {}

  callCreateCV(){
    this.service.createCV.next('yes')
  }
  
}

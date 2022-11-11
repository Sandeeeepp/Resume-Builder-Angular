import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-dialog-element',
  templateUrl: './dialog-element.component.html',
})
export class DialogElementComponent {
  constructor(private service: ServiceService) {}

  templateType = localStorage.getItem('createTemplate');

  callCreate() {
    if (this.templateType != null)
      this.service.createTemplate.next(this.templateType);
  }
}

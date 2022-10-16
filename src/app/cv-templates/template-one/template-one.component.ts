import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormArrayName } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { details } from '../input-page-class';

@Component({
  selector: 'app-template-one',
  templateUrl: './template-one.component.html',
  styleUrls: ['./template-one.component.css'],
})
export class TemplateOneComponent implements OnInit {
  details!:details;
  constructor(
    private store: AngularFirestore,
    private service: ServiceService
  ) {}

  ngOnInit(): void {
    // this.getAll();
    this.service.details.subscribe((value) => {
      this.details=value
    });
    console.log(this.details)
  }

  dataSource: any = {};

  getAll() {
    this.store
      .collection('cv-inputs', (ref) =>
        ref.where('email', '==', localStorage.getItem('email'))
      )
      .snapshotChanges()
      .subscribe((response) => {
        this.dataSource = response.map((item) =>
          Object.assign({ id: item.payload.doc.id }, item.payload.doc.data())
        );
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-template-one',
  templateUrl: './template-one.component.html',
  styleUrls: ['./template-one.component.css'],
})
export class TemplateOneComponent implements OnInit {
  constructor(private store: AngularFirestore) {}

  ngOnInit(): void {
    this.getAll();
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

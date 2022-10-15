import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css'],
})
export class Template1Component implements OnInit {
  dataSource!: any;
  name = '';
  constructor(private store: AngularFirestore) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.store
      .collection('login', (ref) =>
        ref.where('Email', '==', localStorage.getItem('email'))
      )
      .snapshotChanges()
      .subscribe((response) => {
        this.dataSource = response.map((item) =>
          Object.assign({ id: item.payload.doc.id }, item.payload.doc.data())
        );
      });
  }
}

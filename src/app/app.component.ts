import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ServiceService } from './service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project';
  image = '../assets/resumebuilder-logo.png';
  dataSource: any;
  routerDecider = '';

  Home(): void {
    window.location.reload();
  }

  constructor(
    private store: AngularFirestore,
    private service: ServiceService
  ) {}

  ngOnInit() {
    // this.getAll();
    this.service.routerDecider.subscribe((value) => {
      this.routerDecider = value;
    });
  }

  // getAll() {
  //   this.store
  //     .collection('login')
  //     .snapshotChanges()
  //     .subscribe((response) => {
  //       this.dataSource = response.map((item) =>
  //         Object.assign({ id: item.payload.doc.id }, item.payload.doc.data())
  //       );
  //     });
  // }
}

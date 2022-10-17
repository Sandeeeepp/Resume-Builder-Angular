import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ServiceService } from 'src/app/service.service';
import { details } from '../input-page-class';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-template-one',
  templateUrl: './template-one.component.html',
  styleUrls: ['./template-one.component.css'],
})
export class TemplateOneComponent implements OnInit {
  @ViewChild('content') content!: ElementRef;

  public downloadPDF() {
    let DATA: any = document.getElementById('content');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Resume.pdf');
    });
  }

  details!: details;
  constructor(
    private store: AngularFirestore,
    private service: ServiceService
  ) {}

  ngOnInit(): void {
    // this.getAll();
    this.service.details.subscribe((value) => {
      this.details = value;
    });
    console.log(this.details.fname[0])
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

  value = new Array<number>();
  valueLabel = ['Beginner', 'Moderate', 'Advanced'];

  formatLabel(value: number) {
    return value;
  }
}

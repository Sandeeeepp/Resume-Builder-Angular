import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-temp1',
  templateUrl: './temp1.component.html',
  styleUrls: ['./temp1.component.css']
})
export class Temp1Component implements OnInit {
dataSource!:any
  constructor(private store:AngularFirestore) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.store.collection('Cover',(ref)=>ref.where('Cemail','==',localStorage.getItem('email'))).snapshotChanges().subscribe((response)=>{
      this.dataSource=response.map((item)=>
      Object.assign({id:item.payload.doc.id},item.payload.doc.data()))
    });
  }

}

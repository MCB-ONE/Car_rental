import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'car_rental';

  constructor(private fs: AngularFirestore){

  }

  ngOnInit(){
    this.fs.collection('test').snapshotChanges().subscribe((personas) => {
      personas.map((p) => {
        console.log(p.payload.doc.data());
      })
    })
  }

}

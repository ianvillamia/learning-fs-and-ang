import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
items=[];
constructor(private db:AngularFirestore){

}
ngOnInit(){
  //snappshotCHanges will include id
  this.items=[];
  //reads from collection
  this.db.collection('items',q=>q.orderBy('timestamp','desc')).snapshotChanges().subscribe(serverItems=>{
    //data handles everytime data change in fs
    serverItems.forEach(a=>{
      a.payload.doc.data(); //json object representing inside a var
      let item:any = a.payload.doc.data(); //any meaning to access all the data as well as id
      item.id=a.payload.doc.id;
      this.items.push(item);
    });
  });
}

add(){
  this.db.collection('items').add({
    timestamp:new Date(),
  });
}
update(item){
  this.db.doc(`items/${item.id}`).update({
    timestamp:new Date()

  });

}
delete(item){
  this.db.doc(`item/${item.id}`).delete();

}


}

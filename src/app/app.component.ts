import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

constructor(private db:AngularFirestore){

}
add(){
  this.db.collection('items').add({
    timestamp:new Date(),
  });
}


}

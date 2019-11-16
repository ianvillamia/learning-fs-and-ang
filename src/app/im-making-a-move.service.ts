import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface Todo{
  task:string;
  priority:number;
  
}

@Injectable({
  providedIn: 'root'
})
export class ImMakingAMoveService {

  private collection:AngularFirestoreCollection<Todo>;
  constructor(db:AngularFirestore) { 


  }
}

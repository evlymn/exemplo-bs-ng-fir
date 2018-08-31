import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private db: AngularFireDatabase) {}

  push(obj: any): string {
    return this.db.database.ref('exemplos').push(obj).key;
  }

  update(obj: any, key: string) {
    return this.db.database
      .ref('exemplos')
      .child(key)
      .update(obj);
  }

  set(obj: any, key: string) {
    return this.db.database
      .ref('exemplos')
      .child(key)
      .set(obj);
  }
}

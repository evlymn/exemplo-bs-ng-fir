import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private db: AngularFireDatabase) {}

  push(ref: string, obj: any): string {
    return this.db.database.ref(ref).push(obj).key;
  }

  update(ref: string, obj: any) {
    return this.db.database.ref(ref).update(obj);
  }

  set(ref: string, obj: any) {
    return this.db.database.ref(ref).set(obj);
  }

  getObject(ref: string) {
    return this.db.object(ref).valueChanges();
  }
}

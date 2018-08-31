import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private db: AngularFireDatabase) {}

  salvarUsuarioGithub(uid: string, additionalUserInfo: firebase.auth.AdditionalUserInfo) {
    return this.db.database
      .ref('usuarios')
      .child(uid)
      .child('github')
      .set(additionalUserInfo, err => console.exception(err.message, [err]));
  }
}

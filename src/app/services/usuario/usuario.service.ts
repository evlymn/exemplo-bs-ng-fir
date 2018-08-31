import { AuthenticationService } from './../authentication/authentication.service';
import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private db: DataService, private auth: AuthenticationService) {}

  salvarUsuarioGithub(uid: string, additionalUserInfo: firebase.auth.AdditionalUserInfo) {
    return this.db.set('usuarios/' + uid + '/github', additionalUserInfo);
  }

  obterPerfilGithub() {
  return this.db.getObject('usuarios/' + this.auth.currenUser.uid + '/github/profile');
  }
}

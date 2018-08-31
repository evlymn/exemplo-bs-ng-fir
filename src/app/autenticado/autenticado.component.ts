import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { Observable } from 'rxjs/internal/Observable';
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-autenticado',
  templateUrl: './autenticado.component.html',
  styleUrls: ['./autenticado.component.css']
})
export class AutenticadoComponent implements OnInit {
  perfil: Observable<any>;
  constructor(private auth: AuthenticationService, private user: UsuarioService) {
    this.auth.authState.subscribe(u => {
      if (u) {
        this.perfil = this.user.obterPerfilGithub();
      }
    });
  }

  logOut() {
    this.auth.signOut();
  }

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthenticationService, private user: UsuarioService) {}

  logar() {
    this.auth.signInWithGithubAuthProvider().then(credenciais => {
      this.user
        .salvarUsuarioGithub(credenciais.user.uid, credenciais.additionalUserInfo)
        .then(a => {
          console.log('qualquer coisa:', a);
        })
        .catch(err => console.log('err promise', err));
    });
  }

  ngOnInit() {}
}

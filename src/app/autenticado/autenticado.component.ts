import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-autenticado',
  templateUrl: './autenticado.component.html',
  styleUrls: ['./autenticado.component.css']
})
export class AutenticadoComponent implements OnInit {
  perfil: Observable<any>;
  constructor(private auth: AuthenticationService) {}

  logOut() {
    this.auth.signOut();
  }
  ngOnInit() {}
}

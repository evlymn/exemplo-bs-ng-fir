import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.onAuthStateChanged();
  }

  public get authState(): Observable<firebase.User> {
    return this.angularFireAuth.authState;
  }

  public get currenUser(): firebase.User {
    return this.angularFireAuth.auth.currentUser;
  }

  private onAuthStateChanged() {
    this.angularFireAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.router.navigate(['autenticado']);
      } else {
        this.router.navigate(['']);
      }
    });
  }

  signInWithGithubAuthProvider(): Promise<firebase.auth.UserCredential> {
    return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  signOut() {
    return this.angularFireAuth.auth.signOut();
  }
}

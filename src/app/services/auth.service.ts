import { Injectable } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Firestore, doc, docData } from '@angular/fire/firestore';
import firebase from 'firebase/compat/app';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators'
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
    private firestore: Firestore
  ) { }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }

  getUserObservable(): Observable<User | null> {
    return combineLatest([
      this.auth.user,
      docData(doc(this.firestore, "auth", '0'))
    ]).pipe(
      map(([user, authDb]) => {
        if (user == null){
          return null
        }
        return {
          email: user.email!!,
          admin: authDb['admins'].includes(user.email)
        }
      })
    )
  }
}

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh1ACiG9A0AbSQBRLNLyxNvtNjFJpBC1Y",
  authDomain: "book-bingo-suggestions.firebaseapp.com",
  projectId: "book-bingo-suggestions",
  storageBucket: "book-bingo-suggestions.appspot.com",
  messagingSenderId: "1010648190241",
  appId: "1:1010648190241:web:ec08369ff43369a05fc260",
  measurementId: "G-CZ6Z7L2S5H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

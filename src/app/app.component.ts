import { Component } from '@angular/core';
import { Prompt } from './models/prompt.model';

import { docData, Firestore } from '@angular/fire/firestore';
import { doc } from '@firebase/firestore';
import { Bingo } from './models/bingo.model';
import { AuthService } from './services/auth.service';
import { User } from './models/user';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

const ACTIVE_BINGO_ID = "Q6ZoKH3DtdaSz0ygA5Si"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: String = "Loading..."
  prompts: Prompt[] = []
  selected: Number = -1
  user: User | null = null

  editIcon = faPencil

  constructor(
    firestore: Firestore,
    private authService: AuthService
  ) {
    const bingoRef = doc(firestore, "bingos", ACTIVE_BINGO_ID)

    docData(bingoRef).subscribe(data => {
      const bingo = data as Bingo
      this.title = bingo.name
      this.prompts = bingo.prompts
    })

    authService
      .getUserObservable()
      .subscribe(user => {
        this.user = user
      })
  }

  select(index: Number): void {
    if (index == this.selected){
      this.selected = -1
    } else {
      this.selected = index
    }
  }

  onLoginClicked(): void {
    if (this.user) {
      this.authService.logout()
    } else {
      this.authService.login()
    }
  }

  editorEnabled(): Boolean {
    return this.user?.admin || false
  }
}

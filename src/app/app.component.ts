import { Component } from '@angular/core';
import { Prompt } from './models/prompt.model';

import { docData, Firestore } from '@angular/fire/firestore';
import { doc } from '@firebase/firestore';
import { Bingo } from './models/bingo.model';

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

  constructor(firestore: Firestore) {
    const bingoRef = doc(firestore, "bingos", ACTIVE_BINGO_ID)
    docData(bingoRef).subscribe(data => {
      const bingo = data as Bingo
      this.title = bingo.name
      this.prompts = bingo.prompts
    })
  }

  select(index: Number): void {
    if (index == this.selected){
      this.selected = -1
    } else {
      this.selected = index
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { docData, Firestore } from '@angular/fire/firestore';
import { doc } from '@firebase/firestore';
import { Bingo } from '../models/bingo.model';
import { Book } from '../models/book.model';
import { Prompt } from '../models/prompt.model';

const ACTIVE_BINGO_ID = "Q6ZoKH3DtdaSz0ygA5Si"

@Component({
  selector: 'app-prompts-list',
  templateUrl: './prompts-list.component.html',
  styleUrls: ['./prompts-list.component.scss']
})
export class PromptsListComponent implements OnInit {

  heading: String = "Loading..."
  prompts: Prompt[] = []
  selected: number = -1 

  constructor(firestore: Firestore) {
    const bingoRef = doc(firestore, "bingos", ACTIVE_BINGO_ID)
    docData(bingoRef).subscribe(data => {
      const bingo = data as Bingo
      this.heading = bingo.name
      this.prompts = bingo.prompts

    })
  }

  ngOnInit(): void {
  }

  onPromptClicked(index: number) {
    this.selected = index
  }

  isSelected(index: number) {
    return index == this.selected
  }

  isbnString(book: Book) {
    if (book.isbn == null) {
      return ""
    } else {
      return "(" + book.isbn + ")"
    }
  }
}

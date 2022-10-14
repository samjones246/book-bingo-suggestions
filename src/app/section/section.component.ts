import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  description: String = "A Prompt"
  books: Book[] = [new Book("Floop Doop", "Writey Writer")]
  expanded: Boolean = true

  constructor(firestore: Firestore) { }

  ngOnInit(): void {

  }

  toggle(): void {
    this.expanded = !this.expanded
  }
}

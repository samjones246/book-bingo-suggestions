import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() description: String = "A Prompt"
  @Input() books: Book[] = [new Book("Floop Doop", "Writey Writer")]
  @Input() expanded: Boolean = false
  @Output() select: EventEmitter<any> = new EventEmitter()

  toggle(): void {
    this.select.emit(null)
  }
}

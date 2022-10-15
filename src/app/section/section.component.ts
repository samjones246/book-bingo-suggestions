import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book.model';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() description: String = "A Prompt"
  @Input() books: Book[] = [new Book("", "(No Suggestions)")]
  @Input() expanded: Boolean = false
  @Output() select: EventEmitter<any> = new EventEmitter()
  arrowCollapsed = faChevronDown
  arrowExpanded = faChevronUp

  toggle(): void {
    this.select.emit(null)
  }
}

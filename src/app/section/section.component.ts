import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book.model';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  animations: [
    trigger('sectionContentState', [
      transition(':enter', [
          style({ height: "0px", opacity: 0, overflow: "hidden"}),
          animate(250, style({ height: "*", opacity: 1}))
      ]),
      transition(':leave', [
        style({overflow: 'hidden'}),
        animate(250, style({height: 0, opacity: 0}))
      ])
    ])
  ]
})
export class SectionComponent{
  @Input() description: String = "A Prompt"
  @Input() books: Book[] = []
  @Input() expanded: Boolean = false
  @Input() first: Boolean = false
  @Output() select: EventEmitter<any> = new EventEmitter()
  arrowCollapsed = faChevronDown
  arrowExpanded = faChevronUp

  toggle(): void {
    this.select.emit(null)
  }
}

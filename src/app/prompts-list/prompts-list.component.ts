import { Component, OnInit, Renderer2 } from '@angular/core';
import { BingoInfoService } from '../bingos/bingo-info.service';
import { Bingo } from '../models/bingo.model';
import { Prompt } from '../models/prompt.model';

@Component({
  selector: 'app-prompts-list',
  templateUrl: './prompts-list.component.html',
  styleUrls: ['./prompts-list.component.scss']
})
export class PromptsListComponent implements OnInit {

  bingo: Bingo
  selectedPrompt: Prompt | null = null
  selectedIndex: number | null = null
  selectedElem: EventTarget | null = null

  constructor(bingoInfoService: BingoInfoService, private renderer: Renderer2) {
    this.bingo = bingoInfoService.getBingoInfo()
  }

  ngOnInit(): void { }

  onPromptClicked(event: Event, index: number) {
    if (this.selectedIndex != index) {
      this.selectedIndex = index
      this.selectedPrompt = this.bingo.prompts[index]
      if (this.selectedElem != null) {
        this.renderer.removeClass(this.selectedElem, "pure-menu-selected")
      }
      this.selectedElem = event.target
      this.renderer.addClass(this.selectedElem, "pure-menu-selected")
    }
  }
}

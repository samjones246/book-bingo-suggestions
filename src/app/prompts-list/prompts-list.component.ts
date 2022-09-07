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

  constructor(bingoInfoService: BingoInfoService, private renderer: Renderer2) {
    this.bingo = bingoInfoService.getBingoInfo()
  }

  ngOnInit(): void { }

  onPromptClicked(event: Event, index: number) {
    if (this.selectedIndex != index) {
      this.selectedIndex = index
      this.selectedPrompt = this.bingo.prompts[index]
    }
  }

  isSelected(index: number) {
    return index == this.selectedIndex
  }
}

import { Component, OnInit } from '@angular/core';
import { BingoInfoService } from '../bingos/bingo-info.service';
import { Bingo } from '../models/bingo.model';

@Component({
  selector: 'app-prompts-list',
  templateUrl: './prompts-list.component.html',
  styleUrls: ['./prompts-list.component.scss']
})
export class PromptsListComponent implements OnInit {

  bingo: Bingo

  constructor(private bingoInfoService: BingoInfoService) {
    this.bingo = bingoInfoService.getBingoInfo()
  }

  ngOnInit(): void { }
}

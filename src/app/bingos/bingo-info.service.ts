import { Injectable } from '@angular/core';
import { BINGO_INFO } from './mock-bingo-info';

@Injectable({
  providedIn: 'root'
})
export class BingoInfoService {

  constructor() { }

  getBingoInfo() { return BINGO_INFO }
}

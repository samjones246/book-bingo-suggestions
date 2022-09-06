import { Injectable } from '@angular/core';
import { Bingo } from '../models/bingo.model';
import { BINGO_INFO } from './mock-bingo-info';

@Injectable({
  providedIn: 'root'
})
export class BingoInfoService {

  constructor() { }

  getBingoInfo(): Bingo { 
    return BINGO_INFO
  }
}

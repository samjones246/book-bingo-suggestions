import { TestBed } from '@angular/core/testing';

import { BingoInfoService } from './bingo-info.service';

describe('BingoInfoService', () => {
  let service: BingoInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BingoInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

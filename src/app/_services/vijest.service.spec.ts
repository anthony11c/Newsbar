import { TestBed } from '@angular/core/testing';

import { VijestService } from './vijest.service';

describe('VijestService', () => {
  let service: VijestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VijestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

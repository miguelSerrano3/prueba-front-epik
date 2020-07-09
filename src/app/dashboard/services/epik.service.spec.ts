import { TestBed } from '@angular/core/testing';

import { EpikService } from './epik.service';

describe('EpikService', () => {
  let service: EpikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

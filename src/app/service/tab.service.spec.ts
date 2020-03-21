import { TestBed } from '@angular/core/testing';

import { TabService } from './tab.service';

describe('AdTabService', () => {
  let service: TabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

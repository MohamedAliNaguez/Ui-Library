import { TestBed } from '@angular/core/testing';

import { SwUiService } from './sw-ui.service';

describe('SwUiService', () => {
  let service: SwUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

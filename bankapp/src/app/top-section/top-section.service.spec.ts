import { TestBed } from '@angular/core/testing';

import { TopSectionService } from './top-section.service';

describe('TopSectionService', () => {
  let service: TopSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

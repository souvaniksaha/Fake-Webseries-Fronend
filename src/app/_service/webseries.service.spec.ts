import { TestBed } from '@angular/core/testing';

import { WebseriesService } from './webseries.service';

describe('WebseriesService', () => {
  let service: WebseriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebseriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

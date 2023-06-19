import { TestBed } from '@angular/core/testing';

import { PermisionsService } from './permisions.service';

describe('PermisionsService', () => {
  let service: PermisionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermisionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

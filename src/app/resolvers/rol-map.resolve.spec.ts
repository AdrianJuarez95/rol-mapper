import { TestBed } from '@angular/core/testing';

import { RolMapResolve } from './rol-map.resolve';

describe('RolMapResolve', () => {
  let service: RolMapResolve;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolMapResolve);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

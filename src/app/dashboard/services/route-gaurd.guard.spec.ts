import { TestBed, async, inject } from '@angular/core/testing';

import { RouteGaurdGuard } from './route-gaurd.guard';

describe('RouteGaurdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteGaurdGuard]
    });
  });

  it('should ...', inject([RouteGaurdGuard], (guard: RouteGaurdGuard) => {
    expect(guard).toBeTruthy();
  }));
});

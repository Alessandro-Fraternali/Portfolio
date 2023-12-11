import { TestBed } from '@angular/core/testing';

import { IntroductionsService } from './introductions-service.service';

describe('IntroductionsServiceService', () => {
  let service: IntroductionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntroductionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ProfileInfoServiceService } from './profile-info-service.service';

describe('ProfileInfoServiceService', () => {
  let service: ProfileInfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileInfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

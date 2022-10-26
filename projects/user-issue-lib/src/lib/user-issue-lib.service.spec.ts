import { TestBed } from '@angular/core/testing';

import { UserIssueLibService } from './user-issue-lib.service';

describe('UserIssueLibService', () => {
  let service: UserIssueLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserIssueLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

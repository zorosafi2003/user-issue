import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIssueLibComponent } from './user-issue-lib.component';

describe('UserIssueLibComponent', () => {
  let component: UserIssueLibComponent;
  let fixture: ComponentFixture<UserIssueLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIssueLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIssueLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

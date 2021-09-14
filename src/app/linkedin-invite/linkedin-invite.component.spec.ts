import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinInviteComponent } from './linkedin-invite.component';

describe('LinkedinInviteComponent', () => {
  let component: LinkedinInviteComponent;
  let fixture: ComponentFixture<LinkedinInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedinInviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedinInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

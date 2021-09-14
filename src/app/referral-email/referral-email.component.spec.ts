import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralEmailComponent } from './referral-email.component';

describe('ReferralEmailComponent', () => {
  let component: ReferralEmailComponent;
  let fixture: ComponentFixture<ReferralEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferralEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

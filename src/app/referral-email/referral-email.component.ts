import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';
import { EmailBody } from '../models/email-body';

@Component({
  selector: 'app-referral-email',
  templateUrl: './referral-email.component.html',
  styleUrls: ['./referral-email.component.css']
})
export class ReferralEmailComponent implements OnInit {

  public userName: string;
  public currentCompanyEnabled: boolean;
  public currentCompany: string;
  public currentPosition: string;
  public emailBody: EmailBody;

  constructor(
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
    this.userName = '';
    this.currentCompanyEnabled = false;
    this.currentCompany = '';
    this.currentPosition = '';
    this.emailBody = this.emailService.getRandomEmailBody();
    console.log(this.emailBody);
  }

  private clearCurrentCompanyDetails(): void {
    this.currentCompany = '';
    this.currentPosition = '';
  }

  currentCompanyToggle(event): void {
    if (event.target.checked) {
      this.currentCompanyEnabled = true;
    } else {
      this.clearCurrentCompanyDetails();
      this.currentCompanyEnabled = false;
    }
  }

}

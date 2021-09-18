import {Component, DoCheck, OnInit} from '@angular/core';
import { EmailService } from '../services/email.service';
import { EmailBody } from '../models/email-body';
import {EmailBodyHelperService} from '../services/email-body-helper.service';

@Component({
  selector: 'app-referral-email',
  templateUrl: './referral-email.component.html',
  styleUrls: ['./referral-email.component.css']
})
export class ReferralEmailComponent implements OnInit, DoCheck {

  public userName: string;
  public applyingCompany: string;
  public applyingPos: string;
  public currentCompanyEnabled: boolean;
  public currentCompany: string;
  public currentPosition: string;
  public emailBody: EmailBody;
  public emailBodyString: string;

  constructor(
    private emailService: EmailService,
    private emailServiceHelper: EmailBodyHelperService
  ) {}

  ngDoCheck(): void {
    this.buildEmailBody();
  }

  ngOnInit(): void {
    this.userName = '';
    this.currentCompanyEnabled = false;
    this.currentCompany = '';
    this.currentPosition = '';
    this.applyingPos = '';
    this.applyingCompany = '';
    this.emailBody = this.emailService.getRandomEmailBody();
    this.buildEmailBody();
  }

  currentCompanyToggle(event): void {
    if (event.target.checked) {
      this.currentCompanyEnabled = true;
    } else {
      this.clearCurrentCompanyDetails();
      this.currentCompanyEnabled = false;
    }
  }

  private buildEmailBody(): void {
    this.emailBodyString = this.emailServiceHelper.getEmailBody(
      this.emailBody, this.userName, this.currentCompany, this.currentPosition,
      this.currentCompanyEnabled, this.applyingPos, this.applyingCompany
    );
  }

  private clearCurrentCompanyDetails(): void {
    this.currentCompany = '';
    this.currentPosition = '';
  }

}

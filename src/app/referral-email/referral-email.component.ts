import {Component, DoCheck, OnInit} from '@angular/core';
import { EmailService } from '../services/email.service';
import { EmailBody } from '../models/email-body';

@Component({
  selector: 'app-referral-email',
  templateUrl: './referral-email.component.html',
  styleUrls: ['./referral-email.component.css']
})
export class ReferralEmailComponent implements OnInit, DoCheck {

  public userName: string;
  public currentCompanyEnabled: boolean;
  public currentCompany: string;
  public currentPosition: string;
  public emailBody: EmailBody;
  public emailBodyString: string;

  constructor(
    private emailService: EmailService
  ) {}

  ngDoCheck(): void {
    this.buildEmailBody();
  }

  ngOnInit(): void {
    this.userName = '';
    this.currentCompanyEnabled = false;
    this.currentCompany = '';
    this.currentPosition = '';
    this.emailBody = this.emailService.getRandomEmailBody();
    this.buildEmailBody();
    console.log(this.emailBodyString);
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
    this.emailBodyString = this.emailBody.salutation.replace('{userName}', this.userName);
    this.emailBodyString = this.emailBodyString.concat('\n\n');
    this.emailBodyString = this.emailBodyString.concat(this.emailBody.greeting);
    if (this.currentCompanyEnabled) {
      this.emailBodyString = this.emailBodyString.concat(' Im currently working as a ' + this.currentPosition + ' at ' +
        this.currentCompany + '.');
    }
    this.emailBodyString = this.emailBodyString.concat(' ' + this.emailBody.reason + '\n' + '\n');
    this.emailBodyString = this.emailBodyString.concat(this.emailBody.footer);
  }

  private clearCurrentCompanyDetails(): void {
    this.currentCompany = '';
    this.currentPosition = '';
  }

}

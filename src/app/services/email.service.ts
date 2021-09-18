import { Injectable } from '@angular/core';
import { EmailBody } from '../models/email-body';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private readonly emailBodyList: Array<EmailBody>;

  constructor() {
    this.emailBodyList = new Array<EmailBody>();
    this.emailBodyList.push({
      salutation: 'Hi {userName},',
      greeting: 'Hope you are doing great !',
      reason: 'Recently I got to know about job openings in {applyingCompany}. I want to apply for the {applyingPos} role.',
      footer: 'Thanks & Regards'
    });
  }

  public getRandomEmailBody(): EmailBody {
    return this.emailBodyList[Math.floor(Math.random() * this.emailBodyList.length)];
  }
}

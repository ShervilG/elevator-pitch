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
      salutation: 'Hi {{userName}},',
      greeting: 'Hope you are doing great !',
      reason: 'Came across your post.',
      footer: 'Thanks & Regards'
    });
  }

  public getRandomEmailBody(): EmailBody {
    return this.emailBodyList[Math.floor(Math.random() * this.emailBodyList.length)];
  }
}

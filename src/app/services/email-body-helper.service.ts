import {Injectable} from '@angular/core';
import {EmailBody} from '../models/email-body';

@Injectable({
  providedIn: 'root'
})
export class EmailBodyHelperService {

  public getEmailBody(
    emailBody: EmailBody, userName: string, currentCompany: string,
    currentPosition: string, currentCompanyEnabled: boolean, applyingPosition: string, applyingCompany: string
  ): string {
    let emailBodyString = emailBody.salutation.replace('{userName}', userName);
    emailBodyString = emailBodyString.concat('\n\n');
    emailBodyString = emailBodyString.concat(emailBody.greeting);
    if (currentCompanyEnabled) {
      emailBodyString = emailBodyString.concat(' Im currently working as a ' + currentPosition + ' at ' +
        currentCompany + '.');
    }
    let reason = emailBody.reason.replace('{applyingCompany}', applyingCompany);
    reason = reason.replace('{applyingPos}', applyingPosition);
    emailBodyString = emailBodyString.concat(' ' + reason + '\n' + '\n');
    emailBodyString = emailBodyString.concat(emailBody.footer);
    return emailBodyString;
  }
}

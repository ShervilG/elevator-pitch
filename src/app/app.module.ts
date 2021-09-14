import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ReferralEmailComponent } from './referral-email/referral-email.component';
import { LinkedinInviteComponent } from './linkedin-invite/linkedin-invite.component';
import {FormsModule} from '@angular/forms';

const routes: Route[] = [
  { path: '', component: LinkedinInviteComponent },
  { path: 'referral-email', component: ReferralEmailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ReferralEmailComponent,
    LinkedinInviteComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

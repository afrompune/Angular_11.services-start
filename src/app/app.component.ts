import { Component, Output } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent {
  accounts: { name: string, status: string }[] = this.acctService.accounts;

  constructor(private acctService: AccountService) { }
}

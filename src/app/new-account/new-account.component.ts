import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})

export class NewAccountComponent {

  constructor(private acctService: AccountService) {
    acctService.statusChanged.subscribe((msg: String) => {
      alert(msg);
    })
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.acctService.addAccount(accountName, accountStatus);
    this.acctService.statusChanged.emit("Added Account : " + accountName +
      ", with status : " + accountStatus);
  }



}

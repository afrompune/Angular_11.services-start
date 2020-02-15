import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private acctService: AccountService) {}

  onSetTo(status: string) {
    this.acctService.changeStatus(this.id, status);
    this.acctService.statusChanged.emit("For " + this.account.name +
      ", status is changed to : " + status);
  }
}

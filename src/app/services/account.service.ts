import { Injectable, Output, EventEmitter } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable({ providedIn: 'root' })
export class AccountService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    @Output() statusChanged = new EventEmitter<String>();

    constructor(private loggingService: LoggingService) { }

    addAccount(name: string, status: string) {
        this.accounts.push({ name, status });
        this.loggingService.logStatusChange(status);
    }

    changeStatus(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.loggingService.logStatusChange(newStatus);
    }

}
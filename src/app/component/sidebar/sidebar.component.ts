import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountListService } from 'src/app/service/account-list.service';
import { User } from 'src/app/pojos/User';
import { Account } from 'src/app/pojos/Account';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() public hideSideBar = false;

  public loginUser: User = null;
  public selectedAccount = "";
  public accountList: Account[];
  public showStyle = {
    width: "250px"
  }
  public hideStyle = {
    width: "0px"
  }

  constructor(
    private loginService: LoginService,
    private accountService: AccountListService,
    ) {
      this.loginUser = loginService.getCurUser();
    }

  ngOnInit() {
    this.accountService.getAccountByUser()
      .subscribe(
        res => {
          if (res) {
            this.accountList = res;
            console.log("printing accoutn list from side bar");
            console.log(this.accountList);
          }
        },
        err => {
          console.log("Fail to get Account list");
        }
      )
  }

  public getAccountName(event) {
    this.selectedAccount = event.target.innerText;
  }
}

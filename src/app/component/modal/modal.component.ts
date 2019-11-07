import {Component, OnInit, Input} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { RolesService } from 'src/app/service/util/roles.service';
import { AccountListService } from '../../service/account-list.service'
import { User } from 'src/app/pojos/User';
import { LoginService } from 'src/app/service/login.service';
import { UserRoleAccount } from 'src/app/pojos/UserRoleAccount';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  closeResult: string;

  @Input() public account;
  public loginUser: User = null;
  public relation:UserRoleAccount[] = [];

  public roles = this._roles.getRoles();

  constructor(
    private modalService: NgbModal, 
    private _roles: RolesService,
    private loginService: LoginService
  ) {}
  
  ngOnInit() {
    this.loginUser = this.loginService.getCurUser();
    this.relation = this.loginUser.userRoleAccounts;
    console.log("inside of modal "+this.account.accountName);
    console.log(this.relation);
  }

  public open(content: string) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  public deleteAccount() {
    // Placeholder
    if (confirm("Are you sure you want to delete " + this.account.accountName + "?")) {
      console.log("yes");
      this.modalService.dismissAll();
    }
    else {
      console.log("no");
    }
  }

  public saveAccount() {
    // Placeholder
    this.modalService.dismissAll();
  }
}
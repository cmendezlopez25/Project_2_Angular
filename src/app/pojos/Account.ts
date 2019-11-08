import { UserRoleAccount } from './UserRoleAccount';

export class Account {
    constructor(
        public accountId = -1,
        public accountName = "",
        public transactions = [],
        public userRoleAccounts: UserRoleAccount[] = []
    ){}
    public setRelation(relation: UserRoleAccount[]): void {
        this.userRoleAccounts = relation;
    }
}

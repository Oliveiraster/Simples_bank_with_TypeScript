import { AccountBonus } from './class/AccountBonus';
import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';

const accountBonus = new AccountBonus('Raphael', 10);
console.log(accountBonus);
accountBonus.deposit(10);
console.log(accountBonus);

const people = new PeopleAccount(1, 'João', 23);
people.deposit(10);
console.log(people);

const company = new CompanyAccount('Empresa', 32);
company.deposit(50);
console.log(company);

const saque = new PeopleAccount(13, 'joaquin', 18);
saque.deposit(50);
saque.withdraw(13);
console.log(saque);

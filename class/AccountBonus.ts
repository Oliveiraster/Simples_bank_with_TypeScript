import { DioAccount } from './DioAccount';

export class AccountBonus extends DioAccount {
  constructor(name: string, accountNumber: number, balance?: number) {
    super(name, accountNumber, balance);
    this.deposit = (valor: number): number => {
      valor += 10;
      return (this.balance += valor);
    };
  }
}

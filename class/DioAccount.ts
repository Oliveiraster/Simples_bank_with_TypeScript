export abstract class DioAccount {
  private name: string;
  readonly accountNumber: number;
  balance: number = 0;
  status: boolean = true;
  statusValor: boolean = false;

  constructor(name: string, accountNumber: number, balance?: number) {
    this.name = name;
    this.accountNumber = accountNumber;
    if (balance) {
      this.balance = balance;
    }
  }

  setName = (name: string): void => {
    this.name = name;
    console.log('Nome alterado com sucesso');
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (balance: number): number => {
    if (this.validateStatus()) {
      return (this.balance += balance);
    }
    throw new Error('Verifique os dados da conta!');
  };

  withdraw = (valor: number): number => {
    if (this.validateStatus() && this.validateValor(valor)) {
      return (this.balance -= valor);
    }
    throw new Error('Saldo insuficiente!!');
  };
  getBalance = (): void => {
    console.log(`Saldo: R$${this.balance}`);
  };

  private validateValor = (valor: number): boolean => {
    if (this.balance > valor) {
      return (this.statusValor = true);
    }
    throw new Error('Valor indisponivel!');
  };

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }
    throw new Error('Conta invalida!');
  };
}

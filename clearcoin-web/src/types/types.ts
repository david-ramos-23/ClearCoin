export type Transfer = {
	originWalletId: string;
  destinationWalletId: string;
  amount: number;
}

export type Wallet = {
  id: string;
  amount: number;
}

export type CardType = {
  wallet: Wallet;
  onSubmit: (values: any) => void;
  errorMsg?: string;
}

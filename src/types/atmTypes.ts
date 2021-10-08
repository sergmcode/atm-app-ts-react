export interface IAtmBills {
  5000: number;
  2000: number;
  1000: number;
  500: number;
  200: number;
  100: number;
  50: number;
}

export enum EStatus {
  ACCEPTED = "ACCEPTED", REJECTED = "REJECTED", 
  INITIAL = "INITIAL", REFILLED = "REFILLED",
}

export interface IAtmState {
  totalAmountInAtm: number;
  status: EStatus;
  bills: IAtmBills;
  userBills: IAtmBills;
  error: string;
}

export enum EAtmActionTypes {
  REFILL, WITHDRAW,
}

export interface IAtmAction_WITHDRAW {
  type: EAtmActionTypes.WITHDRAW;
  payload: number;
}

export interface IAtmAction_REFILL {
  type: EAtmActionTypes.REFILL;
  payload: IAtmBills;
}

export type TAtmAction = IAtmAction_WITHDRAW | IAtmAction_REFILL;
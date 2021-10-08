import { EAtmActionTypes, EStatus, TAtmAction, IAtmBills, IAtmState } from "../../types/atmTypes";

const initialBills: IAtmBills = {
  5000: 0,
  2000: 0,
  1000: 0,
  500: 0,
  200: 0,
  100: 0,
  50: 0,
}

const initialState: IAtmState = {
  totalAmountInAtm: 0,
  bills: initialBills,
  userBills: initialBills,
  status: EStatus.INITIAL,
  error: "",
}

export const atmReducer =
  (state: Readonly<IAtmState> = initialState, 
            action: Readonly<TAtmAction>): IAtmState => {
    switch(action.type){
      case EAtmActionTypes.REFILL:
        let totalAmountInAtm = 0
        for(const [key, value] of Object.entries(action.payload)){
          totalAmountInAtm += value as number * Number(key);
        }
        return { ...state, totalAmountInAtm: totalAmountInAtm, 
          bills: action.payload, error: "", status: EStatus.REFILLED, 
          userBills: initialBills }
      case EAtmActionTypes.WITHDRAW:
        const amount = Number(action.payload)
        if(amount <= state.totalAmountInAtm){
            if(amount % 50 !== 0){
              return { ...state, error: "Amount must be divisible by 50", 
                status: EStatus.REJECTED, userBills: initialBills }
            } else {
              const bills_copy = JSON.parse(JSON.stringify(state.bills))
              const user_bills: any = initialBills
              const sorted_keys = Object.getOwnPropertyNames(bills_copy)
                .map(key => Number(key)).sort((prev, next) => next - prev)
              let left = amount
              for(const bill of sorted_keys){
                const need = Math.floor(left / bill) 
                if(need > bills_copy[bill]){ // if need 2 but there is only one
                  const grab = bills_copy[bill] * bill // grab all that is available
                  left -= grab
                  user_bills[bill] = bills_copy[bill]
                  bills_copy[bill] = 0
                } else  { // if need 2 and there are 2 or more
                  const grab = bill * need 
                  left -= grab
                  bills_copy[bill] -= need
                  user_bills[bill] = need
                }
              }
              if(left !== 0){
                return { ...state, status: EStatus.REJECTED, 
                  error: "Unable to withdraw that amount, some bills are missing",
                  userBills: initialBills }
              } else {
                let totalAmountInAtm = 0
                for(const [key, value] of Object.entries(bills_copy)){
                  totalAmountInAtm += value as number * Number(key);
                }
                return { ...state, status: EStatus.ACCEPTED, bills: bills_copy, 
                  totalAmountInAtm: totalAmountInAtm, error: "", userBills: user_bills }
              }
            }
        } else {
          return { ...state, status: EStatus.REJECTED, error: "Not enough money in ATM",
          userBills: initialBills }
        }
      default:
        return state
    }
  }

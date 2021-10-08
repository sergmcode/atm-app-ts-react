import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks"
import { EAtmActionTypes } from "../../types/atmTypes"

export const useButtonWithdraw = (withdrawAmount: number) => {
  const appState = useAppSelector(state => state.atmReducer)
  const appDispatch = useAppDispatch()
  const dispatch = useDispatch()
  const history = useHistory()
  return {
    onClick: function(){
      if(withdrawAmount > 0){
        appDispatch({ type: EAtmActionTypes.WITHDRAW, payload: withdrawAmount })
        history.push("/result")
      }
    }
  }
}
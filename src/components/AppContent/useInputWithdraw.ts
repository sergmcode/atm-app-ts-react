import { useState } from "react"
import { useHistory } from "react-router"
import { useAppDispatch } from "../../hooks/storeHooks"
import { EAtmActionTypes } from "../../types/atmTypes"

export const useInputWithdraw = () => {
  const [value, setValue] = useState(0)
  const appDispatch = useAppDispatch()
  const history = useHistory()

  return {
    value, setValue,
    onKeyDown: function(e: any){
      if(e.code === "Enter"){
        if(value > 0){
          appDispatch({ type: EAtmActionTypes.WITHDRAW, payload: value })
          history.push("/result")
        }
      }
    },
    onChange: function(e: any){
      setValue(+e.target.value)
    }
  }
}
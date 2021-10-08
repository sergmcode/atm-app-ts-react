import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks"
import { EAtmActionTypes, IAtmAction_REFILL } from '../../types/atmTypes'
import { refillOptions } from '../../refillOptions'

const useModalRefill = (radioIndex: number) => {

  const appDispatch = useAppDispatch()
  const dispatch = useDispatch()

  const [isVisible, setIsVisible] = useState(false)

  return { 
    isVisible,
    setIsVisible,
    onOk: function(){
      setIsVisible(false)
      appDispatch({ type: EAtmActionTypes.REFILL, 
        payload: refillOptions[radioIndex] })
    },
    onCancel: function(){
      setIsVisible(false)
    }
  }
}

export default useModalRefill

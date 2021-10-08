import { useState } from "react"

export const useRadio = () => {
  const [value, setValue] = useState(0)

  return {
    value, setValue,
    onChange: function(e: any){
      setValue(e.target.value)
    }
  }
}
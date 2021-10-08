import { useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'
import "./AppHeader.css"

interface Props {
  
}

const AppHeader = (props: Props) => {
  const appDispatch = useAppDispatch()
  const dispatch = useDispatch()
  return (
    <div className="AppHeader" >
      AppHeader
    </div>
  )
}

export default AppHeader

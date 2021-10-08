import { useDispatch } from "react-redux"
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks"
import "./AppContent.css"

interface Props {
  
}

const AppContent = (props: Props) => {
  const appState = useAppSelector(state => state.todoReducer)
  const appDispatch = useAppDispatch()
  const dispatch = useDispatch()
  return (
    <div className="AppContent">
      AppContent
    </div>
  )
}

export default AppContent

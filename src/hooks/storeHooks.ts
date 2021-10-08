import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { ThunkDispatch } from "redux-thunk"
import { TAppDispatch, TRootState } from "../store/store"

export const useAppDispatch = () => useDispatch<TAppDispatch>()
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector

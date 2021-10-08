import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { atmReducer } from "./reducers/atmReducer";

const rootReducer = combineReducers({
  atmReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppDispatch = typeof store.dispatch;
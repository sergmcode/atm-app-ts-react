import { Button, Input, Modal, Radio, Space } from "antd";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import useModalRefill from "./useModalRefill";
import "./AppContent.css";
import { useRadio } from "./useRadio";
import { refillOptions } from "../../refillOptions";
import { useInputWithdraw } from "./useInputWithdraw";
import { useButtonWithdraw } from "./useButtonWithdraw";
import { EStatus } from "../../types/atmTypes";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

const AppContent = () => {
  const appState = useAppSelector((state) => state.atmReducer);
  const appDispatch = useAppDispatch();
  const dispatch = useDispatch();
  const { value: radioValue, onChange: onChangeRadio } = useRadio();
  const { isVisible, setIsVisible, onOk, onCancel } = useModalRefill(radioValue);
  const { value: inputValue, onChange: inputOnChange, 
    setValue: setInputValue, onKeyDown } = 
    useInputWithdraw();
  const buttonWithdraw = useButtonWithdraw(inputValue);
  return (
    <div className="AppContent">
      <Modal visible={isVisible} onOk={onOk} onCancel={onCancel} >
        <div style={{width: "100%"}} >
          <Radio.Group value={radioValue} onChange={onChangeRadio}>
            {refillOptions.map((option, index) => (
              <Radio value={index} key={index}>
                {JSON.stringify(refillOptions[index])}
              </Radio>
            ))}
          </Radio.Group>
        </div>
        
      </Modal>
      <Space>
        <Button onClick={() => setIsVisible(true)}>refill</Button>
        <Link to="/info">
          <Button>info</Button>
        </Link>
        <Link to="/">
            <Button> back </Button>
        </Link>
      </Space>
      <Switch>
        <Route path="/info">
          <div>Total amount in ATM: {appState.totalAmountInAtm}</div>
          <ul>
            {Object.entries(appState.bills).map(entrie => <li key={entrie[0]}>
              {entrie[0]} - {entrie[1]}
            </li>)}
          </ul>
        </Route>
        <Route path="/result">
          <div className="AppContent__output">
              {appState.status === EStatus.ACCEPTED && 
                Object.entries(appState.userBills).map(entry => <div>
                  {entry[1] > 0 && <div style={{fontSize: "1.5rem"}}>
                    <span style={{marginRight: 10}}>{entry[0]}</span>
                    <span style={{fontWeight: 500}} >{entry[1]}</span>
                  </div>}
                </div>)}
              <div className={
                  appState.status === EStatus.ACCEPTED
                    ? "AppContent__outputStatusAccepted"
                    : "AppContent__outputStatusRejected"
                }> {appState.status} </div>
              <div className="AppContent__error">
                {appState.error !== "" && appState.error}
              </div>
            </div>
        </Route>
        <Route path="/">
          <Space>
            <Button {...buttonWithdraw}> withdraw </Button>
            <Input
              type="number"
              style={{ width: 400 }}
              value={inputValue}
              onChange={inputOnChange}
              onKeyDown={onKeyDown}
            />
          </Space>
          <div className="AppContent__output">
            <div style={{ display: "flex", flexWrap: "wrap", 
              justifyContent: "center", alignItems: "center" }}>
              {[1,2,3,4,5,6,7,8,9,0,"Enter","Clear"].map(n => <div
                className="AppContent__outputNumpadButton"
                style={{
                  width: 180, height: 150, display: "flex", justifyContent: 'center',
                  alignItems: "center", border: "1px solid", margin: 2,
                }}
                onClick={()=>{
                  if(n === "Enter"){
                    setInputValue(0)
                    buttonWithdraw.onClick()
                  } else if (n === "Clear") {
                    setInputValue(0)
                  } else {
                    setInputValue( Number(`${inputValue}${n}`)  )
                  }
                }}
                > {n} </div>)}
            </div>
          </div>
        </Route>

      </Switch>
    </div>
  );
};

export default AppContent;

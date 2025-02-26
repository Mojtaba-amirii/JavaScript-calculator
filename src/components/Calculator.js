import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInput, calculate, clear, clearEntry } from "../redux/reducer";

import Button from "./Button";
import Display from "./Display";

const Calculator = () => {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.display);

  const handleClick = (value) => {
    if (value === "=") {
      dispatch(calculate());
    } else if (value === "AC") {
      dispatch(clear());
    } else if (value === "CE") {
      dispatch(clearEntry());
    } else {
      dispatch(setInput(value));
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4 bg-body-secondary p-3 rounded-2 shadow-sm">
          <Display value={display} />
          <div className="row mb-2">
            <div className="col-3">
              <Button id="clear" value="AC" onClick={handleClick} />
            </div>
            <div className="col-3">
              <Button id="ce" value="CE" onClick={handleClick} />
            </div>
            <div className="col-3">
              <Button id="percentage" value="%" onClick={handleClick} />
            </div>
            <div className="col-3">
              <Button id="divide" value="/" onClick={handleClick} />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-3">
              <Button id="seven" value="7" onClick={handleClick} />
            </div>
            <div className="col-3">
              <Button id="eight" value="8" onClick={handleClick} />
            </div>
            <div className="col-3">
              <Button id="nine" value="9" onClick={handleClick} />
            </div>
            <div className="col-3">
              <Button id="multiply" value="*" onClick={handleClick} />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-3">
              <Button id="four" value="4" onClick={handleClick} />
            </div>
            <div className="col-3">
              <Button id="five" value="5" onClick={handleClick} />
            </div>
            <div className="col-3">
              <Button id="six" value="6" onClick={handleClick} />
            </div>
            <div className="col-3">
              <Button id="subtract" value="-" onClick={handleClick} />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-3">
              <Button id="one" value="1" onClick={handleClick} />
            </div>
            <div className="col-3">
              <Button id="two" value="2" onClick={handleClick} />
            </div>
            <div className="col-3">
              <Button id="three" value="3" onClick={handleClick} />
            </div>
            <div className="col-3">
              <Button id="add" value="+" onClick={handleClick} />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <Button id="zero" value="0" onClick={handleClick} />
            </div>
            <div className="col-4">
              <Button id="decimal" value="." onClick={handleClick} />
            </div>
            <div className="col-4">
              <Button id="equals" value="=" onClick={handleClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

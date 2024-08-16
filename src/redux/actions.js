export const SET_INPUT = "SET_INPUT";
export const CALCULATE = "CALCULATE";
export const CLEAR = "CLEAR";

export const setInput = (value) => ({
  type: SET_INPUT,
  payload: value,
});

export const calculate = () => ({
  type: CALCULATE,
});

export const clear = () => ({
  type: CLEAR,
});

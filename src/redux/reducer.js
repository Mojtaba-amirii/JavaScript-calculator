import { createSlice } from "@reduxjs/toolkit";
import { evaluate } from "mathjs";

const initialState = {
  display: "0",
};

const cleanDisplay = (display) => {
  return display
    .replace(/\s+/g, " ")
    .replace(/[^\d+\-*/().]/g, "")
    .replace(/([+\-*/])\s*([+\-*/])+/g, (match, p1, p2) =>
      p2 === "-" ? p1 + p2 : p2
    )
    .replace(/(\d)\s*([+\-*/])$/, "$1$2")
    .replace(/^[+\-*/]/, "")
    .trim();
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setInput: (state, action) => {
      const value = action.payload;
      const lastChar = state.display.slice(-1);
      const display = state.display.trim();

      switch (value) {
        case "+":
        case "*":
        case "/":
          state.display = /[+\-*/]$/.test(lastChar)
            ? state.display.slice(0, -1) + value
            : display === "" || display === "0"
            ? value
            : state.display + ` ${value} `;
          break;
        case "-":
          state.display =
            /[+\-*/]$/.test(lastChar) && lastChar !== "-"
              ? state.display + value
              : display === "" || display === "0"
              ? value
              : state.display + value;
          break;
        case ".":
          if (!/\.\d*$/.test(display)) state.display += value;
          break;
        default:
          state.display =
            display === "0" && value !== "." ? value : state.display + value;
      }
    },
    calculate: (state) => {
      try {
        let cleanedDisplay = cleanDisplay(state.display);

        if (/\d\s*[*/]\s*-/.test(cleanedDisplay)) {
          cleanedDisplay = cleanedDisplay.replace(/[*/]\s*-/, (match) =>
            match.replace(" ", "")
          );
        }

        state.display =
          cleanedDisplay.length > 0 ? evaluate(cleanedDisplay).toString() : "0";
      } catch (error) {
        console.error("Calculation error:", error);
        state.display = "Error";
      }
    },
    clear: (state) => {
      state.display = "0";
    },
    clearEntry: (state) => {
      state.display =
        state.display.length > 1
          ? state.display.slice(0, -1).trim() || "0"
          : "0";
    },
  },
});

export const { setInput, calculate, clear, clearEntry } =
  calculatorSlice.actions;
export default calculatorSlice.reducer;

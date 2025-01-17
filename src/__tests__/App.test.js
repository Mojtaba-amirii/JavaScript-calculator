import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import App from "../components/App";
import store from "../redux/store";

test("renders App component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(screen.getByTestId("app-container")).toHaveClass(
    "App w-100 h-100 d-flex justify-content-center align-items-center"
  );
});

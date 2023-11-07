import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <App />
      </Router>
    </ErrorBoundary>
  </StrictMode>,
  rootElement
);

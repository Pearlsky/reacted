import React from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
  state = {
    errorMessage: "",
    errorCause: "",
  };

  static getDerivedStateFromError(error) {
    return { errorMessage: error.toString(), errorCause: error.cause };
  }

  componentDidCatch(error, info) {
    this.logErrorToServices(error.toString(), info.componentStack);
  }

  // A fake logging service.
  logErrorToServices = console.log;

  render() {
    if (this.state.errorMessage) {
      return (
        <section className="error-body">
          <div>
            <h1>Something really went wrong here</h1>
            <p>
              And here's what they are saying:{" "}
              {`${this.state.errorMessage}: ${this.state.errorCause}`}
            </p>
            <Link to="/users">Go back to Users</Link>
          </div>
        </section>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

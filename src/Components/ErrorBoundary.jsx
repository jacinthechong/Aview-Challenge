import React from "react";

//Error Boundary for overall error handling

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops! Something went wrong...</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

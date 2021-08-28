import React from "react";
/**
    * Renders a <ErrorBoundary/> component
    * HOC Boundary
    * @param {any} props
    * @example 
    * <div>
        <h2>Something went wrong.</h2>
      </div>
    */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div class="boundary">
          <h2 className="boundary__title">Ooops...!</h2>
          <p className="boundary__descrition">Something went wrong.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

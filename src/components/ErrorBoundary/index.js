import React from 'react';

import css from './ErrorBoundary.module.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;

    if (errorInfo) {
      // Error path
      return (
        <div className={css.wrapper}>
          <h2 className={css.title}>Something went wrong.</h2>
          <div className={css.errorWrapper}>
            <div className={css.code}>
              {error && error.toString()}
              <br />
              <span>{errorInfo.componentStack}</span>
            </div>
          </div>
        </div>
      );
    }
    // Normally, just render children
    return children;
  }
}

export default ErrorBoundary;

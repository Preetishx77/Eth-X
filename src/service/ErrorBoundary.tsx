import React from 'react';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }
  static getDerivedStateFromError(error) {
    return {hasError: true};
  }
  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }
    return this.props.children;
  }
}

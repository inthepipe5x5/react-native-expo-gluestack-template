import { withErrorBoundary } from "react-error-boundary";
import FallbackComponent from "./FallbackComponent";

// HOC error boundary component that accepts a component and props object
const ErrorBoundaryHOC = (Component) => {
  // Return a new component that wraps the original component with error boundary
  return function ErrorBoundaryWrapper({ ...props }) {
    return withErrorBoundary(Component, {
      FallbackComponent: props?.FallbackComponent ?? FallbackComponent,
      onError: props?.onError ?? null,
      onReset: props?.handleReset ?? null,
      resetKeys: props.resetKeys ?? []
    })(props);
  };
};

/**
 * @example
 * 
 * import React from 'react';
 * import ErrorBoundaryHOC from './ErrorBoundaryHOC';
 * import MyComponent from './MyComponent';

const MyComponentWithErrorBoundary = ErrorBoundaryHOC(MyComponent);

const App = () => {
  return (
    <MyComponentWithErrorBoundary
      FallbackComponent={CustomFallbackComponent}
      onError={(error, info) => console.error('Error caught:', error, info)}
      handleReset={() => console.log('Resetting...')}
      resetKeys={['someKey']}
    />
  );
};

export default App;

 * 
 */

export default ErrorBoundaryHOC;

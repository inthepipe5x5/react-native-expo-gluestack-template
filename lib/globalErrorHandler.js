import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';

export const globalErrorHandler = (error, isFatal, info) => {
  console.error("Global Error Handler:", { error, isFatal, info });
  if (isFatal) {
    // Handle fatal errors (e.g., log, show custom UI, or restart the app)
    alert("A fatal error occurred. The app needs to restart.");
  }
  // Send error logs to your monitoring service
};

export const globalNativeErrorHandler = (errorString) => {
  console.error("Global Native Error Handler:", errorString);
  // Log native errors or perform other handling
};

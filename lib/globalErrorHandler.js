import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';

// Handle JS exceptions
setJSExceptionHandler((error, isFatal) => {
  console.log("Caught JS Exception:", error.message);
  if (isFatal) {
    // Navigate to a custom error screen or reset app
    navigateToFallbackScreen(error);
  }
}, true);

// Handle Native exceptions
setNativeExceptionHandler((errorString) => {
  console.log("Caught Native Exception:", errorString);
  // Optionally restart the app or show a fallback UI
}, true);

import "../global.css";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { ErrorBoundary } from 'react-error-boundary'; // Use for React-specific error handling
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { config } from "@/components/ui/gluestack-ui-provider/config";
import FallBackComponent from "../components/errors/FallBackComponent";
import { globalErrorHandler, globalNativeErrorHandler } from "../lib/globalErrorHandler";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Set up global error handlers for native and JavaScript exceptions
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';

setJSExceptionHandler((error, isFatal) => {
  globalErrorHandler(error, isFatal);
}, true);

setNativeExceptionHandler((errorString) => {
  globalNativeErrorHandler(errorString);
});

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ErrorBoundary 
      FallbackComponent={FallBackComponent} 
      onError={(error, info) => globalErrorHandler(error, false, info)}
    >
      <GluestackUIProvider config={config}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </GluestackUIProvider>
    </ErrorBoundary>
  );
}

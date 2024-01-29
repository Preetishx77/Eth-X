import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import ErrorBoundary from './src/service/ErrorBoundary';
import RouteNavigator from './src/Navigation/RouteNavigator';

function App(): React.JSX.Element {
  return (
    <ErrorBoundary>
      <NavigationContainer>
        <RouteNavigator />
      </NavigationContainer>
    </ErrorBoundary>
  );
}

export default App;

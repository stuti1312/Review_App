import 'react-native-gesture-handler';
import React from 'react';

import AuthStack from './src/navigators/AuthStack';

// for ignoring gesture handler warning---- START
import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
// ----- END

const App = () => {
  return (
    // <HomeNavigators />
    <AuthStack />
  );
};

export default App;

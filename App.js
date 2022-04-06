import 'react-native-gesture-handler';
import React from 'react';
import HomeNavigators from './src/navigators/HomeNavigators';

// for ignoring gesture handler warning---- START
import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
// ----- END

const App = () => {
  return <HomeNavigators />;
};

export default App;

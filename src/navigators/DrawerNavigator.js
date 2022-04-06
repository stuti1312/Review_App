import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import About from '../screens/About';

const Stack = createNativeStackNavigator();

const DrawerNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default DrawerNavigator;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Reviews from './src/screens/Reviews';
import About from './src/screens/About';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: 'HOME PAGE',
            headerStyle: {backgroundColor: 'lightgray'},
          }}
        />
        <Stack.Screen
          name="review"
          component={Reviews}
          options={{
            title: 'REVIEW DETAILS',
            headerStyle: {backgroundColor: 'lightgray'},
          }}
        />
        <Stack.Screen
          name="about"
          component={About}
          options={{
            title: 'ABOUT PAGE',
            headerStyle: {backgroundColor: 'lightgray'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

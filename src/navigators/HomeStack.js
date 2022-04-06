import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Reviews from '../screens/Reviews';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: 'HOME PAGE',
          headerStyle: {
            //   backgroundColor: 'lightgray',
            height: 60,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="review"
        component={Reviews}
        options={{
          title: 'REVIEW DETAILS',
          headerStyle: {
            //   backgroundColor: 'lightgray',
            height: 60,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

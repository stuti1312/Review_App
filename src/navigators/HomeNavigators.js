import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerNavigator from './DrawerNavigator';
import AuthStack from './AuthStack';

const RootStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeNavigators = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="AuthStack" component={AuthStack} />
        <RootStack.Screen name="Drawer" component={DrawerNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigators;
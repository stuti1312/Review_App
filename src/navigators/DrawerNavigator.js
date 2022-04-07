import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import About from '../screens/About';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

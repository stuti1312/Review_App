import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import HomeStack from './HomeStack';
import DrawerNavigator from './DrawerNavigator';

const RootDrawer = createDrawerNavigator();

const HomeNavigators = () => {
  return (
    <NavigationContainer>
      <RootDrawer.Navigator>
        <RootDrawer.Screen name="HomeStack" component={HomeStack} />
        <RootDrawer.Screen name="HomeDrawer" component={DrawerNavigator} />
      </RootDrawer.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigators;

// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const Stack = createNativeStackNavigator();
//   return (
//     <Drawer.Navigator>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="About" component={About} />
//       <Stack.Screen name="Review" component={Reviews} />
//     </Drawer.Navigator>
//   );
// };

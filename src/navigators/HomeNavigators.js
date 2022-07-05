import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import HomeStack from './HomeStack';
import DrawerNavigator from './DrawerNavigator';

const RootDrawer = createDrawerNavigator();

const HomeNavigators = () => {
  return (
    <NavigationContainer>
      <RootDrawer.Navigator
        screenOptions={{
          headerShown: true,
          swipeEnabled: true,
          gestureEnabled: true,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#0080ff'},
          headerTintColor: '#ffffff',
          headerTitleStyle: {fontSize: 25, fontWeight: 'bold'},
        }}
        initialRouteName="HomeStack"
        drawerPosition="right"
        drawerType="front"
        edgeWidth={100}
        hideStatusBar={false}
        overlayColor="skyblue"
        drawerStyle={{backgroundColor: 'pink', width: 250}}>
        <RootDrawer.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            title: 'The HOMESTACK',
            // drawerIcon: ({focused}) => (
            //   <FontAwesome
            //     size={focused ? 25 : 20}
            //     color={focused ? 'red' : 'pink'}
            //   />
            // ),
          }}
        />
        <RootDrawer.Screen
          name="HomeDrawer"
          component={DrawerNavigator}
          options={{title: 'The DRAWERSTACK'}}
        />
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

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/Home';
import Reviews from '../screens/Reviews';
import Header from '../reuseables/Header';

const Auth = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Auth.Navigator>
        <Auth.Screen
          name="home"
          component={Home}
          options={({navigation}) => {
            return {
              headerTitle: () => (
                <Header navigation={navigation} title="HomeScreen" />
              ),
            };
          }}
        />
        <Auth.Screen
          name="review"
          component={Reviews}
          options={{
            title: 'REVIEW DETAILS',
            headerStyle: {
              backgroundColor: 'lightgray',
              height: 60,
            },
            headerTintColor: 'black',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            //   fontSize: 20,
            // },
          }}
        />
      </Auth.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;

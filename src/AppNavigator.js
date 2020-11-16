import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import HomeScreen from './imgs/HomeScreen';

const Stack = createStackNavigator()

const RootStack = () => {
    return (
      <Stack.Navigator
        initialRouteName
        >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login Form'}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{title: 'Register Page'}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home Page'}}
        />
      </Stack.Navigator>
    );
  };

export default RootStack

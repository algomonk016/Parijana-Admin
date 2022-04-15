import React from "react";
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack'

import {
  Home,
  Explore
} from '../screens'

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName='Dashboard'>
      <Stack.Screen name="Dashboard" component={Home} />
      <Stack.Screen name="Explore" component={Explore} />
    </Stack.Navigator>
  )
}

export default AppNavigator
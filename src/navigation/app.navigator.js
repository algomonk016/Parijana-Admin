import React from "react";
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack'

import {
  Home,
  Explore
} from '../screens'

import Tabs from './tabs.navigator'

import { tabs } from '../constants'

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={tabs.APP}>
      <Stack.Screen name={tabs.APP} component={Tabs} />
      {/*<Stack.Screen name={tabs.EXPLORE} component={Explore} /> */}
    </Stack.Navigator>
  )
}

export default AppNavigator

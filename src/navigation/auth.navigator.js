import React from 'react'
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack'
import {
  Login,
  Register
} from '../screens'
import { tabs } from '../constants'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={tabs.LOGIN}>
      <Stack.Screen name={tabs.LOGIN} component={Login} />
      <Stack.Screen name={tabs.REGISTER} component={Register} />
    </Stack.Navigator>
  )
}

export default AuthNavigator

import React from 'react'
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack'
import {
  Login,
  Register
} from '../screens'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
     initialRouteName='Login'>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  )
}

export default AuthNavigator
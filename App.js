import React from 'react';
import { StatusBar } from 'expo-status-bar';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
  StyleSheet, 
  Text, 
  Button, 
  View, 
} from 'react-native';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppRoute from './src/navigation/navigator';
import { store } from './src/redux/store'

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="Explore" component={Explore} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={Home} />
    //     <Tab.Screen name="Explore" component={Explore} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    <SafeAreaProvider>
      <Provider store={store}>
        <AppRoute />
        <StatusBar style='auto' />
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, Button, View, SafeAreaView } from 'react-native';
import {
  Explore,
  Home
} from './src/screens/'

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
    <SafeAreaView style={styles.container}>
      <Text>
        will be working on login
      </Text>
    </SafeAreaView>
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

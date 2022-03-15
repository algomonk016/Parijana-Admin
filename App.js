import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Home,
  AddDocument,
  Login,
  Register,
  CameraScreen
} from './screens'
import { tabs } from './constants'
import Tabs from './navigation/Tabs';

const Stack = createStackNavigator()


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  
  const backgroundStyle = {
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //   </ScrollView>
    // </SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions = {{
          headerShown: false
        }}
        initialRouteName = {tabs.LOGIN}
      >
        <Stack.Screen
          name={tabs.LOGIN}
          component={Login}
        />
        <Stack.Screen
          name={tabs.REGISTER}
          component={Register}
        />
        <Stack.Screen
          name={tabs.CAMERA_SCREEN}
          component={CameraScreen}
        />
        <Stack.Screen
          name={tabs.APP}
          component={Tabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


// const Section = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           // {
//           //   color: isDarkMode ? Colors.white : Colors.black,
//           // },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           // {
//           //   color: isDarkMode ? Colors.light : Colors.dark,
//           // },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

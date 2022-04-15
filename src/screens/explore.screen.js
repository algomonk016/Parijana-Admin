import React from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const Explore = ({ navigation }) => {
  return(
    <SafeAreaView edges={['top', 'right', 'left']}>
      <Text>Explore Screen</Text>
      <Button
        title="Show me the Home screen"
        onPress={() => navigation.navigate('Home')}
      />
    </SafeAreaView>
  )
}

export default Explore
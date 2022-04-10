import React from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'

const Home = ({ navigation }) => {
  return(
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Show me the Explore screen"
        onPress={() => navigation.navigate('Explore')}
      />
    </View>
  )
}

export default Home
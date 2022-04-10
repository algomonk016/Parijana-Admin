import React from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'

const Explore = ({ navigation }) => {
  return(
    <View>
      <Text>Explore Screen</Text>
      <Button
        title="Show me the Home screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default Explore
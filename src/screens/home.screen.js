import React from 'react'
import {
  View,
  Text,
  Button,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context';

import { setSignOut } from '../redux/slices/authSlice'
const Home = ({ navigation }) => {

  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(setSignOut())
  }

  return(
    <SafeAreaView edges={['top', 'left', 'right']}>
      <Text>Home Screen</Text>
      <Button
        title="Logout"
        onPress={handleLogout}
      />
    </SafeAreaView>
  )
}

export default Home
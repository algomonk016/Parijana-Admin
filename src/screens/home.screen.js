import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context';

import { setSignOut } from '../redux/slices/authSlice'
import {
  icons,
  COLORS,
  tabs,
} from '../constants/'

import {
  TouchableButton,
  RecentUploads,
} from '../components'

const Home = ({ navigation }) => {

  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(setSignOut())
  }

  return(
    <SafeAreaView edges={['top', 'left', 'right']} style = {styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* welcome container */}
        <View style = {styles.viewContainer}>
          <Text style = {styles.text}>Hey, <Text style = {styles.name}>Shivesh</Text></Text>
          <TouchableOpacity onPress = {handleLogout}><Image source={icons.logout} style = {styles.logoutIcon} /></TouchableOpacity>
        </View>

        {/* have a look what's going around */}
        <View style = {styles.viewContainer}>
          <Text style = {styles.text}> Have a look, what's going around! </Text>
        </View>

        {/* upload document */}
        <View style = {[styles.viewContainer, {
          flexDirection: 'column',
          alignItems: 'flex-start',
        }]}>
          <Text style = {styles.text}> Have any document to upload </Text>
          <TouchableButton buttonProps = {{ onPress: () => navigation.navigate(tabs.EXPLORE)  }} text = {'Add Document'} type = {1} />
        </View>

        {/* recent uploads of uesr, with their ratings */}

        <View style = {[styles.viewContainer, {
          flexDirection: 'column',
          alignItems: 'flex-start',
        }]}>
          <Text style = {styles.text}> Recent Uploads </Text>
          <RecentUploads />
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  }, 
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 8,
  },
  text: {
    fontSize: 18,
  },
  name: {
    fontWeight: 'bold',
  },
  logoutIcon: {
    width: 20,
    height: 20,
  }
})

export default Home

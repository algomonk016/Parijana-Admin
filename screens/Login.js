import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import {
  COLORS, SIZES, FONTS
} from '../constants'

import {
  CustomButton
} from '../components'

import { tabs } from '../constants'

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <Text style={styles.logoText}>Parijana</Text>
        <Text style={styles.subText}>Admin</Text>
      </View>

      <View style={styles.lower}>
        <CustomButton
          buttonText={'Sign in'}
          colors={[COLORS.turquoise, COLORS.orange]}
          onPress={() => navigation.navigate(tabs.APP)}
          buttonContainerStyle={{
            paddingVertical: 18,
            borderRadius: 20,
            backgroundColor: COLORS.turquoise,
          }}
        />

        <CustomButton
          buttonText={'Sign up'}
          // onPress={() => navigation.navigate('')}
          buttonContainerStyle={{
            paddingVertical: 18,
            borderRadius: 20,
            marginTop: SIZES.radius,
            borderColor: COLORS.turquoise,
            borderWidth: 1
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignContent: 'center',
    justifyContent: 'space-evenly'
  },
  logoText: {
    textAlign: 'center',
    color: COLORS.orange,
    ...FONTS.logoText1
  },
  subText: {
    textAlign: 'center',
    color: COLORS.orange,
    marginVertical: SIZES.body3,
    ...FONTS.h2
  },
  upper: {
    // backgroundColor: 'red',
    paddingVertical: SIZES.body1,
  },
  lower: {
    paddingVertical: SIZES.body2,
    paddingHorizontal: SIZES.body2,
    // backgroundColor: 'red',
  },
});

export default Login
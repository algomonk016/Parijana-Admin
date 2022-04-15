import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import { useDispatch } from "react-redux";
import { SafeAreaView } from 'react-native-safe-area-context';
import { setSignIn } from '../redux/slices/authSlice'
import {
  Input
} from '../components'
import {
  COLORS,
  images
} from '../constants/'

const Register = ({ navigation }) => {
  const dispatch = useDispatch()

  const [userName, setUserName] = useState()
  const [userId, setUserId] = useState()
  const [password, setPassword] = useState()

  const handleRegister = () => {

    // api call here, 
    // user is the response

    const user = {
      isLoggedIn: true,
      email: 'test@test.in',
      userName: 'algomonk016',
    }

    dispatch(setSignIn(user))
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      {/* upper part */}
      <View style={styles.upperPart}>
        {/* welcome text */}
          <View style={styles.welcomeContainer}>
            <Text style={styles.mainHeading}>Create Account, </Text>
            <Text style={styles.subHeading}>Sign up to get started!</Text>
          </View>

          {/* input form */}
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.labelText}>Full Name:</Text>
              <Input placeholder="Full Name" onChangeText={setUserName} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.labelText}>Email Id:</Text>
              <Input placeholder="User Id" onChangeText={setUserId} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.labelText}>Password:</Text>
              <Input placeholder="User Password" onChangeText={setPassword}  />
            </View>
          </View>
      </View>

      <View style={styles.lowerPart}>
        <TouchableOpacity onPress={handleRegister} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.newUserText}>I'm a already a member, <Text onPress={() => navigation.navigate('Login')} style={styles.signUpText}>Sign In</Text></Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  upperPart: {
    flex: 3,
    justifyContent: 'space-around',
    width: '90%',
    paddingHorizontal: 10,
  },
  welcomeContainer: {
    marginVertical: 10,
  },
  mainHeading: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 25,
    fontWeight: '500',
    color: COLORS.gray3,
  },
  formContainer: {
  },
  inputContainer: {
    marginVertical: 5,
  },
  labelText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.gray3,
    letterSpacing: 0.4,
  },
  lowerPart: {
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    paddingBottom: 20,
  },
  button: {
    backgroundColor: COLORS.turquoise,
    paddingVertical: 10,
    borderRadius: 10,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 20,
  },
  signUpButton: {
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  newUserText: {
    margin: 0,
    padding: 10,
    alignItems: 'center',
    color: COLORS.gray3,
  },
  signUpText: {
    color: COLORS.orange,
    fontWeight: 'bold',
  }
})

export default Register

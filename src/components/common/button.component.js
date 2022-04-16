import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import {
  COLORS
} from '../../constants'

const TouchableButton = ({
  buttonProps, 
  buttonStyle, 
  text, 
  textStyle, 
  type = 0,
}) => {

  return(
    <TouchableOpacity {...buttonProps} style = {[(type === 0 ? styles.button : (type === 1 ? styles.button1 : styles.button2)), buttonStyle]}>
      <Text style = {[(type === 0 ? styles.text : (type === 1 ? styles.text1 : styles.text2)), textStyle]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 8,
    backgroundColor: COLORS.orange2,
    marginVertical: 5,
  },
  button1: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    borderWidth: 1.5,
    borderColor: COLORS.lightTurquoise,
    marginVertical: 5,
    marginTop: 10,
  },
  button2: {

  },
  text: {
    color: COLORS.orange,
    fontSize: 16,
  },
  text1: {
    color: COLORS.turquoise,
    fontSize: 18,
  }
})

export default TouchableButton


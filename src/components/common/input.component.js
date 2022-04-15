import React from "react";
import {
  TextInput,
  StyleSheet
} from 'react-native'
import {
  COLORS
} from '../../constants/'

const Input = (props) => {

  return (
    <TextInput {...props} style={[styles.input, props.style]} />
  )
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    borderColor: COLORS.gray2,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontWeight: 'bold',
    marginVertical: 5,
  }
})

export default Input
import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

const Processing = ({
  navigation,
  route
}) => {

  const { processImage } = route.params

  useEffect(() => {
    if (processImage) {
      ProcessImage()
    }

    ConvertToPDF()
  })

  const ProcessImage = async () => {
    setTimeout(() => {
      alert('complete processing')
    }, 2000)
  }

  const ConvertToPDF = () => {
    setTimeout(() => {

      alert('complete converting')
    }, 2000)


  }

  return (
    <SafeAreaView>
      <Text>images are being processed and converted to pdf</Text>
      <Text>Please dont leave this screen</Text>
    </SafeAreaView>
  )
}

export default Processing
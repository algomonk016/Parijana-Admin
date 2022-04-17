import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import {
  COLORS,
  tabs,
  images
} from '../constants'

const Processing = ({
  navigation,
  route
}) => {

  const { processImage, imagesCaptured } = route.params
  const [isProcessed, setIsProcessed] = useState(!processImage)
  const [isConverted, setIsConverted] = useState(false)
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    ProcessImage(imagesCaptured)
      .then((response) => {
        console.log('response', response)
        const { images } = response

        ConvertToPDF(images)
          .then(response2 => {
            setIsConverted(true)
          })
          .catch(error => {
            console.log('error', error)
          })
      }).catch((error) => {
        console.log('error', error)
      })
  })

  const ProcessImage = (imagesCaptured) => {
    const processedImages = imagesCaptured
    setTimeout(() => {
      setIsProcessed(true)
      return processImage
    }, 3000)
    return new Promise((resolve, reject) => {
      if (isProcessed) {
        console.log('we are here')
        const successObject = {
          status: '200',
          images: processedImages
        }
        resolve(successObject)
      } else {
        const errorObject = {
          status: '500',
          msg: 'Something went wrong on processing image'
        }
        reject(errorObject)
      }
    })
  }

  const ConvertToPDF = (images) => {
    const convertedPDF = images

    setTimeout(() => {
      setFlag(true)
      return convertedPDF
    }, 4000)
    return new Promise((resolve, reject) => {
      if (flag) {
        const successObject = {
          status: '200',
          pdf: convertedPDF
        }
        resolve(successObject)
      } else {
        const errorObject = {
          status: '500',
          msg: 'Something went wrong on converting to pdf'
        }
        reject(errorObject)
      }
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>images are being processed and converted to pdf</Text>
      <Text>Please dont leave this screen</Text>

      {
        isProcessed && (<Text>Processed Image</Text>)
      }

      {
        isConverted ? (<Image style={styles.kakashiThumbsUp} source={images.kakashiThumbsUp} />) : (<Image style={styles.waitingGIF} source={images.sharinganWaiting} />)
      }

    </SafeAreaView>
  )

}
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white
  },
  waitingGIF: {
    // width: 150,
    // height: 70,
  },
  kakashiThumbsUp: {
    // width: 200,
  }
})

export default Processing
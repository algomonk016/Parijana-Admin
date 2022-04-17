import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import { Camera } from 'expo-camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, icons, tabs } from '../constants'

export default function CameraApp({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cameraRef, setCameraRef] = useState(null)
  const [imagesCaptured, setImagesCaptured] = useState([])
  // const ratiosSupported = async () => (await Camera.getAvailablePictureSizesAsync())

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();

    return () => {
      setImagesCaptured([])
    }
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const captureImage = async () => {
    if (!cameraRef) {
      console.log('no camera ref')
      return
    }
    const photo = await cameraRef.takePictureAsync('photo')
    const imagesCapturedTemp = [...imagesCaptured]
    imagesCapturedTemp.push(photo)
    setImagesCaptured(imagesCapturedTemp)
  }

  const PreviewCaptured = () => {
    if (imagesCaptured.length === 0) {
      return (
        <Text style={styles.noImagesCaptured}>No images captured</Text>
      )
    }

    return (
      imagesCaptured.map((image, ind) => (
        <View key={JSON.stringify(image)} style={styles.previewImageView}>
          <Image source={{ uri: image?.uri }} style={styles.previewImage} />
          <TouchableOpacity style={{
            padding: 3,
            position: 'absolute',
            top: -10,
            right: -6,
            borderRadius: 20,
            backgroundColor: COLORS.lightRed,
          }}
            onPress={() => removeCapturedIcon(ind)}
          >
            <Image source={icons.trash} style={styles.trashIcon} />
          </TouchableOpacity>
        </View>
      ))
    )

  }

  const removeCapturedIcon = (ind) => {
    const currImages = [...imagesCaptured]
    currImages.splice(ind, 1)
    setImagesCaptured(currImages)
  }

  const nextStep = () => {
    console.log(imagesCaptured)
    if (imagesCaptured.length === 0) {
      Alert.alert(
        "No Images captured!",
        "Do you want to continue?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => navigation.navigate(tabs.ADD_PAPERS) }
        ]
      );
      return
    }

    // move to next page, upload screen
    /*
      next page will show loading and all process
      on success it'll be forwarded to add document screen and document will be by default selected
    */

    else{
      Alert.alert(
        "Want to process image?",
        "Currently a beta feature",
        [
          {
            text: "Na, aise hi thik hai",
            onPress: () => navigation.navigate(tabs.PROCESSING, {
              processImage: false,
              imagesCaptured
            }),
            style: "cancel"
          },
          {
            text: "OK", onPress: () => navigation.navigate(tabs.PROCESSING, {
              processImage: true,
              imagesCaptured
            })
          }
        ]
      );
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={ref => setCameraRef(ref)}
        autoFocus="on"
      >
        <TouchableOpacity style={styles.done} onPress={nextStep}>
          <Text style={styles.doneText}>Next</Text>
        </TouchableOpacity>
      </Camera>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}>
          <Image style={[styles.cameraIcon, { width: 40, height: 40 }]} source={icons.gallery} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={captureImage}>
          <View style={styles.captureIcon}></View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}>
          <Image style={styles.cameraIcon} source={icons.flipCamera} />
        </TouchableOpacity>
      </View>
      <View style={styles.previewImageContainer}>
        <PreviewCaptured />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
  },
  camera: {
    height: '70%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '10%',
    alignItems: 'center'
  },
  button: {

  },
  text: {

  },
  cameraIcon: {
    height: 50,
    width: 50,
  },
  captureIcon: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: COLORS.orange,
  },
  previewImageContainer: {
    height: '15%',
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  previewImage: {
    height: 120,
    width: 80,
    marginLeft: 10,
  },
  previewImageView: {
    position: 'relative'
  },
  trashIcon: {
    width: 20,
    height: 20,
  },
  noImagesCaptured: {
    backgroundColor: COLORS.lightRed,
    padding: 15,
    textAlign: 'center',
    width: '100%',
    color: COLORS.red,
  },
  done: {
    backgroundColor: COLORS.lightTurquoise,
    position: 'absolute',
    right: 10,
    top: 10,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  doneText: {
    color: 'black'
  }
})
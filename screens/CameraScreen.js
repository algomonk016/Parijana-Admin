import React from 'react'
import { 
  View, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  SafeAreaView 
} from 'react-native'
import { RNCamera } from 'react-native-camera';

export default class CameraScreen extends React.Component{
  styles = StyleSheet.create({
    camera: {
      width:'100%', 
      height:'100%', 
      position:'absolute'
    },
    container: {
      width:'100%', 
      height:'100%', 
      alignItems:'center', 
      justifyContent:'flex-end'
    },
    image: {
      width:80,
      height:80
    },
    captureButton: {
      width:60, 
      height:60, 
      backgroundColor: 'white', 
      borderRadius:60,
      marginBottom: 10,
    }
  })

  state = {}
  render(){
    return(
      <SafeAreaView style={this.styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
         style={this.styles.camera}
         type={RNCamera.Constants.Type.back}
         captureAudio={false}
        />
        <Image
          style={this.styles.image}
          source={{uri:this.state.imageUri}}
        />
        <TouchableOpacity
          style={this.styles.captureButton}
          onPress={async ()=>{
            // take picture
            const result = await this.camera.takePictureAsync()
            this.setState({imageUri:result.uri})
          }}
        />
      </SafeAreaView>
    )
  }
}

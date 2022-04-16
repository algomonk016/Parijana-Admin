import React, { useState } from "react";
import { moderateScale } from 'react-native-size-matters';
import * as DocumentPicker from 'expo-document-picker';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import { COLORS, icons, SIZES } from "../../constants";

const PickDocument = ({
  hasPicked = false,
  setHasPicked = () => { },
  pickedFile = null,
  setPickedFile = () => { }
}) => {

  const docPicker = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({});

      let lastThree = result.name.substr(result.name.length - 3);
      if(lastThree == 'pdf'){
        if(result.type == 'success'){
          // alert(result.uri);
          setPickedFile(res)
          setHasPicked(true)
        }
      } else{
        alert('Please select PDF File')
      }

    } catch (err) {
      
    }
  }

  return (
    <View
      style={{
        width: "100%",
        top: moderateScale(8),
        justifyContent: "center",
        borderRadius: moderateScale(10),
      }}
    >
      <TouchableOpacity
        onPress={() => docPicker()}
        style={styles.uploadView}
      >
        <Image
          source={icons.pdf}
          style={styles.documentStatusImg}
        />
        <Text style={styles.uploadTxt}> {hasPicked ? pickedFile?.name : 'Select File'}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  uploadView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#FFE5B4",
    marginBottom: 15,
    // marginBottom: 35,
    borderRadius: SIZES.radius,
    padding: 8,
    borderColor: COLORS.lightOrange,
    borderWidth: 1,
  },
  documentStatusImg: {
    width: SIZES.l3,
    height: SIZES.l3,
  },
  uploadTxt: {
    fontSize: SIZES.body3,
    flex: 3,
    marginLeft: 10,
  }
})

export default PickDocument
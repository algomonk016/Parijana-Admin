import React from "react";
import {
    View,
    Text,
    SafeAreaView
} from 'react-native'
import { RNCamera } from "react-native-camera";
import CameraScreen from "../components/CameraScreen";

const Explore = () => {
    return (
        <SafeAreaView>
            {/* <View>
                <Text>this is explore</Text>
            </View> */}

            <CameraScreen />
        </SafeAreaView>
    )
}

export default Explore
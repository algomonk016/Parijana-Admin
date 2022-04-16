import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    View
} from 'react-native'
import { COLORS, FONTS } from "../../constants";

const CustomButton = ({
    buttonText,
    buttonContainerStyle,
    colors='',
    onPress,
}) => {
    if (colors.length > 0) {
        return (
            <TouchableOpacity
                onPress={onPress}
            >
                <View
                    style={{
                        ...buttonContainerStyle
                    }}
                >
                    <Text
                        style={{
                            textAlign:'center',
                            color: COLORS.white,
                            ...FONTS.h3
                        }}
                    >
                        {buttonText}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity onPress={onPress} >
                <View
                    style={{
                        ...buttonContainerStyle
                    }}
                >
                    <Text
                        style={{
                            textAlign:'center',
                            color: COLORS.turquoise,
                            ...FONTS.h3
                        }}
                    >
                        {buttonText}
                    </Text>
                </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

})

export default CustomButton
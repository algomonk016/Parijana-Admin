import React from 'react'
import {
    View,
    TextInput,
    Text,
    StyleSheet
} from 'react-native'
import { COLORS, SIZES } from '../../constants'

const Input = ({
    label,
    onChangeText = () => {},
    keyboardType='default',
    defaultValue = '',
    autoCapitalize = 'none',
    placeholder='Enter here',
    customStyle
}) => {
    return (
        <View style={[styles.container, customStyle]}>
            <Text style={styles.label}> {label} </Text>
            <TextInput 
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                defaultValue={defaultValue}
                autoCapitalize={autoCapitalize}
                placeholder={placeholder}
                style={styles.field}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: SIZES.base
    },
    label: {

    }, 
    field: {
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.body3,
        paddingVertical: 5,
        marginTop: SIZES.inp3,
        borderColor: COLORS.turquoise,
        borderWidth: 0.5,
        borderWidth: 1,
        borderRadius: SIZES.radius
    }
})

export default Input

/*

keyboard types:
    default
    number-pad
    decimal-pad
    numeric
    email-address
    phone-pad

    iOS Only
        ascii-capable
        numbers-and-punctuation
        url
        name-phone-pad
        twitter
        web-search
        Android Only

    Android only:
        visible-password


autoCapitalize
    characters
    words
    sentences
    none

*/ 
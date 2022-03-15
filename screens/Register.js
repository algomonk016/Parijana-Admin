import React from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

import { tabs } from '../constants'

const Register = ({ navigation }) => {
    return (
        <View>
            <Text>This is Register</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('addpapers')}
            >
                <Text>Add papers</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Register
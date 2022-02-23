import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from 'react-native'

import {
    CustomButton, 
    RecentUploads
} from '../components'

import { COLORS, FONTS, SIZES, tabs } from '../constants'
import dummyData from '../constants/dummyData'

const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                {/* welcome message */}
                <View style={[styles.container, styles.welcomeContainer]}>
                    <Text style={styles.text}>
                        Hey <Text style={styles.welcomeName}>shivesh tiwari</Text> 👋
                    </Text>
                </View>

                {/* what's going around */}
                {/* stats
                        - colleges added
                        - documents uploaded
                        - users
                        - active users
                */}

                <View style={styles.container}>
                    <Text style={styles.text}>Have a look, what's going on around</Text>
                </View>

                {/* add document */}
                <View style={styles.container}>
                    <Text style={styles.text}>Have any document to upload?</Text>
                    <CustomButton
                        buttonText={'Add Document'}
                        buttonContainerStyle={{
                            paddingVertical: 8,
                            borderRadius: 20,
                            marginVertical: SIZES.radius,
                            borderColor: COLORS.turquoise,
                            borderWidth: 1,
                            width: "50%",
                        }}
                        onPress={() => navigation.navigate(tabs.ADD_PAPERS)}
                    />
                </View>

                {/* document's list */}
                <View style={styles.container}>
                    <Text style={[styles.text, styles.recentUploadsText]}>Recent Uploads</Text>
                    
                    <RecentUploads />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white2,
        padding: 15,
        borderRadius: SIZES.radius,
        elevation: 5,
        marginHorizontal: 20,
        marginVertical: 5,
    },
    welcomeContainer: {
        // backgroundColor: 'red',
        width: "70%",
        marginTop: 20,
    },
    text: {
        fontSize: SIZES.h3,
        ...FONTS.juana
    },
    welcomeName: {
        fontWeight: '500',
        textTransform: 'capitalize',
    },
    recentUploadsText: {
        paddingBottom: 10,
    }
})

export default Home
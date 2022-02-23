import React, { useEffect } from "react";
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { Carousel } from "../components";

import {
    COLORS,
    dummyData,
    FONTS,
    icons,
    SIZES
} from '../constants'

const Profile = () => {
    const RECENT_PDF_LIMIT = 5
    const RECENT_REVIEWS_LIMIT = 5
    const { name, college, batch, uploads, department } = dummyData.userProfile

    const Document = ({ doc, ind }) => (
        <TouchableOpacity key={'recent_upload_' + ind}
            // onPress={() => {}}
            style={{
                marginVertical: 5
            }}
        >
            <View style={styles.documentDetailsContainer}>
                <Text style={styles.details}> {ind + 1}. </Text>
                <View>
                    <View style={[styles.detailsContainer, { marginBottom: 4 }]}>
                        <Text style={[styles.details, styles.title]} > {doc.title} </Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.details}> {doc.department} </Text>
                        <Text style={styles.details}> {doc.college} </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )

    const Reviews = ({ data = {}, ind }) => {
        return (
            <View style={styles.feedbackContainer} key={data.title}>
                <View style={styles.feedback}>
                    <View>
                        <View style={styles.quoteIconContainer}>
                            <Image source={icons.quote} style={{
                                // transform: [{ scaleX: -1 }],
                                position: 'absolute',
                                top: -50,
                                left: -20,
                                resizeMode: 'contain',
                                // backgroundColor: 'red',
                                width: 100,
                                height: 100,
                            }} />
                        </View>
                        <Text style={styles.comments}>{data.comments}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 10,
                    }}>
                        <Text style={styles.documentTitle}>{data?.rating}☆ </Text>
                        <Text style={styles.documentTitle}>{data?.title}</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* ratings and feedbacks on his uploads (carousel)
                his uploads
            */}
            <ScrollView>
                {/* user details */}
                <View style={styles.profileContainer}>
                    <View>
                        <Text style={styles.userName}>{name}</Text>
                        <Text style={styles.collegeDetails}>{college}</Text>
                        <Text style={styles.collegeDetails}>{department} - {batch}</Text>
                    </View>
                    <View>
                        <Image style={styles.profilePic} source={icons.profile} />
                    </View>
                </View>

                <View style={styles.documentDetailsSection}>
                    {/* his recent uploads */}
                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}>Recent Uploads</Text>
                        <TouchableOpacity style={styles.linkContainer}>
                            <Text style={styles.link}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {
                            uploads.map((pdf, ind = 0) => {
                                if (ind > RECENT_PDF_LIMIT) return
                                return (
                                    <Document doc={pdf} key={ind} ind={ind} />
                                )
                            })
                        }
                    </View>
                </View>

                <View style={[styles.documentDetailsSection, {
                    paddingVertical: 0,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                }]}>
                    {/* reviews carousel */}
                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}>Reviews and Feedbacks</Text>
                        <View style={styles.linkContainer}>
                            <Text style={styles.link}>See all</Text>
                        </View>
                    </View>
                    <View>
                        {/* {
                            uploads.map((pdf, ind = 0) => {
                                if (ind > RECENT_REVIEWS_LIMIT) return
                                return (
                                    <Reviews doc={pdf} ind={ind} />
                                )
                            })
                        } */}

                        <Carousel slideList={uploads} Slide={Reviews} />
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#9CF5EE',
        backgroundColor: COLORS.orange2,
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: '#9CF5EE',
        backgroundColor: COLORS.orange2,
        paddingVertical: SIZES.body3,
        paddingHorizontal: SIZES.body2,
        alignItems: 'center',
        marginBottom: SIZES.base,
        // position: 'relative',
    },
    profilePic: {
        borderRadius: 50,
        width: 100,
        height: 100,
        borderColor: COLORS.orange,
        borderWidth: 1,
        resizeMode: "contain",
        backgroundColor: COLORS.white,
        // position: 'absolute',
        // right: 0,
        // top: 10,
    },
    userName: {
        fontSize: SIZES.h2,
        letterSpacing: 0.3,
        marginBottom: 10,
    },
    collegeDetails: {
        marginVertical: 1,
    },
    documentDetailsSection: {
        padding: SIZES.body2,
        borderTopLeftRadius: SIZES.body2,
        borderTopRightRadius: SIZES.body2,
        backgroundColor: COLORS.gray,
    },
    documentDetailsContainer: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    detailsContainer: {
        flexDirection: 'row',
    },
    heading: {
        marginBottom: SIZES.base,
        fontSize: 17,
        // ...FONTS.h3
    },
    link: {
        fontSize: SIZES.inp2,
    },
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
        // paddingHorizontal: 14,
    },
    linkContainer: {
        backgroundColor: COLORS.lightTurquoise,
        borderRadius: SIZES.radius,
        paddingHorizontal: 10,
        paddingVertical: 4,
        justifyContent: 'center',
    },
    feedbackContainer: {
        // backgroundColor: COLORS.lightRed,
        paddingHorizontal: SIZES.body2,
        // height: 250,
        width: SIZES.width - 65,
        margin: 5,
        marginBottom: 50,
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: SIZES.padding
    },
    feedback: {
        backgroundColor: COLORS.lightTurquoise,
        width: 300,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding / 2,
        borderRadius: SIZES.radius,
        borderColor: COLORS.purple,
        borderWidth: 1,
        // shadow
        shadowColor: COLORS.purple,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 10
    },
    comments: {

    },
    quoteIconContainer: {
        // width: 10,
        // height: 10,
        position: 'relative',
        width: '50%',
    },
    documentTitle: {
        marginVertical: 5,
    }
})

export default Profile
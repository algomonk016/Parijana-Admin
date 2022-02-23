import React, { useState } from "react";
import { moderateScale } from 'react-native-size-matters';
import DocumentPicker from "react-native-document-picker";
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
    setHasPicked = () => {},
    pickedFile = null, 
    setPickedFile = () => {}
}) => {

    const docPicker = async () => {
        try {
            const res = await DocumentPicker.pickSingle({
                //DocumentPicker.types.images: All image types
                //DocumentPicker.types.plainText: Plain text files
                //DocumentPicker.types.audio: All audio types
                //DocumentPicker.types.pdf: PDF documents
                //DocumentPicker.types.zip: Zip files
                //DocumentPicker.types.csv: Csv files
                //DocumentPicker.types.doc: doc files
                //DocumentPicker.types.docx: docx files
                //DocumentPicker.types.ppt: ppt files
                //DocumentPicker.types.pptx: pptx files
                //DocumentPicker.types.xls: xls files
                //DocumentPicker.types.xlsx: xlsx files
                // type: [DocumentPicker.types.all]
                type: [DocumentPicker.types.pdf, DocumentPicker.types.doc, DocumentPicker.types.docx],
            });
            console.log(
                'uri: ',res.uri,
                'type: ',res.type, // mime type
                'name: ',res.name,
                'size: ',res.size
            );

            setPickedFile(res)
            setHasPicked(true)

        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log("error -----", err);
            } else {
                throw err;
            }
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
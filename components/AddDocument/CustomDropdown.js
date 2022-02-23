import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { SIZES, COLORS } from '../../constants'

const CustomDropdown = ({
    open,
    setOpen = () => {},
    value,
    setValue = () => {},
    items = [],
    setItems = () => {},
    onChangeValue = () => {},
    onOpen = () => {},
    onClose = () => {},
    label,
    searchable = false,
    addCustomItem = false,
    zIndex,
    zIndexInverse
}) => {
    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <DropDownPicker
                open={open}
                onOpen={onOpen}
                onClose={onClose}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={styles.dropdown}
                onChangeValue={onChangeValue}
                searchable={searchable}
                addCustomItem={addCustomItem}
                zIndex={zIndex}
                zIndexInverse={zIndexInverse}
                listMode="SCROLLVIEW" 
                // styles
                containerStyle={styles.containerStyle}
                searchContainerStyle={styles.searchContainerStyle}
                searchTextInputStyle={styles.searchTextInputStyle}
                dropDownContainerStyle={styles.dropDownContainerStyle}
                listItemContainerStyle={styles.listItemContainerStyle}
                listItemLabelStyle={styles.listItemLabelStyle}
                labelStyle={styles.labelStyle}
                // itemSeparatorStyle={styles.itemSeparatorStyle}
                // modalContentContainerStyle={styles.modalContentContainerStyle}
            />
        </>
    )
}

const styles = StyleSheet.create({
    label: {
        // marginLeft: SIZES.body2,
        fontWeight: '500'
    },
    containerStyle: {
        // backgroundColor: 'red',
        paddingVertical: SIZES.body4,
        // paddingHorizontal: SIZES.padding,
        alignItems: 'center',
        borderWidth: 0,
        // zIndex: 10,
    },
    dropdown: {
        height: 40,
        borderColor: COLORS.turquoise,
        borderWidth: 0.5
        // backgroundColor: 'red',
    },
    searchContainerStyle: {
        backgroundColor: COLORS.white,
        alignSelf: 'center',
        borderWidth: 0,
        // zIndex: 10,
    },
    searchTextInputStyle: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: COLORS.turquoise,
        borderWidth: 0.5
    },
    dropDownContainerStyle: {
        borderWidth: 1,
        marginTop: SIZES.body3,
        borderColor: COLORS.turquoise,
        borderWidth: 0.5
        // backgroundColor: 'red',
        // zIndex: 10,
    },
    // itemSeparatorStyle: {
        // borderBottomColor: 'red',
    //     // borderWidth: 2,
    // },
    listItemContainerStyle: {
        // backgroundColor: 'red',
        // borderTopColor: COLORS.lightOrange,
        // backgroundColor: COLORS.lightOrange
    }, 
    listItemLabelStyle: {
        // color: 'red',
        // backgroundColor: 'black',
        // margin: 0,
        // paddingLeft: SIZES.body5,
    },
    labelStyle: {
        // color: COLORS.turquoise,
        // backgroundColor: COLORS.lightTurquoise
    },
    // modalContentContainerStyle: {
    //     // backgroundColor: 'red',
    //     // margin: 50
    // }
})

export default CustomDropdown
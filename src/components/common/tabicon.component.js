import React from "react";
import {
  View,
  Text,
  Image
} from 'react-native'
import { COLORS, SIZES } from "../../constants";

const TabIcon = ({ icon, focused }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        width: 30,
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: SIZES.padding,
          height: SIZES.padding,
          tintColor: focused ? COLORS.orange : COLORS.lightOrange
        }}
      />

      {
        focused &&
          <View
            style = {{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: 3,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              backgroundColor: COLORS.orange,
            }}
          />
      }
    </View>
  )
}

export default TabIcon;

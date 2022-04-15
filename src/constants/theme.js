import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window')

export const COLORS = {
  // white
    white: '#FFFFFF',
    white2: '#F9F9F9',

    // orange
    orange: '#FF9f1C',
    orange2: '#FFDB9B',
    lightOrange: '#FFD194',

    // turquoise
    turquoise: '#2EC4B6',
    lightTurquoise: '#CBF3F0',

    // success/danger
    green: '#39DB80',
    red: '#D8000C',
    lightRed: '#FFBABA',

    // gray
    gray: '#F2F2F2',
    gray2: '#BEBEBE',
    gray3: '#949494',
    // purple
    purple: '#C8C7FF',

    // transparent
    transparentBlack1: 'rgba(2, 2, 2, 0.1)',
    transparentBlack3: 'rgba(2, 2, 2, 0.3)',
    transparentBlack5: 'rgba(2, 2, 2, 0.5)',
    transparentBlack7: 'rgba(2, 2, 2, 0.7)',
    transparentBlack9: 'rgba(2, 2, 2, 0.9)',
    transparentGray: 'rgba(77,77,77, 0.8)',
    transparentDarkGray: 'rgba(20,20,20, 0.9)',
    transparent: 'transparent',
}

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // logo sizes
    l1: 65,
    l2: 55,
    l3: 45,

    // input padding
    inp1: 14,
    inp2: 12,
    inp3: 10,

    // app dimensions
    width,
    height
}

export const FONTS = {
    // largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle },
    // h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    // h2: { fontFamily: "Playfair", fontSize: SIZES.h2, lineHeight: 30 },
    // h3: { fontFamily: "Coldiac", fontSize: SIZES.h3, lineHeight: 22 },
    // h4: { fontFamily: "Coldiac", fontSize: SIZES.h4, lineHeight: 22 },
    // body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    // body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    // body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    // body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    // body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
    // logoText1: { fontFamily: "Ambisi", fontSize: SIZES.l1 },
    // logoText2: { fontFamily: "Ambisi", fontSize: SIZES.l2 },
    // logoText3: { fontFamily: "Ambisi", fontSize: SIZES.l3 },
    // roboto: { fontFamily: "Roboto-Black" },
    // playfair: { fontFamily: "Playfair" },
    // coldiac: { fontFamily: "Playfair" },
    // juana: { fontFamily: "Juana", letterSpacing: 0.50, },
    // juana: { fontFamily: "Roboto-Black", letterSpacing: 0.50, },
};

const appTheme = { FONTS, SIZES, COLORS }

export default appTheme
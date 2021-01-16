import { isIos } from "./func";

export type ColorsType = "BLUE" |
    "GRAY" |
    "BORDER_COLOR" |
    "BACKGROUND"
    | "WHITE" |
    "BASE_COLOR" |
    "GRADIENT_BASE_COLORS" |
    "rgbaWhite"
    | "rgbaBlack"
export const config = {
    fonts: {
        bold: isIos() ? "GESSTextBold-Bold" : "ArbFONTS-GE-SS-Text-Bold_26",
        light: isIos() ? "GESSTextLight-Light" : "ArbFONTS-GE_SS_TEXT_LIGHT",
        medium: isIos() ? "GESSTextMedium-Medium" : "ArbFONTS-GE-SS-Text-Medium_26",
        regular: isIos() ? "GESSTextLight-Light" : "ArbFONTS-GE_SS_TEXT_LIGHT"
    },
    colors: {
        WHITE: "white",
        CHERRY:"#eb062a",

        RED:"#FF2222",
        DARK_GRAY: "#4A4A4A",
        BLUE2: "#4267B2",
        BLACK: "#000",
        
        GRAY1: "#8B8B8B",
        ORANGE: "#FFDD00",
        ORANGE_GRADIENT: ['#FFDD00', '#FF8800'],
        MAUVE_GRADIENT: ['#3900F9', '#A900FF'],
        BLUE_GRADIENT: ['#39FFF8', '#0068F1'],
        RED_GRADIENT: ['#F900AE', '#FF3131'],
        GREEN_GRADIENT: ['#00F9B5', '#27AD00'],
        WHITE_GRADIENT: ['#FFFFFF', '#D1D1D1'],
        GRAY_GRADIENT:['#525252', '#383838'],
        rgbaLightBlue: (opacity) => `rgba(39, 126, 245,${opacity})`,
        rgbaWhite: (opacity) => `rgba(255, 255, 255,${opacity})`,
        rgbaBlack: (opacity) => `rgba(0, 0, 0,${opacity})`

    },



}

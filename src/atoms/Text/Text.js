import React from 'react'
import { config } from '../../config/appConfig'
import { Text, StyleProp, TextStyle, LayoutChangeEvent, Animated } from 'react-native'
import styles from './styles'
import { FontFamilyType } from '../../components/types'
import { RFValue } from '../../screens/LogIn/node_modules/react-native-responsive-fontsize'


type TextProps = {
    style?: StyleProp<TextStyle>,
    fontFamily: FontFamilyType,
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | "null",
    fontSize: "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27",
    color: String,
    numberOfLines: Number,
    onLayout?: (event: LayoutChangeEvent) => void;
}
export function Text_(params: TextProps) {
    return (
        <Animated.Text
            numberOfLines={params.numberOfLines}
            onLayout={params.onLayout}
            style={[styles.textStyle, params.style,
            {
                textAlign: params.textAlign,
                fontSize: RFValue(parseInt(params.fontSize || 16), 812),
                fontFamily: !params.fontFamily ? undefined : (config.fonts[params.fontFamily] || config.fonts.medium),
                color: params.color || config.colors.BLACK
            }]}>
            {params.children}
        </Animated.Text>
    )
}
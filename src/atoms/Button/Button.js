import React from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import styles from './styles';
import { config } from '../../config/appConfig';
import { RFValue } from 'react-native-responsive-fontsize';
import { Icons, IconsName } from '../../config/icons';
import { FontFamilyType } from '../../component/types';
import {Text_} from '../Text/Text';

type TabButtonsProps = {
    style?: StyleProp<ViewStyle>;
    textStyle?: {
        fontFamily: FontFamilyType,
        color: String,
        fontSize: "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24",
    };
    iconStyle?: {
        width: Number,
        color: String,
        height: Number,
    };
    iconName: IconsName,
    text: String,
    onPress: Function,
    activeOpacity: Number,
    defaultStyle: Boolean,
    disabled: Boolean,
    colors: Array,
    gradient: Boolean
}

export function Button(params: TabButtonsProps) {
    return (
        <TouchableOpacity
            disabled={params.disabled}
            activeOpacity={params.activeOpacity}
            onPress={params.onPress}
            style={[{
                flexDirection: "row",alignItems:"center"
            }, params.defaultStyle && styles.buttonStyle, params.style]}>
           
            {params.iconName && <Icons
                scale={params.iconStyle.scale}
                color={params.iconStyle.color}
                width={params.iconStyle.width ? params.iconStyle.width : RFValue(15, 812)}
                height={params.iconStyle.height ? params.iconStyle.height : RFValue(15, 812)}
                name={params.iconName}
            />}
            {params.text && <Text_
                fontFamily={(params.textStyle && params.textStyle.fontFamily) || "medium"}
                fontSize={(params.textStyle && params.textStyle.fontSize) || "15"}
                color={(params.textStyle && params.textStyle.color) || (params.defaultStyle ? config.colors.WHITE : config.colors.GRAY)}
                style={[styles.textStyle]}>
                {params.text}
            </Text_>}
       
            {params.children}

        </TouchableOpacity>


    )
}

Button.defaultProps = {
    style: {},
    iconStyle: {
        color: "black",
        width: RFValue(15, 812),
        height: RFValue(15, 812),
    },
};

import { StyleSheet } from 'react-native'
import { RFValue } from '../../screens/LogIn/node_modules/react-native-responsive-fontsize'
import { config } from '../../config/appConfig'
import { calcHeight, calcWidth } from '../../config/metrics'


export default styles = StyleSheet.create({
    textStyle: {
        fontFamily: config.fonts.light,
        color: config.colors.GRAY,
        fontSize: RFValue(15, 812),
        paddingHorizontal: calcWidth(3)
    },
    buttonStyle: {
        backgroundColor: config.colors.BLACK, width: calcWidth(345),overflow:"hidden",
        alignItems: "center", justifyContent: "center", height: calcHeight(38),
        borderRadius: RFValue(5,812)
    }
})
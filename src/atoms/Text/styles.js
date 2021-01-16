import { StyleSheet } from 'react-native'
import { RFValue } from '../../screens/LogIn/node_modules/react-native-responsive-fontsize'
import { config } from '../../config/appConfig'


export default styles = StyleSheet.create({
    textStyle: {
        fontFamily: config.fonts.light,
        color: config.colors.GRAY,
        fontSize: RFValue(15, 812)
    }
})
import { StyleSheet } from 'react-native';
import { config } from '../../config/appConfig';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: RFValue(15, 812),
        justifyContent: "center"
    },
    helpView: {
        flexDirection: 'row',
        height: RFValue(16, 812),
        marginTop: RFValue(15, 812)
    },
    helpText: {
        fontSize: RFValue(13, 812),
        fontFamily: "Lato-Medium",
        marginHorizontal: RFValue(6, 812)
    },
    forgotPassView: {
        height: RFValue(19, 812),
        width: '100%',
        marginTop: RFValue(24, 812),
        marginBottom: RFValue(64, 812),
        alignItems: 'flex-end'
    },
    textStyle: {
        height: '100%',
        fontFamily: "Poppins-Regular",
        fontSize: RFValue(13, 812),
        textDecorationLine: 'underline'
    },
    buttonStyle: {
        width: RFValue(345, 812),
        height: RFValue(40, 812),
        borderRadius: RFValue(5, 812),
        backgroundColor: config.colors.CHERRY
    },
    buttonText: {
        fontFamily: "Poppins-Regular",
        fontSize: RFValue(15, 812),
        color: config.colors.WHITE
    }

});

export default styles;

import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { config } from '../../config/appConfig';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { RFValue } from 'react-native-responsive-fontsize';
import { Icons } from "../../config/icons";
import { Button } from '../../atoms/Button/Button';
import styles from './styles';

function LogInView(params) {
  let [password, setPassword] = useState("adminadmin")
  let [phone, setPhone] = useState("12345678")

  return (
    <View colors={config.colors.GRADIENT_BASE_COLORS} style={styles.container}>
      <TouchableOpacity style={styles.helpView}>
        <Icons
          name={"help"}
          width={RFValue(18, 812)}
          height={RFValue(18, 812)}
        />
        <Text style={styles.helpText}>Ayuda</Text>
      </TouchableOpacity>

      <KeyboardAwareScrollView
        bounces={false}
        style={{
          width: "100%",
          marginTop: RFValue(74, 812)
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>

        <Icons
          name={"help"}
          width={RFValue(69.2, 812)}
          height={RFValue(76.5, 812)}
        />
        <Icons
          name={"help"}
          width={RFValue(234.3, 812)}
          height={RFValue(30.9, 812)}
          style={{
            marginTop: RFValue(18.3, 812),
            marginBottom: RFValue(78.3, 812)
          }}
        />

        <View style={styles.forgotPassView}>
          <Text style={styles.textStyle}>
            Olvide Contraseña ?
          </Text>
        </View>

        <Button
          style={styles.buttonStyle}
          textStyle={styles.buttonText}>
          Iniciar Sesión
        </Button>

      </KeyboardAwareScrollView>
    </View>
  );
}


export default LogInView;
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { config, } from '../../config/appConfig';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

function LogInView(params) {
  let [password, setPassword] = useState("adminadmin")
  let [phone, setPhone] = useState("12345678")

  return (
    <View colors={config.colors.GRADIENT_BASE_COLORS} style={{ flex: 1, backgroundColor: 'red', alignItems: "center" }}>
      
      <KeyboardAwareScrollView
      bounces={false}
      style={{width:"100%"}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{alignItems:"center"}}
      >
        <Text>Hello LogIn</Text>

      </KeyboardAwareScrollView>
    
    </View>
  );
}


export default LogInView;

import React from 'react';
import NavigationService from '../../navigation/NavigationService';
import LogInView from './LogInView';

const validationInputs = (phone, password) => {
  if (phone === "") {
    global.openToast("من فضلك ادخل رقم الجوال", "w")
    return false
  }
  else if (phone.length < 8) {
    global.openToast("ادخل رقم جوال صحيح", "w")
    return false
  }
  else if (password === "") {
    global.openToast("ادخل كلمة المرور", "w")
  }
  else if (password.length < 8) {
    global.openToast("كلمة المرور لا تقل عن ٨ حروف وارقام", "w")

  }
  else return true
}

function LogIn(params) {
  let onLogIn = async (phone, password) => {
    if (validationInputs(phone, password)) {
      NavigationService.navigate("VerifiyPhone", { phone })
    }
  }

  return (
    <LogInView
      onLogIn={onLogIn}
      {...params}
    />
  )
}

export default LogIn;

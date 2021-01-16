import { StackActions } from '@react-navigation/native';
let _navigator;
type ScreensProps =
    "Home"
function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}
function navigate(routeName: ScreensProps, params) {
    _navigator.navigate(routeName, params)
}

function replace(routeName, params) {
    _navigator.dispatch(StackActions.replace(routeName, params));
}

function goBack(key) {
    _navigator.goBack()
        ;
}
export default {
    navigate,
    goBack,
    replace,
    setTopLevelNavigator
};

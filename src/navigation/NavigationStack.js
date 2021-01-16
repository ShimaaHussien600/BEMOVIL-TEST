
import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationService from './NavigationService';
import LogIn from '../screens/LogIn';

export type Navigators = "Splash"
const Stack = createStackNavigator();


export default function RNApp() {
    return (
        <View style={{ width: "100%", height: "100%" }}>
            <NavigationContainer
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            >
                <Stack.Navigator
                    initialRouteName="LogIn"
                    headerMode="none" >

                    <Stack.Screen
                        options={{ animationEnabled: true }}
                        name="LogIn"
                        component={LogIn}
                    />

                </Stack.Navigator>
            </NavigationContainer>

        </View>


    );
}
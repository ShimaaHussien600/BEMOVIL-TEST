import React, { useRef } from 'react';
import { View, TouchableOpacity, Text, Animated } from 'react-native';
import { Icons } from '../../config/icons';
import styles from './styles';
import { config } from '../../config/appConfig';
import { RFValue } from '../../screens/LogIn/node_modules/react-native-responsive-fontsize';

function TabBottomComponent({ state, descriptors, navigation }) {
    return (
        <View
            style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    navigation.navigate(route.name);
                };
                return (
                    <Item route={route} isFocused={isFocused} label={label} onPress={onPress} />
                );
            })}

        </View>
    );
}

function Item({ route, isFocused, label, onPress }) {
    const Button = Animated.createAnimatedComponent(TouchableOpacity)
    let rotateAnimation = useRef(new Animated.Value(0)).current
    let _onPress = () => {
        onPress()
    }
    let rotate = rotateAnimation.interpolate({ inputRange: [0, 1], outputRange: ["0deg", "360deg"] })
    return (
        <Button
            activeOpacity={1}
            key={route.key}
            onPress={_onPress}
            notes

            style={[styles.buttonItem,
            { transform: [{ rotateY: rotate }] }]}
        >
            <Icons
                color={isFocused ? config.colors.WHITE : config.colors.GRAY1}
                name={label}
                width={RFValue(21, 812)}
                height={RFValue(23, 812)}
            />
            <Text
                style={{
                    color: isFocused ? config.colors.WHITE : config.colors.GRAY1,
                    fontFamily: config.fonts.medium,
                    fontSize: RFValue(10, 812),
                    marginTop: 4
                }}>
                {route.params.name}
            </Text>
        </Button>
    )
}

export { TabBottomComponent }

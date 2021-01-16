/**
 * React Native App
 * Everthing starts from the entrypoint
 */

import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import Navigator from '../src/navigation';


export default class Entrypoint extends Component {

    render() {

        return (
            <View>
                <StatusBar
                    backgroundColor="transparent"
                    barStyle="dark-content" />
                <Navigator />
            </View>
        );
    }
}
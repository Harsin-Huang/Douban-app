import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Navigator
} from 'react-native';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var rootRoute = {
            component: this.props.component,
            passProps: {

            }
        };
        return (
            <Navigator
            initialRoute={rootRoute}
            configureScene={() => {return Navigator.SceneConfigs.PushFromRight}}
            renderScene={(route, navigator) => {
                var Component = route.component;
                return (
                    <View>
                        <Component
                            Navigator={navigator}
                            route={route}
                            {..route.pessProps}/>
                    </View>
                )
            }}
        )
    }
}
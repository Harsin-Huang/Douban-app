/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import RootStack from "./views/rout"

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <RootStack />
      </SafeAreaView>
    )
  }
}

import React, { Component } from 'react';
import Header from "./header";

import {
  View,
  WebView
} from 'react-native';

export default class ConstomWebView extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (
        <View>
            <Header
              navigator={this.props.navigator}
              initObj={{
                backName: this.props.backName,
                title: this.props.title
            }}/>
            <WebView
               startInLoadingState={true}
               contentInset={{top:-44, bottom: -120}}
               sourse={{url: this.props.url}}/>
        </View>
    );
  }
}

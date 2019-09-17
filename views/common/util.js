// 功能的实现（屏幕尺寸、loading组件、GET请求方法）

import React, { Component } from 'react';

import {
  Dimensions,  //用于获取屏幕的宽高
  ActivityIndicator
} from 'react-native';

var Util = {
    // 屏幕的尺寸
    windowSize: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },
    // 基于fetch的get方法，只负责请求数据
    getRequest: function(url, success, fail) {
        fetch(url)
        .then((response) => response.json())
        .then((responseDate) => success(responseDate))
        .catch((error) => fail(error));
    },

    // loading的效果
    loading: <ActivityIndicator style={{marginTop: 200}} />
}

module.exports = Util;
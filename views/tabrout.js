import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import BookList from "./books/book_list";
import Icon from 'react-native-vector-icons/Ionicons';

const RootTab = createMaterialBottomTabNavigator({
    Book: {
      screen: BookList,
      navigationOptions: {
        tabBarLabel: '图书',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='ios-home' color={tintColor} size={24} />
        ),
      }
    },
    Moive: {
      screen: BookList,
      navigationOptions: {
        tabBarLabel: '电影',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='ios-settings' color={tintColor} size={24} />
        ),
      }
    }
  }, 
  {
    initialRouteName: 'Book',
    // swipeEnabled: false, // 是否允许滑动切换tabs 默认是true
    animationEnabled: true, // 点击tab label切换tab时是否开启动画 默认为true
    // order: ['Settings', 'Home'],
    tabBarPosition: 'bottom', // tab bar显示的位置，默认是 'top'
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#f2f2f2',
        borderTopWidth: 0.5,
        borderTopColor: 'grey',
      },
      indicatorStyle: {
        height: 0, // 不显示indicator
      },
      showIcon: true, // 是否显示图标, 默认为false
      showLabel: true, // 是否显示label
    },
  });


// const RootStack = createAppContainer(AppNavigator);

export default RootTab
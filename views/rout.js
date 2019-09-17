import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BookDetail from "./books/book_detail";
import RootTab from "./tabrout"

const AppNavigator = createStackNavigator({
    Home: {
        screen: RootTab,
        navigationOptions: {
            header: null,
        }
    },
    BookDetail: {
        screen: BookDetail
    },
});

const RootApp = createAppContainer(AppNavigator);

export default RootApp
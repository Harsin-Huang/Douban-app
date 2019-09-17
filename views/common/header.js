import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const topdata = this.props.initObj;
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.left_btn} onPress={this._pop}>
                    <View style={styles.icon}></View>
                    <Text style={styles.btn_text}>{topdata.backName}</Text>
                </TouchableOpacity>
                <View style={styles.title_container}>
                    <Text style={styles.title}  numberOfLines={1}>{topdata.title}</Text>
                </View>
            </View>
        );
    }
    _pop() {
       this.props.navigator.pop()
    }
};

const styles = StyleSheet.create({
    header: {
        height: 44,
        backgroundColor: "#3497ff",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    left_btn: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        width: 15,
        height: 15,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderColor: "#fff",
        marginLeft: 10,
        transform: [{rotate: "45deg"}]
    },
    btn_text: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold",
    },
    title_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"   
    },
    title: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        lineHeight: 18,
        width: 200
    }
})
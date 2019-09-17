import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Searchbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <View style={styles.contariner}>
            <View style={styles.inputContariner}>
                <TextInput style={styles.input} {...this.props}/>
            </View>
            <TouchableOpacity style={styles.btn} {...this.props}>
                <Text style={styles.search}>搜索</Text>
            </TouchableOpacity>
        </View>
        )
    }
};

const styles = StyleSheet.create({
    contariner: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        height: 44,
        marginTop: 10,
        marginBottom: 10,
    },
    inputContariner: {
        flex: 1,
        marginLeft: 5,
    },
    input: {
        flex: 1,
        height: 44,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#ccc"
    },
    btn: {
        width: 55,
        height: 44,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: "#23BEFF",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center", 
    },
    search: {
        flex: 1,
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 44,
    }
})
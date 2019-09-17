import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  SectionList,
  TouchableOpacity
} from 'react-native';

export default class BookItem extends Component { 
    constructor(props) {
        super(props);
    }   
    render() {
        var book = this.props.book;
        // alert(JSON.stringify(book))
        return (
            <TouchableOpacity style={styles.item} {...this.props}>
                <View style={styles.imagecontent}>
                    <Image style={styles.image} source={{uri:book.image}}/>
                </View>
                <View style={styles.content}>
                    <View style={styles.textcontent}>
                        <Text style={styles.title}>{book.title}</Text>
                    </View>
                    <View style={styles.textcontent}>
                        <Text style={styles.publicsher}>{book.publisher}</Text>
                    </View>
                    <View style={styles.textcontent}>
                        <Text style={styles.publicsher}>{book.author.join(",")}</Text>
                    </View>
                    <View style={styles.con}>
                        <Text style={styles.price}>{book.price}</Text>
                        <Text style={styles.pages}>{book.pages}页</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )          
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        height: 120,
        padding: 10
    },
    imagecontent: {
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 80,
        height: 100,
    },
    content: {
        flex: 1,
        marginLeft: 15
    },
    textcontent: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold"
    },
    publicsher: {
        color: "#a3a3a3",
        fontSize: 13
    },
    con: {
        flexDirection: "row",
    },
    price: {
        color: "#2bb2a3",
        fontSize: 13
    },
    pages: {
        flex: 1,
        justifyContent: "flex-start",
        marginLeft: 10,
        color: "#a7a0a0"
    }
})
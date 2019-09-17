import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';

var Util = require("./../common/util");
var ServiceUrl = require("./../common/service");
import BookItem from "./book_item";

export default class BookDetaily extends Component {
    static navigationOptions = {
        headerTitle: '图书',
        headerStyle: {
            height: 44,
            backgroundColor: '#3497ff',
        },
        headerTitleStyle: {
            color: "#fff",
            fontSize: 16,
            textAlign: 'center',
            flex:1,
        },
        headerTitleContainerStyle:{
            left: 56,
            right: 56,
        },
        headerTintColor: '#fff',
    }
    constructor(props) {
        super(props);
        this.state = {
            bookDate: null 
        }
    }
    getDate() {
        var that = this;
        var url = ServiceUrl.book_detail_id + this.props.navigation.state.params.bookID;
        Util.getRequest(url, function(data){
            that.setState({
                bookData: data
            })
        }, function(error){
            alert(error);
        })
    }
    render() {
        var data =this.state.bookData;
        return (
            <ScrollView>
                {
                    this.state.bookData ?
                      <View>
                          {/* <Header 
                              initObj={{backName:"图书", barTitle:data.title}}
                              navigator={this.props.navigator}/> */}
                          <BookItem book={data}/>
                          <View>
                             <Text style={styles.title}>图书简介</Text>
                             <Text style={styles.text}>{data.summary}</Text>
                          </View>
                          <View style={{marginTop:10}}>
                             <Text style={styles.title}>作者简介</Text>
                             <Text style={styles.text}>{data.author_intro}</Text>
                          </View>
                          <View style={{height: 55}}></View>
                      </View>
                    : Util.loading
                }
            </ScrollView>
        )
    }
    componentDidMount() {
        this.getDate();
    }
}

const styles = StyleSheet.create({
    title: {
        margin: 10,
        fontSize: 16,
        color: "#000"
    },
    text: {
        marginLeft: 10,
        marginRight: 10,
        color: "#a3a3a3",
        fontSize: 13
    },
})
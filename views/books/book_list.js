import React, { Component } from 'react';
import {StackNavigator, TabBarTop, TabNavigator} from "react-navigation";

import {
  View,
  FlatList,
  ScrollView
} from 'react-native';

var Util = require("./../common/util");
var ServiceUrl = require("./../common/service");
import BookItem from "./book_item";
import SearchBar from "../common/seachBar";

export default class BookList extends Component {
    static navigationOptions = {
        headerTitle: '图书列表',
        header: null
    }
    constructor(props) {
        super(props);
        // 当前请求数量
        this.num = 10;
        // 状态
        this.state = {
            dataSource: [],
            show: false,
            keywords: "React",  
            isRefresh:false,     //下拉刷新
            isLoadMore:false    //加载更多
        };
    }
    getDate() {
        this.setState({
            show: false
        });
        
        var that = this;
        var url = `${ServiceUrl.book_search} ?count= ${this.num} &q= ${this.state.keywords}`;
        Util.getRequest(url, function(data){
            if(!data.books || data.books.length == 0){
                that.setState({
                    show: true
                });
                return alert("没有相关书籍！");
            } else{
            }
            if(that.num === 10){
                that.setState({
                    show: true,
                    dataSource: data.books
                });
            } else{
                that.setState({
                    show: true,
                    // 加载更多 这个变量不刷新
                    isLoadMore : false,
                    // 数据源刷新 add
                    dataSource: data.books
                })
            }
            
        }, function(error){
            alert(error);
        })
    }
   _changeText(text) {
        this.setState({ keywords: text})
    }
    _searchPress() {
        this.getDate();
    }
    _showDetail(bookID) {
        this.props.navigation.navigate('BookDetail', {bookID: bookID})
    }
    render() {
        return (
            <ScrollView>
                <SearchBar 
                  placeholder="请输入图书的名称"
                  onPress={this._searchPress.bind(this)}
                  onChangeText={this._changeText.bind(this)}/>
                {
                    //请求数据时显示loading
                    this.state.show ?
                        <FlatList
                        initialNumToRender={10}
                        data={this.state.dataSource}
                        keyExtractor={this._keyExtractor}
                        onRefresh={this._onRefresh.bind(this)}
                        refreshing={this.state.isRefresh}
                        // onEndReached={this._onLoadMore.bind(this)}
                        // onEndReachedThreshold={0.1}
                        renderItem={this._renderRow.bind(this)}
                        ItemSeparatorComponent={this._renderSeparator} />
                    : Util.loading
                }
            </ScrollView>
        );
    }
    componentDidMount() {
        this.getDate();
    }
    // 下载刷新
    _onRefresh() {
        if(!this.state.isRefresh){
            alert("正在下拉刷新")
            this.num = 20;
            this.getDate();
        }
    }
    // 上拉加载 
    _onLoadMore(){
        // 不处于正在加载更多 && 有下拉刷新过，因为没数据的时候 会触发加载
        if(!this.state.isLoadMore && this.state.dataSource.length > 0){
            this.num = this.num + 10
            // this.getDate();
        }
    }
    _keyExtractor = (item,index) => {
        return '' + index
    }
    _renderRow(data) {
        return <BookItem book={data.item} onPress={this._showDetail.bind(this, data.item.id)}/>
    }
    _renderSeparator(sectionID:number, rowID:numder) {
        var style = {
            height: 1,
            backgroundColor: "#CCC"
        }
        return <View style={style} key={sectionID+rowID}/>
    }
}

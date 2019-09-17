/* 
    接口 API
    基于豆瓣开发的API的图书、电影 
*/


var BaseUrl = "https://douban.uieee.com/v2/";

var Douban_APIS = {
    // 图书搜索
    book_search: BaseUrl + "book/search",
    // 图书详情
    book_detail_id: BaseUrl + "book/",
    // 电影搜索
    moive_search: BaseUrl + "movie/search",
}

module.exports = Douban_APIS;
import * as grpc from '@grpc/grpc-js';
import {News, NewsList, Empty} from '../../../../generated/proto/news_pb';
import { newsDB } from './news.entity';


function getNews(_call: grpc.ServerUnaryCall<Empty, NewsList>, callback: grpc.sendUnaryData<NewsList>){
    const response = new NewsList();
    const news = new News();
    let packet = [];
    
    const another = newsDB.map(item => {
        news.setId(item.id)
        news.setTitle(item.title)
        news.setBody(item.body)
        news.setCreatedat(item.createdAt)
        return news;
    })
    
    console.log(another);
    response.setNewsList(packet)
    callback(null, response);
}

export const NewsModel = {
    getNews
}
import * as grpc from '@grpc/grpc-js';
import { NewsServiceClient } from '../../generated/proto/news_grpc_pb';
import News from './modules/news/news.controller';

const newsClient = new NewsServiceClient("localhost:4000", grpc.credentials.createInsecure());

News.getNews(newsClient);
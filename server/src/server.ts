import * as grpc from '@grpc/grpc-js';
import {NewsServiceService, INewsServiceServer} from '../../generated/proto/news_grpc_pb';
import { NewsModel } from './modules/news/news.model';

const server = new grpc.Server();


//@ts-ignore
server.addService(NewsServiceService, NewsModel);

const port = process.env.PORT || 4000;

server.bindAsync(`127.0.0.1:${port}`, grpc.ServerCredentials.createInsecure(), () => {
    console.log('server started on port 4000 💪, yay 🎉')
})
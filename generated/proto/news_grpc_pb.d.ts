// package: 
// file: proto/news.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_news_pb from "../proto/news_pb";
import * as google_protobuf_Empty_pb from "../google/protobuf/Empty_pb";

interface INewsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getNews: INewsServiceService_IGetNews;
}

interface INewsServiceService_IGetNews extends grpc.MethodDefinition<google_protobuf_Empty_pb.Empty, proto_news_pb.NewsList> {
    path: "/NewsService/GetNews";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_Empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_Empty_pb.Empty>;
    responseSerialize: grpc.serialize<proto_news_pb.NewsList>;
    responseDeserialize: grpc.deserialize<proto_news_pb.NewsList>;
}

export const NewsServiceService: INewsServiceService;

export interface INewsServiceServer {
    getNews: grpc.handleUnaryCall<google_protobuf_Empty_pb.Empty, proto_news_pb.NewsList>;
}

export interface INewsServiceClient {
    getNews(request: google_protobuf_Empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_news_pb.NewsList) => void): grpc.ClientUnaryCall;
    getNews(request: google_protobuf_Empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_news_pb.NewsList) => void): grpc.ClientUnaryCall;
    getNews(request: google_protobuf_Empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_news_pb.NewsList) => void): grpc.ClientUnaryCall;
}

export class NewsServiceClient extends grpc.Client implements INewsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getNews(request: google_protobuf_Empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_news_pb.NewsList) => void): grpc.ClientUnaryCall;
    public getNews(request: google_protobuf_Empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_news_pb.NewsList) => void): grpc.ClientUnaryCall;
    public getNews(request: google_protobuf_Empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_news_pb.NewsList) => void): grpc.ClientUnaryCall;
}

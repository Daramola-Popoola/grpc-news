// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_news_pb = require('../proto/news_pb.js');
var google_protobuf_Empty_pb = require('google-protobuf/google/protobuf/Empty_pb.js');

function serialize_NewsList(arg) {
  if (!(arg instanceof proto_news_pb.NewsList)) {
    throw new Error('Expected argument of type NewsList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NewsList(buffer_arg) {
  return proto_news_pb.NewsList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_Empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_Empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var NewsServiceService = exports.NewsServiceService = {
  getNews: {
    path: '/NewsService/GetNews',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_Empty_pb.Empty,
    responseType: proto_news_pb.NewsList,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_NewsList,
    responseDeserialize: deserialize_NewsList,
  },
};

exports.NewsServiceClient = grpc.makeGenericClientConstructor(NewsServiceService, "NewsService");

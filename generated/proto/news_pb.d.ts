// package: 
// file: proto/news.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_Empty_pb from "../google/protobuf/Empty_pb";

export class News extends jspb.Message { 
    getId(): string;
    setId(value: string): News;
    getTitle(): string;
    setTitle(value: string): News;
    getBody(): string;
    setBody(value: string): News;
    getCreatedat(): string;
    setCreatedat(value: string): News;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): News.AsObject;
    static toObject(includeInstance: boolean, msg: News): News.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: News, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): News;
    static deserializeBinaryFromReader(message: News, reader: jspb.BinaryReader): News;
}

export namespace News {
    export type AsObject = {
        id: string,
        title: string,
        body: string,
        createdat: string,
    }
}

export class NewsList extends jspb.Message { 
    clearNewsList(): void;
    getNewsList(): Array<News>;
    setNewsList(value: Array<News>): NewsList;
    addNews(value?: News, index?: number): News;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewsList.AsObject;
    static toObject(includeInstance: boolean, msg: NewsList): NewsList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewsList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewsList;
    static deserializeBinaryFromReader(message: NewsList, reader: jspb.BinaryReader): NewsList;
}

export namespace NewsList {
    export type AsObject = {
        newsList: Array<News.AsObject>,
    }
}
export class Empty implements google_protobuf_Empty_pb {}

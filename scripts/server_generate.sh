#!/usr/bin/bash

GRPC_TOOLS_PLUGIN="C:/Program Files/nodejs/grpc_tools_node_protoc_plugin.cmd";


C:\\Users\\User\\AppData\\Roaming\\nvm\\v20.9.0\\grpc_tools_node_protoc.cmd \
--js_out=import_style=commonjs,binary:C:/grpc/news/generated \
--grpc_out=grpc_js:C:/grpc/news/generated \
--ts_out=C:/grpc/news/generated \
./proto/news.proto
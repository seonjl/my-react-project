
gen:
	npx @aws-amplify/cli codegen
	
	aws appsync get-introspection-schema --api-id k2irhu4utbf3xfufxdtuoyeupy --region ap-northeast-2 --format SDL schema.graphql

	npx @aws-amplify/cli codegen models \
	--model-schema schema.graphql \
	--target typescript \
	--output-dir ./
import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import {
  GetBucketTaggingOutput,
  GetBucketTaggingRequest,
} from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface GetBucketTaggingCommandInput extends GetBucketTaggingRequest {}
export interface GetBucketTaggingCommandOutput
  extends GetBucketTaggingOutput,
    __MetadataBearer {}
export declare class GetBucketTaggingCommand extends $Command<
  GetBucketTaggingCommandInput,
  GetBucketTaggingCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: GetBucketTaggingCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetBucketTaggingCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBucketTaggingCommandInput, GetBucketTaggingCommandOutput>;
  private serialize;
  private deserialize;
}
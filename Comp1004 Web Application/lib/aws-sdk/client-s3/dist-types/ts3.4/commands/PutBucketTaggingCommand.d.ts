import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { PutBucketTaggingRequest } from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface PutBucketTaggingCommandInput extends PutBucketTaggingRequest {}
export interface PutBucketTaggingCommandOutput extends __MetadataBearer {}
export declare class PutBucketTaggingCommand extends $Command<
  PutBucketTaggingCommandInput,
  PutBucketTaggingCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: PutBucketTaggingCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutBucketTaggingCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutBucketTaggingCommandInput, PutBucketTaggingCommandOutput>;
  private serialize;
  private deserialize;
}
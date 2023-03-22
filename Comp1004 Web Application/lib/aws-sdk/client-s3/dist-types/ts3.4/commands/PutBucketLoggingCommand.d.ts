import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { PutBucketLoggingRequest } from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface PutBucketLoggingCommandInput extends PutBucketLoggingRequest {}
export interface PutBucketLoggingCommandOutput extends __MetadataBearer {}
export declare class PutBucketLoggingCommand extends $Command<
  PutBucketLoggingCommandInput,
  PutBucketLoggingCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: PutBucketLoggingCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutBucketLoggingCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutBucketLoggingCommandInput, PutBucketLoggingCommandOutput>;
  private serialize;
  private deserialize;
}
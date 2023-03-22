import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import {
  GetBucketVersioningOutput,
  GetBucketVersioningRequest,
} from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface GetBucketVersioningCommandInput
  extends GetBucketVersioningRequest {}
export interface GetBucketVersioningCommandOutput
  extends GetBucketVersioningOutput,
    __MetadataBearer {}
export declare class GetBucketVersioningCommand extends $Command<
  GetBucketVersioningCommandInput,
  GetBucketVersioningCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: GetBucketVersioningCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetBucketVersioningCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBucketVersioningCommandInput, GetBucketVersioningCommandOutput>;
  private serialize;
  private deserialize;
}
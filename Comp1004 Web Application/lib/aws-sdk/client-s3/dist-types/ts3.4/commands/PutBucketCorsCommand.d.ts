import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { PutBucketCorsRequest } from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface PutBucketCorsCommandInput extends PutBucketCorsRequest {}
export interface PutBucketCorsCommandOutput extends __MetadataBearer {}
export declare class PutBucketCorsCommand extends $Command<
  PutBucketCorsCommandInput,
  PutBucketCorsCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: PutBucketCorsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutBucketCorsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutBucketCorsCommandInput, PutBucketCorsCommandOutput>;
  private serialize;
  private deserialize;
}
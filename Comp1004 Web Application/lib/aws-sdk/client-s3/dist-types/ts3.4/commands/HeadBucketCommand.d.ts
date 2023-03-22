import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HeadBucketRequest } from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface HeadBucketCommandInput extends HeadBucketRequest {}
export interface HeadBucketCommandOutput extends __MetadataBearer {}
export declare class HeadBucketCommand extends $Command<
  HeadBucketCommandInput,
  HeadBucketCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: HeadBucketCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: HeadBucketCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<HeadBucketCommandInput, HeadBucketCommandOutput>;
  private serialize;
  private deserialize;
}

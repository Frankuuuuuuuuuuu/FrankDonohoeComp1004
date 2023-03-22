import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { GetBucketCorsOutput, GetBucketCorsRequest } from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface GetBucketCorsCommandInput extends GetBucketCorsRequest {}
export interface GetBucketCorsCommandOutput
  extends GetBucketCorsOutput,
    __MetadataBearer {}
export declare class GetBucketCorsCommand extends $Command<
  GetBucketCorsCommandInput,
  GetBucketCorsCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: GetBucketCorsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetBucketCorsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBucketCorsCommandInput, GetBucketCorsCommandOutput>;
  private serialize;
  private deserialize;
}
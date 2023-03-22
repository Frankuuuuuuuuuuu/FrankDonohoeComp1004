import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import {
  GetBucketPolicyOutput,
  GetBucketPolicyRequest,
} from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface GetBucketPolicyCommandInput extends GetBucketPolicyRequest {}
export interface GetBucketPolicyCommandOutput
  extends GetBucketPolicyOutput,
    __MetadataBearer {}
export declare class GetBucketPolicyCommand extends $Command<
  GetBucketPolicyCommandInput,
  GetBucketPolicyCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: GetBucketPolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetBucketPolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBucketPolicyCommandInput, GetBucketPolicyCommandOutput>;
  private serialize;
  private deserialize;
}
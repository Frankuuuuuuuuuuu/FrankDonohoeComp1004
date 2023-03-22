import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import {
  GetBucketPolicyStatusOutput,
  GetBucketPolicyStatusRequest,
} from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface GetBucketPolicyStatusCommandInput
  extends GetBucketPolicyStatusRequest {}
export interface GetBucketPolicyStatusCommandOutput
  extends GetBucketPolicyStatusOutput,
    __MetadataBearer {}
export declare class GetBucketPolicyStatusCommand extends $Command<
  GetBucketPolicyStatusCommandInput,
  GetBucketPolicyStatusCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: GetBucketPolicyStatusCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetBucketPolicyStatusCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetBucketPolicyStatusCommandInput,
    GetBucketPolicyStatusCommandOutput
  >;
  private serialize;
  private deserialize;
}

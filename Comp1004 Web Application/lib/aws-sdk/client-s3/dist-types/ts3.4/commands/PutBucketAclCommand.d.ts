import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { PutBucketAclRequest } from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface PutBucketAclCommandInput extends PutBucketAclRequest {}
export interface PutBucketAclCommandOutput extends __MetadataBearer {}
export declare class PutBucketAclCommand extends $Command<
  PutBucketAclCommandInput,
  PutBucketAclCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: PutBucketAclCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutBucketAclCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutBucketAclCommandInput, PutBucketAclCommandOutput>;
  private serialize;
  private deserialize;
}

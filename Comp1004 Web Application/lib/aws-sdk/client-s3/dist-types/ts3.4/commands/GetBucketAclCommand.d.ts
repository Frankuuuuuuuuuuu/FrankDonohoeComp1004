import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { GetBucketAclOutput, GetBucketAclRequest } from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface GetBucketAclCommandInput extends GetBucketAclRequest {}
export interface GetBucketAclCommandOutput
  extends GetBucketAclOutput,
    __MetadataBearer {}
export declare class GetBucketAclCommand extends $Command<
  GetBucketAclCommandInput,
  GetBucketAclCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: GetBucketAclCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetBucketAclCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBucketAclCommandInput, GetBucketAclCommandOutput>;
  private serialize;
  private deserialize;
}
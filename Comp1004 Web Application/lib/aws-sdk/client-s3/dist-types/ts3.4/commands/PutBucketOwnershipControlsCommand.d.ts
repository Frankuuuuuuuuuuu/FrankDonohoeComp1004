import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { PutBucketOwnershipControlsRequest } from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface PutBucketOwnershipControlsCommandInput
  extends PutBucketOwnershipControlsRequest {}
export interface PutBucketOwnershipControlsCommandOutput
  extends __MetadataBearer {}
export declare class PutBucketOwnershipControlsCommand extends $Command<
  PutBucketOwnershipControlsCommandInput,
  PutBucketOwnershipControlsCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: PutBucketOwnershipControlsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutBucketOwnershipControlsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutBucketOwnershipControlsCommandInput,
    PutBucketOwnershipControlsCommandOutput
  >;
  private serialize;
  private deserialize;
}
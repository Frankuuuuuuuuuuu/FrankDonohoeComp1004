import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { PutBucketInventoryConfigurationRequest } from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface PutBucketInventoryConfigurationCommandInput
  extends PutBucketInventoryConfigurationRequest {}
export interface PutBucketInventoryConfigurationCommandOutput
  extends __MetadataBearer {}
export declare class PutBucketInventoryConfigurationCommand extends $Command<
  PutBucketInventoryConfigurationCommandInput,
  PutBucketInventoryConfigurationCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: PutBucketInventoryConfigurationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutBucketInventoryConfigurationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutBucketInventoryConfigurationCommandInput,
    PutBucketInventoryConfigurationCommandOutput
  >;
  private serialize;
  private deserialize;
}
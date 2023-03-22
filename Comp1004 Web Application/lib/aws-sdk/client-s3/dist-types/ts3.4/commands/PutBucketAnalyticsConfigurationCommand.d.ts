import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { PutBucketAnalyticsConfigurationRequest } from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface PutBucketAnalyticsConfigurationCommandInput
  extends PutBucketAnalyticsConfigurationRequest {}
export interface PutBucketAnalyticsConfigurationCommandOutput
  extends __MetadataBearer {}
export declare class PutBucketAnalyticsConfigurationCommand extends $Command<
  PutBucketAnalyticsConfigurationCommandInput,
  PutBucketAnalyticsConfigurationCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: PutBucketAnalyticsConfigurationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutBucketAnalyticsConfigurationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutBucketAnalyticsConfigurationCommandInput,
    PutBucketAnalyticsConfigurationCommandOutput
  >;
  private serialize;
  private deserialize;
}

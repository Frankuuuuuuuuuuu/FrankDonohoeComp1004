import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import {
  ListBucketMetricsConfigurationsOutput,
  ListBucketMetricsConfigurationsRequest,
} from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface ListBucketMetricsConfigurationsCommandInput
  extends ListBucketMetricsConfigurationsRequest {}
export interface ListBucketMetricsConfigurationsCommandOutput
  extends ListBucketMetricsConfigurationsOutput,
    __MetadataBearer {}
export declare class ListBucketMetricsConfigurationsCommand extends $Command<
  ListBucketMetricsConfigurationsCommandInput,
  ListBucketMetricsConfigurationsCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: ListBucketMetricsConfigurationsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListBucketMetricsConfigurationsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListBucketMetricsConfigurationsCommandInput,
    ListBucketMetricsConfigurationsCommandOutput
  >;
  private serialize;
  private deserialize;
}
import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { DeleteBucketMetricsConfigurationRequest } from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface DeleteBucketMetricsConfigurationCommandInput
  extends DeleteBucketMetricsConfigurationRequest {}
export interface DeleteBucketMetricsConfigurationCommandOutput
  extends __MetadataBearer {}
export declare class DeleteBucketMetricsConfigurationCommand extends $Command<
  DeleteBucketMetricsConfigurationCommandInput,
  DeleteBucketMetricsConfigurationCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: DeleteBucketMetricsConfigurationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteBucketMetricsConfigurationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteBucketMetricsConfigurationCommandInput,
    DeleteBucketMetricsConfigurationCommandOutput
  >;
  private serialize;
  private deserialize;
}
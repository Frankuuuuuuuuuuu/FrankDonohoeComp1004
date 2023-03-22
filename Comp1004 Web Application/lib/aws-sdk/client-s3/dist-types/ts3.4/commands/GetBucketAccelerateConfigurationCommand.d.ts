import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import {
  GetBucketAccelerateConfigurationOutput,
  GetBucketAccelerateConfigurationRequest,
} from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface GetBucketAccelerateConfigurationCommandInput
  extends GetBucketAccelerateConfigurationRequest {}
export interface GetBucketAccelerateConfigurationCommandOutput
  extends GetBucketAccelerateConfigurationOutput,
    __MetadataBearer {}
export declare class GetBucketAccelerateConfigurationCommand extends $Command<
  GetBucketAccelerateConfigurationCommandInput,
  GetBucketAccelerateConfigurationCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: GetBucketAccelerateConfigurationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetBucketAccelerateConfigurationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetBucketAccelerateConfigurationCommandInput,
    GetBucketAccelerateConfigurationCommandOutput
  >;
  private serialize;
  private deserialize;
}

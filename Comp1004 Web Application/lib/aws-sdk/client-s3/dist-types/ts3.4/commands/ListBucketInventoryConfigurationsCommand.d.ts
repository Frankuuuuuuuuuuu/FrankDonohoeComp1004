import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import {
  ListBucketInventoryConfigurationsOutput,
  ListBucketInventoryConfigurationsRequest,
} from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface ListBucketInventoryConfigurationsCommandInput
  extends ListBucketInventoryConfigurationsRequest {}
export interface ListBucketInventoryConfigurationsCommandOutput
  extends ListBucketInventoryConfigurationsOutput,
    __MetadataBearer {}
export declare class ListBucketInventoryConfigurationsCommand extends $Command<
  ListBucketInventoryConfigurationsCommandInput,
  ListBucketInventoryConfigurationsCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: ListBucketInventoryConfigurationsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListBucketInventoryConfigurationsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListBucketInventoryConfigurationsCommandInput,
    ListBucketInventoryConfigurationsCommandOutput
  >;
  private serialize;
  private deserialize;
}

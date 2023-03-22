import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { DeleteBucketInventoryConfigurationRequest } from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface DeleteBucketInventoryConfigurationCommandInput
  extends DeleteBucketInventoryConfigurationRequest {}
export interface DeleteBucketInventoryConfigurationCommandOutput
  extends __MetadataBearer {}
export declare class DeleteBucketInventoryConfigurationCommand extends $Command<
  DeleteBucketInventoryConfigurationCommandInput,
  DeleteBucketInventoryConfigurationCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: DeleteBucketInventoryConfigurationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteBucketInventoryConfigurationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteBucketInventoryConfigurationCommandInput,
    DeleteBucketInventoryConfigurationCommandOutput
  >;
  private serialize;
  private deserialize;
}
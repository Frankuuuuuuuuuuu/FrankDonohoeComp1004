import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { DeleteBucketIntelligentTieringConfigurationRequest } from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface DeleteBucketIntelligentTieringConfigurationCommandInput
  extends DeleteBucketIntelligentTieringConfigurationRequest {}
export interface DeleteBucketIntelligentTieringConfigurationCommandOutput
  extends __MetadataBearer {}
export declare class DeleteBucketIntelligentTieringConfigurationCommand extends $Command<
  DeleteBucketIntelligentTieringConfigurationCommandInput,
  DeleteBucketIntelligentTieringConfigurationCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: DeleteBucketIntelligentTieringConfigurationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteBucketIntelligentTieringConfigurationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteBucketIntelligentTieringConfigurationCommandInput,
    DeleteBucketIntelligentTieringConfigurationCommandOutput
  >;
  private serialize;
  private deserialize;
}

import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import {
  GetBucketEncryptionOutput,
  GetBucketEncryptionRequest,
} from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface GetBucketEncryptionCommandInput
  extends GetBucketEncryptionRequest {}
export interface GetBucketEncryptionCommandOutput
  extends GetBucketEncryptionOutput,
    __MetadataBearer {}
export declare class GetBucketEncryptionCommand extends $Command<
  GetBucketEncryptionCommandInput,
  GetBucketEncryptionCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: GetBucketEncryptionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetBucketEncryptionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBucketEncryptionCommandInput, GetBucketEncryptionCommandOutput>;
  private serialize;
  private deserialize;
}

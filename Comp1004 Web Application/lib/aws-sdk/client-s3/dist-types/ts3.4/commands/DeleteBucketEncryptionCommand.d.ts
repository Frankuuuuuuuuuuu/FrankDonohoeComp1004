import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { DeleteBucketEncryptionRequest } from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface DeleteBucketEncryptionCommandInput
  extends DeleteBucketEncryptionRequest {}
export interface DeleteBucketEncryptionCommandOutput extends __MetadataBearer {}
export declare class DeleteBucketEncryptionCommand extends $Command<
  DeleteBucketEncryptionCommandInput,
  DeleteBucketEncryptionCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: DeleteBucketEncryptionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteBucketEncryptionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteBucketEncryptionCommandInput,
    DeleteBucketEncryptionCommandOutput
  >;
  private serialize;
  private deserialize;
}

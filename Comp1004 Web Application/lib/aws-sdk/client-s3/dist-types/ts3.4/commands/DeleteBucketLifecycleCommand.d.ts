import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { DeleteBucketLifecycleRequest } from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface DeleteBucketLifecycleCommandInput
  extends DeleteBucketLifecycleRequest {}
export interface DeleteBucketLifecycleCommandOutput extends __MetadataBearer {}
export declare class DeleteBucketLifecycleCommand extends $Command<
  DeleteBucketLifecycleCommandInput,
  DeleteBucketLifecycleCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: DeleteBucketLifecycleCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteBucketLifecycleCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteBucketLifecycleCommandInput,
    DeleteBucketLifecycleCommandOutput
  >;
  private serialize;
  private deserialize;
}
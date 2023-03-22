import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { DeleteBucketReplicationRequest } from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface DeleteBucketReplicationCommandInput
  extends DeleteBucketReplicationRequest {}
export interface DeleteBucketReplicationCommandOutput
  extends __MetadataBearer {}
export declare class DeleteBucketReplicationCommand extends $Command<
  DeleteBucketReplicationCommandInput,
  DeleteBucketReplicationCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: DeleteBucketReplicationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteBucketReplicationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteBucketReplicationCommandInput,
    DeleteBucketReplicationCommandOutput
  >;
  private serialize;
  private deserialize;
}
import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { DeleteBucketCorsRequest } from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface DeleteBucketCorsCommandInput extends DeleteBucketCorsRequest {}
export interface DeleteBucketCorsCommandOutput extends __MetadataBearer {}
export declare class DeleteBucketCorsCommand extends $Command<
  DeleteBucketCorsCommandInput,
  DeleteBucketCorsCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: DeleteBucketCorsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteBucketCorsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteBucketCorsCommandInput, DeleteBucketCorsCommandOutput>;
  private serialize;
  private deserialize;
}
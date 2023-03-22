import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { DeleteObjectOutput, DeleteObjectRequest } from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface DeleteObjectCommandInput extends DeleteObjectRequest {}
export interface DeleteObjectCommandOutput
  extends DeleteObjectOutput,
    __MetadataBearer {}
export declare class DeleteObjectCommand extends $Command<
  DeleteObjectCommandInput,
  DeleteObjectCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: DeleteObjectCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteObjectCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteObjectCommandInput, DeleteObjectCommandOutput>;
  private serialize;
  private deserialize;
}

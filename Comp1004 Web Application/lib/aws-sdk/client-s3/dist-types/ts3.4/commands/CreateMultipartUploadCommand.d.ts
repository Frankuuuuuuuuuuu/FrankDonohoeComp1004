import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import {
  CreateMultipartUploadOutput,
  CreateMultipartUploadRequest,
} from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface CreateMultipartUploadCommandInput
  extends CreateMultipartUploadRequest {}
export interface CreateMultipartUploadCommandOutput
  extends CreateMultipartUploadOutput,
    __MetadataBearer {}
export declare class CreateMultipartUploadCommand extends $Command<
  CreateMultipartUploadCommandInput,
  CreateMultipartUploadCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: CreateMultipartUploadCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateMultipartUploadCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateMultipartUploadCommandInput,
    CreateMultipartUploadCommandOutput
  >;
  private serialize;
  private deserialize;
}
import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import {
  CompleteMultipartUploadOutput,
  CompleteMultipartUploadRequest,
} from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface CompleteMultipartUploadCommandInput
  extends CompleteMultipartUploadRequest {}
export interface CompleteMultipartUploadCommandOutput
  extends CompleteMultipartUploadOutput,
    __MetadataBearer {}
export declare class CompleteMultipartUploadCommand extends $Command<
  CompleteMultipartUploadCommandInput,
  CompleteMultipartUploadCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: CompleteMultipartUploadCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CompleteMultipartUploadCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CompleteMultipartUploadCommandInput,
    CompleteMultipartUploadCommandOutput
  >;
  private serialize;
  private deserialize;
}
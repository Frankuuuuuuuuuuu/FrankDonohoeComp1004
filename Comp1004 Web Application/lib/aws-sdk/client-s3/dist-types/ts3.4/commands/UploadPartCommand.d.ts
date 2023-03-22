import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { UploadPartOutput, UploadPartRequest } from "../models/models_1";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
type UploadPartCommandInputType = Pick<
  UploadPartRequest,
  Exclude<keyof UploadPartRequest, "Body">
> & {
  Body?: UploadPartRequest["Body"] | string | Uint8Array | Buffer;
};
export interface UploadPartCommandInput extends UploadPartCommandInputType {}
export interface UploadPartCommandOutput
  extends UploadPartOutput,
    __MetadataBearer {}
export declare class UploadPartCommand extends $Command<
  UploadPartCommandInput,
  UploadPartCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: UploadPartCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UploadPartCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UploadPartCommandInput, UploadPartCommandOutput>;
  private serialize;
  private deserialize;
}
export {};
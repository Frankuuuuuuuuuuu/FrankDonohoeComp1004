import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { PutObjectOutput, PutObjectRequest } from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
type PutObjectCommandInputType = Pick<
  PutObjectRequest,
  Exclude<keyof PutObjectRequest, "Body">
> & {
  Body?: PutObjectRequest["Body"] | string | Uint8Array | Buffer;
};
export interface PutObjectCommandInput extends PutObjectCommandInputType {}
export interface PutObjectCommandOutput
  extends PutObjectOutput,
    __MetadataBearer {}
export declare class PutObjectCommand extends $Command<
  PutObjectCommandInput,
  PutObjectCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: PutObjectCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutObjectCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutObjectCommandInput, PutObjectCommandOutput>;
  private serialize;
  private deserialize;
}
export {};
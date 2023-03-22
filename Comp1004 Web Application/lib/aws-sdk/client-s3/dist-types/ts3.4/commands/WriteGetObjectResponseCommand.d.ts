import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { WriteGetObjectResponseRequest } from "../models/models_1";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
type WriteGetObjectResponseCommandInputType = Pick<
  WriteGetObjectResponseRequest,
  Exclude<keyof WriteGetObjectResponseRequest, "Body">
> & {
  Body?: WriteGetObjectResponseRequest["Body"] | string | Uint8Array | Buffer;
};
export interface WriteGetObjectResponseCommandInput
  extends WriteGetObjectResponseCommandInputType {}
export interface WriteGetObjectResponseCommandOutput extends __MetadataBearer {}
export declare class WriteGetObjectResponseCommand extends $Command<
  WriteGetObjectResponseCommandInput,
  WriteGetObjectResponseCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: WriteGetObjectResponseCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: WriteGetObjectResponseCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    WriteGetObjectResponseCommandInput,
    WriteGetObjectResponseCommandOutput
  >;
  private serialize;
  private deserialize;
}
export {};

import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import {
  SelectObjectContentOutput,
  SelectObjectContentRequest,
} from "../models/models_1";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface SelectObjectContentCommandInput
  extends SelectObjectContentRequest {}
export interface SelectObjectContentCommandOutput
  extends SelectObjectContentOutput,
    __MetadataBearer {}
export declare class SelectObjectContentCommand extends $Command<
  SelectObjectContentCommandInput,
  SelectObjectContentCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: SelectObjectContentCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: SelectObjectContentCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SelectObjectContentCommandInput, SelectObjectContentCommandOutput>;
  private serialize;
  private deserialize;
}

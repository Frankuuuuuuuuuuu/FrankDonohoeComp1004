import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import {
  ListMultipartUploadsOutput,
  ListMultipartUploadsRequest,
} from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface ListMultipartUploadsCommandInput
  extends ListMultipartUploadsRequest {}
export interface ListMultipartUploadsCommandOutput
  extends ListMultipartUploadsOutput,
    __MetadataBearer {}
export declare class ListMultipartUploadsCommand extends $Command<
  ListMultipartUploadsCommandInput,
  ListMultipartUploadsCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: ListMultipartUploadsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListMultipartUploadsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListMultipartUploadsCommandInput,
    ListMultipartUploadsCommandOutput
  >;
  private serialize;
  private deserialize;
}

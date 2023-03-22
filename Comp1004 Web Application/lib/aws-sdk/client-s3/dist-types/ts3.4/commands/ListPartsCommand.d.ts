import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { ListPartsOutput, ListPartsRequest } from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface ListPartsCommandInput extends ListPartsRequest {}
export interface ListPartsCommandOutput
  extends ListPartsOutput,
    __MetadataBearer {}
export declare class ListPartsCommand extends $Command<
  ListPartsCommandInput,
  ListPartsCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: ListPartsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListPartsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPartsCommandInput, ListPartsCommandOutput>;
  private serialize;
  private deserialize;
}

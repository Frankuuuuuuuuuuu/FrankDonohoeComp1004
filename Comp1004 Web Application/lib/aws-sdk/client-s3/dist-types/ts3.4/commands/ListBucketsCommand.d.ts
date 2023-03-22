import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { ListBucketsOutput } from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface ListBucketsCommandInput {}
export interface ListBucketsCommandOutput
  extends ListBucketsOutput,
    __MetadataBearer {}
export declare class ListBucketsCommand extends $Command<
  ListBucketsCommandInput,
  ListBucketsCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: ListBucketsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListBucketsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBucketsCommandInput, ListBucketsCommandOutput>;
  private serialize;
  private deserialize;
}
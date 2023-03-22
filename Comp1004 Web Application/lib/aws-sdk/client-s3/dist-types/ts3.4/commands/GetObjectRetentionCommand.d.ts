import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import {
  GetObjectRetentionOutput,
  GetObjectRetentionRequest,
} from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface GetObjectRetentionCommandInput
  extends GetObjectRetentionRequest {}
export interface GetObjectRetentionCommandOutput
  extends GetObjectRetentionOutput,
    __MetadataBearer {}
export declare class GetObjectRetentionCommand extends $Command<
  GetObjectRetentionCommandInput,
  GetObjectRetentionCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: GetObjectRetentionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetObjectRetentionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetObjectRetentionCommandInput, GetObjectRetentionCommandOutput>;
  private serialize;
  private deserialize;
}

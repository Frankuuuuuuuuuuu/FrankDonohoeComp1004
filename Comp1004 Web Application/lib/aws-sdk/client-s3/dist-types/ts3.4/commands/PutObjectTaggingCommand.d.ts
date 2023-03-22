import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import {
  PutObjectTaggingOutput,
  PutObjectTaggingRequest,
} from "../models/models_1";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface PutObjectTaggingCommandInput extends PutObjectTaggingRequest {}
export interface PutObjectTaggingCommandOutput
  extends PutObjectTaggingOutput,
    __MetadataBearer {}
export declare class PutObjectTaggingCommand extends $Command<
  PutObjectTaggingCommandInput,
  PutObjectTaggingCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: PutObjectTaggingCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutObjectTaggingCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutObjectTaggingCommandInput, PutObjectTaggingCommandOutput>;
  private serialize;
  private deserialize;
}

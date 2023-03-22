import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import {
  PutObjectLegalHoldOutput,
  PutObjectLegalHoldRequest,
} from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface PutObjectLegalHoldCommandInput
  extends PutObjectLegalHoldRequest {}
export interface PutObjectLegalHoldCommandOutput
  extends PutObjectLegalHoldOutput,
    __MetadataBearer {}
export declare class PutObjectLegalHoldCommand extends $Command<
  PutObjectLegalHoldCommandInput,
  PutObjectLegalHoldCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: PutObjectLegalHoldCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutObjectLegalHoldCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutObjectLegalHoldCommandInput, PutObjectLegalHoldCommandOutput>;
  private serialize;
  private deserialize;
}

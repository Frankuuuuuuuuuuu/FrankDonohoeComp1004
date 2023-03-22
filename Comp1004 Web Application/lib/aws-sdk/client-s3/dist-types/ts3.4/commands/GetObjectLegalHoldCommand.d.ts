import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import {
  GetObjectLegalHoldOutput,
  GetObjectLegalHoldRequest,
} from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface GetObjectLegalHoldCommandInput
  extends GetObjectLegalHoldRequest {}
export interface GetObjectLegalHoldCommandOutput
  extends GetObjectLegalHoldOutput,
    __MetadataBearer {}
export declare class GetObjectLegalHoldCommand extends $Command<
  GetObjectLegalHoldCommandInput,
  GetObjectLegalHoldCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: GetObjectLegalHoldCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetObjectLegalHoldCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetObjectLegalHoldCommandInput, GetObjectLegalHoldCommandOutput>;
  private serialize;
  private deserialize;
}
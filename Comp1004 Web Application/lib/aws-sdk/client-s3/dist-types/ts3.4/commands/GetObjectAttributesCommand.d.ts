import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import {
  GetObjectAttributesOutput,
  GetObjectAttributesRequest,
} from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface GetObjectAttributesCommandInput
  extends GetObjectAttributesRequest {}
export interface GetObjectAttributesCommandOutput
  extends GetObjectAttributesOutput,
    __MetadataBearer {}
export declare class GetObjectAttributesCommand extends $Command<
  GetObjectAttributesCommandInput,
  GetObjectAttributesCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: GetObjectAttributesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetObjectAttributesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetObjectAttributesCommandInput, GetObjectAttributesCommandOutput>;
  private serialize;
  private deserialize;
}
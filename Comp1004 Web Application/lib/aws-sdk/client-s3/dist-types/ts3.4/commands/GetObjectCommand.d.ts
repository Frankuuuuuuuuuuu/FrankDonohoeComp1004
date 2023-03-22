import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  WithSdkStreamMixin as __WithSdkStreamMixin,
} from "@aws-sdk/types";
import { GetObjectOutput, GetObjectRequest } from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface GetObjectCommandInput extends GetObjectRequest {}
export interface GetObjectCommandOutput
  extends __WithSdkStreamMixin<GetObjectOutput, "Body">,
    __MetadataBearer {}
export declare class GetObjectCommand extends $Command<
  GetObjectCommandInput,
  GetObjectCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: GetObjectCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetObjectCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetObjectCommandInput, GetObjectCommandOutput>;
  private serialize;
  private deserialize;
}
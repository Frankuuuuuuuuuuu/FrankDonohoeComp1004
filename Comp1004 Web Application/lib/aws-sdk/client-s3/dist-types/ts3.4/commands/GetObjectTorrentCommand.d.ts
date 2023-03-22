import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  WithSdkStreamMixin as __WithSdkStreamMixin,
} from "@aws-sdk/types";
import {
  GetObjectTorrentOutput,
  GetObjectTorrentRequest,
} from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface GetObjectTorrentCommandInput extends GetObjectTorrentRequest {}
export interface GetObjectTorrentCommandOutput
  extends __WithSdkStreamMixin<GetObjectTorrentOutput, "Body">,
    __MetadataBearer {}
export declare class GetObjectTorrentCommand extends $Command<
  GetObjectTorrentCommandInput,
  GetObjectTorrentCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: GetObjectTorrentCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetObjectTorrentCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetObjectTorrentCommandInput, GetObjectTorrentCommandOutput>;
  private serialize;
  private deserialize;
}
import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { DeletePublicAccessBlockRequest } from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface DeletePublicAccessBlockCommandInput
  extends DeletePublicAccessBlockRequest {}
export interface DeletePublicAccessBlockCommandOutput
  extends __MetadataBearer {}
export declare class DeletePublicAccessBlockCommand extends $Command<
  DeletePublicAccessBlockCommandInput,
  DeletePublicAccessBlockCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: DeletePublicAccessBlockCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeletePublicAccessBlockCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeletePublicAccessBlockCommandInput,
    DeletePublicAccessBlockCommandOutput
  >;
  private serialize;
  private deserialize;
}

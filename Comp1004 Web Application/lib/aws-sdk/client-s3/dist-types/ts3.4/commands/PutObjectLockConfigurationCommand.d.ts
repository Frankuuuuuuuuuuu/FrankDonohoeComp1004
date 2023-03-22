import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import {
  PutObjectLockConfigurationOutput,
  PutObjectLockConfigurationRequest,
} from "../models/models_0";
import {
  S3ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../S3Client";
export interface PutObjectLockConfigurationCommandInput
  extends PutObjectLockConfigurationRequest {}
export interface PutObjectLockConfigurationCommandOutput
  extends PutObjectLockConfigurationOutput,
    __MetadataBearer {}
export declare class PutObjectLockConfigurationCommand extends $Command<
  PutObjectLockConfigurationCommandInput,
  PutObjectLockConfigurationCommandOutput,
  S3ClientResolvedConfig
> {
  readonly input: PutObjectLockConfigurationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutObjectLockConfigurationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutObjectLockConfigurationCommandInput,
    PutObjectLockConfigurationCommandOutput
  >;
  private serialize;
  private deserialize;
}
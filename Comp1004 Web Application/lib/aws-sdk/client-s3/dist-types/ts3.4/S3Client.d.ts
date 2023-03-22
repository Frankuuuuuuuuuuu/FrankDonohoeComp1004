import {
  RegionInputConfig,
  RegionResolvedConfig,
} from "@aws-sdk/config-resolver";
import {
  EventStreamSerdeInputConfig,
  EventStreamSerdeResolvedConfig,
} from "@aws-sdk/eventstream-serde-config-resolver";
import {
  EndpointInputConfig,
  EndpointResolvedConfig,
} from "@aws-sdk/middleware-endpoint";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
} from "@aws-sdk/middleware-retry";
import { S3InputConfig, S3ResolvedConfig } from "@aws-sdk/middleware-sdk-s3";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EventStreamSerdeProvider as __EventStreamSerdeProvider,
  GetAwsChunkedEncodingStream,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  SdkStreamMixinInjector as __SdkStreamMixinInjector,
  StreamCollector as __StreamCollector,
  StreamHasher as __StreamHasher,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";
import { Readable } from "stream";
import {
  AbortMultipartUploadCommandInput,
  AbortMultipartUploadCommandOutput,
} from "./commands/AbortMultipartUploadCommand";
import {
  CompleteMultipartUploadCommandInput,
  CompleteMultipartUploadCommandOutput,
} from "./commands/CompleteMultipartUploadCommand";
import {
  CopyObjectCommandInput,
  CopyObjectCommandOutput,
} from "./commands/CopyObjectCommand";
import {
  CreateBucketCommandInput,
  CreateBucketCommandOutput,
} from "./commands/CreateBucketCommand";
import {
  CreateMultipartUploadCommandInput,
  CreateMultipartUploadCommandOutput,
} from "./commands/CreateMultipartUploadCommand";
import {
  DeleteBucketAnalyticsConfigurationCommandInput,
  DeleteBucketAnalyticsConfigurationCommandOutput,
} from "./commands/DeleteBucketAnalyticsConfigurationCommand";
import {
  DeleteBucketCommandInput,
  DeleteBucketCommandOutput,
} from "./commands/DeleteBucketCommand";
import {
  DeleteBucketCorsCommandInput,
  DeleteBucketCorsCommandOutput,
} from "./commands/DeleteBucketCorsCommand";
import {
  DeleteBucketEncryptionCommandInput,
  DeleteBucketEncryptionCommandOutput,
} from "./commands/DeleteBucketEncryptionCommand";
import {
  DeleteBucketIntelligentTieringConfigurationCommandInput,
  DeleteBucketIntelligentTieringConfigurationCommandOutput,
} from "./commands/DeleteBucketIntelligentTieringConfigurationCommand";
import {
  DeleteBucketInventoryConfigurationCommandInput,
  DeleteBucketInventoryConfigurationCommandOutput,
} from "./commands/DeleteBucketInventoryConfigurationCommand";
import {
  DeleteBucketLifecycleCommandInput,
  DeleteBucketLifecycleCommandOutput,
} from "./commands/DeleteBucketLifecycleCommand";
import {
  DeleteBucketMetricsConfigurationCommandInput,
  DeleteBucketMetricsConfigurationCommandOutput,
} from "./commands/DeleteBucketMetricsConfigurationCommand";
import {
  DeleteBucketOwnershipControlsCommandInput,
  DeleteBucketOwnershipControlsCommandOutput,
} from "./commands/DeleteBucketOwnershipControlsCommand";
import {
  DeleteBucketPolicyCommandInput,
  DeleteBucketPolicyCommandOutput,
} from "./commands/DeleteBucketPolicyCommand";
import {
  DeleteBucketReplicationCommandInput,
  DeleteBucketReplicationCommandOutput,
} from "./commands/DeleteBucketReplicationCommand";
import {
  DeleteBucketTaggingCommandInput,
  DeleteBucketTaggingCommandOutput,
} from "./commands/DeleteBucketTaggingCommand";
import {
  DeleteBucketWebsiteCommandInput,
  DeleteBucketWebsiteCommandOutput,
} from "./commands/DeleteBucketWebsiteCommand";
import {
  DeleteObjectCommandInput,
  DeleteObjectCommandOutput,
} from "./commands/DeleteObjectCommand";
import {
  DeleteObjectsCommandInput,
  DeleteObjectsCommandOutput,
} from "./commands/DeleteObjectsCommand";
import {
  DeleteObjectTaggingCommandInput,
  DeleteObjectTaggingCommandOutput,
} from "./commands/DeleteObjectTaggingCommand";
import {
  DeletePublicAccessBlockCommandInput,
  DeletePublicAccessBlockCommandOutput,
} from "./commands/DeletePublicAccessBlockCommand";
import {
  GetBucketAccelerateConfigurationCommandInput,
  GetBucketAccelerateConfigurationCommandOutput,
} from "./commands/GetBucketAccelerateConfigurationCommand";
import {
  GetBucketAclCommandInput,
  GetBucketAclCommandOutput,
} from "./commands/GetBucketAclCommand";
import {
  GetBucketAnalyticsConfigurationCommandInput,
  GetBucketAnalyticsConfigurationCommandOutput,
} from "./commands/GetBucketAnalyticsConfigurationCommand";
import {
  GetBucketCorsCommandInput,
  GetBucketCorsCommandOutput,
} from "./commands/GetBucketCorsCommand";
import {
  GetBucketEncryptionCommandInput,
  GetBucketEncryptionCommandOutput,
} from "./commands/GetBucketEncryptionCommand";
import {
  GetBucketIntelligentTieringConfigurationCommandInput,
  GetBucketIntelligentTieringConfigurationCommandOutput,
} from "./commands/GetBucketIntelligentTieringConfigurationCommand";
import {
  GetBucketInventoryConfigurationCommandInput,
  GetBucketInventoryConfigurationCommandOutput,
} from "./commands/GetBucketInventoryConfigurationCommand";
import {
  GetBucketLifecycleConfigurationCommandInput,
  GetBucketLifecycleConfigurationCommandOutput,
} from "./commands/GetBucketLifecycleConfigurationCommand";
import {
  GetBucketLocationCommandInput,
  GetBucketLocationCommandOutput,
} from "./commands/GetBucketLocationCommand";
import {
  GetBucketLoggingCommandInput,
  GetBucketLoggingCommandOutput,
} from "./commands/GetBucketLoggingCommand";
import {
  GetBucketMetricsConfigurationCommandInput,
  GetBucketMetricsConfigurationCommandOutput,
} from "./commands/GetBucketMetricsConfigurationCommand";
import {
  GetBucketNotificationConfigurationCommandInput,
  GetBucketNotificationConfigurationCommandOutput,
} from "./commands/GetBucketNotificationConfigurationCommand";
import {
  GetBucketOwnershipControlsCommandInput,
  GetBucketOwnershipControlsCommandOutput,
} from "./commands/GetBucketOwnershipControlsCommand";
import {
  GetBucketPolicyCommandInput,
  GetBucketPolicyCommandOutput,
} from "./commands/GetBucketPolicyCommand";
import {
  GetBucketPolicyStatusCommandInput,
  GetBucketPolicyStatusCommandOutput,
} from "./commands/GetBucketPolicyStatusCommand";
import {
  GetBucketReplicationCommandInput,
  GetBucketReplicationCommandOutput,
} from "./commands/GetBucketReplicationCommand";
import {
  GetBucketRequestPaymentCommandInput,
  GetBucketRequestPaymentCommandOutput,
} from "./commands/GetBucketRequestPaymentCommand";
import {
  GetBucketTaggingCommandInput,
  GetBucketTaggingCommandOutput,
} from "./commands/GetBucketTaggingCommand";
import {
  GetBucketVersioningCommandInput,
  GetBucketVersioningCommandOutput,
} from "./commands/GetBucketVersioningCommand";
import {
  GetBucketWebsiteCommandInput,
  GetBucketWebsiteCommandOutput,
} from "./commands/GetBucketWebsiteCommand";
import {
  GetObjectAclCommandInput,
  GetObjectAclCommandOutput,
} from "./commands/GetObjectAclCommand";
import {
  GetObjectAttributesCommandInput,
  GetObjectAttributesCommandOutput,
} from "./commands/GetObjectAttributesCommand";
import {
  GetObjectCommandInput,
  GetObjectCommandOutput,
} from "./commands/GetObjectCommand";
import {
  GetObjectLegalHoldCommandInput,
  GetObjectLegalHoldCommandOutput,
} from "./commands/GetObjectLegalHoldCommand";
import {
  GetObjectLockConfigurationCommandInput,
  GetObjectLockConfigurationCommandOutput,
} from "./commands/GetObjectLockConfigurationCommand";
import {
  GetObjectRetentionCommandInput,
  GetObjectRetentionCommandOutput,
} from "./commands/GetObjectRetentionCommand";
import {
  GetObjectTaggingCommandInput,
  GetObjectTaggingCommandOutput,
} from "./commands/GetObjectTaggingCommand";
import {
  GetObjectTorrentCommandInput,
  GetObjectTorrentCommandOutput,
} from "./commands/GetObjectTorrentCommand";
import {
  GetPublicAccessBlockCommandInput,
  GetPublicAccessBlockCommandOutput,
} from "./commands/GetPublicAccessBlockCommand";
import {
  HeadBucketCommandInput,
  HeadBucketCommandOutput,
} from "./commands/HeadBucketCommand";
import {
  HeadObjectCommandInput,
  HeadObjectCommandOutput,
} from "./commands/HeadObjectCommand";
import {
  ListBucketAnalyticsConfigurationsCommandInput,
  ListBucketAnalyticsConfigurationsCommandOutput,
} from "./commands/ListBucketAnalyticsConfigurationsCommand";
import {
  ListBucketIntelligentTieringConfigurationsCommandInput,
  ListBucketIntelligentTieringConfigurationsCommandOutput,
} from "./commands/ListBucketIntelligentTieringConfigurationsCommand";
import {
  ListBucketInventoryConfigurationsCommandInput,
  ListBucketInventoryConfigurationsCommandOutput,
} from "./commands/ListBucketInventoryConfigurationsCommand";
import {
  ListBucketMetricsConfigurationsCommandInput,
  ListBucketMetricsConfigurationsCommandOutput,
} from "./commands/ListBucketMetricsConfigurationsCommand";
import {
  ListBucketsCommandInput,
  ListBucketsCommandOutput,
} from "./commands/ListBucketsCommand";
import {
  ListMultipartUploadsCommandInput,
  ListMultipartUploadsCommandOutput,
} from "./commands/ListMultipartUploadsCommand";
import {
  ListObjectsCommandInput,
  ListObjectsCommandOutput,
} from "./commands/ListObjectsCommand";
import {
  ListObjectsV2CommandInput,
  ListObjectsV2CommandOutput,
} from "./commands/ListObjectsV2Command";
import {
  ListObjectVersionsCommandInput,
  ListObjectVersionsCommandOutput,
} from "./commands/ListObjectVersionsCommand";
import {
  ListPartsCommandInput,
  ListPartsCommandOutput,
} from "./commands/ListPartsCommand";
import {
  PutBucketAccelerateConfigurationCommandInput,
  PutBucketAccelerateConfigurationCommandOutput,
} from "./commands/PutBucketAccelerateConfigurationCommand";
import {
  PutBucketAclCommandInput,
  PutBucketAclCommandOutput,
} from "./commands/PutBucketAclCommand";
import {
  PutBucketAnalyticsConfigurationCommandInput,
  PutBucketAnalyticsConfigurationCommandOutput,
} from "./commands/PutBucketAnalyticsConfigurationCommand";
import {
  PutBucketCorsCommandInput,
  PutBucketCorsCommandOutput,
} from "./commands/PutBucketCorsCommand";
import {
  PutBucketEncryptionCommandInput,
  PutBucketEncryptionCommandOutput,
} from "./commands/PutBucketEncryptionCommand";
import {
  PutBucketIntelligentTieringConfigurationCommandInput,
  PutBucketIntelligentTieringConfigurationCommandOutput,
} from "./commands/PutBucketIntelligentTieringConfigurationCommand";
import {
  PutBucketInventoryConfigurationCommandInput,
  PutBucketInventoryConfigurationCommandOutput,
} from "./commands/PutBucketInventoryConfigurationCommand";
import {
  PutBucketLifecycleConfigurationCommandInput,
  PutBucketLifecycleConfigurationCommandOutput,
} from "./commands/PutBucketLifecycleConfigurationCommand";
import {
  PutBucketLoggingCommandInput,
  PutBucketLoggingCommandOutput,
} from "./commands/PutBucketLoggingCommand";
import {
  PutBucketMetricsConfigurationCommandInput,
  PutBucketMetricsConfigurationCommandOutput,
} from "./commands/PutBucketMetricsConfigurationCommand";
import {
  PutBucketNotificationConfigurationCommandInput,
  PutBucketNotificationConfigurationCommandOutput,
} from "./commands/PutBucketNotificationConfigurationCommand";
import {
  PutBucketOwnershipControlsCommandInput,
  PutBucketOwnershipControlsCommandOutput,
} from "./commands/PutBucketOwnershipControlsCommand";
import {
  PutBucketPolicyCommandInput,
  PutBucketPolicyCommandOutput,
} from "./commands/PutBucketPolicyCommand";
import {
  PutBucketReplicationCommandInput,
  PutBucketReplicationCommandOutput,
} from "./commands/PutBucketReplicationCommand";
import {
  PutBucketRequestPaymentCommandInput,
  PutBucketRequestPaymentCommandOutput,
} from "./commands/PutBucketRequestPaymentCommand";
import {
  PutBucketTaggingCommandInput,
  PutBucketTaggingCommandOutput,
} from "./commands/PutBucketTaggingCommand";
import {
  PutBucketVersioningCommandInput,
  PutBucketVersioningCommandOutput,
} from "./commands/PutBucketVersioningCommand";
import {
  PutBucketWebsiteCommandInput,
  PutBucketWebsiteCommandOutput,
} from "./commands/PutBucketWebsiteCommand";
import {
  PutObjectAclCommandInput,
  PutObjectAclCommandOutput,
} from "./commands/PutObjectAclCommand";
import {
  PutObjectCommandInput,
  PutObjectCommandOutput,
} from "./commands/PutObjectCommand";
import {
  PutObjectLegalHoldCommandInput,
  PutObjectLegalHoldCommandOutput,
} from "./commands/PutObjectLegalHoldCommand";
import {
  PutObjectLockConfigurationCommandInput,
  PutObjectLockConfigurationCommandOutput,
} from "./commands/PutObjectLockConfigurationCommand";
import {
  PutObjectRetentionCommandInput,
  PutObjectRetentionCommandOutput,
} from "./commands/PutObjectRetentionCommand";
import {
  PutObjectTaggingCommandInput,
  PutObjectTaggingCommandOutput,
} from "./commands/PutObjectTaggingCommand";
import {
  PutPublicAccessBlockCommandInput,
  PutPublicAccessBlockCommandOutput,
} from "./commands/PutPublicAccessBlockCommand";
import {
  RestoreObjectCommandInput,
  RestoreObjectCommandOutput,
} from "./commands/RestoreObjectCommand";
import {
  SelectObjectContentCommandInput,
  SelectObjectContentCommandOutput,
} from "./commands/SelectObjectContentCommand";
import {
  UploadPartCommandInput,
  UploadPartCommandOutput,
} from "./commands/UploadPartCommand";
import {
  UploadPartCopyCommandInput,
  UploadPartCopyCommandOutput,
} from "./commands/UploadPartCopyCommand";
import {
  WriteGetObjectResponseCommandInput,
  WriteGetObjectResponseCommandOutput,
} from "./commands/WriteGetObjectResponseCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
} from "./endpoint/EndpointParameters";
export type ServiceInputTypes =
  | AbortMultipartUploadCommandInput
  | CompleteMultipartUploadCommandInput
  | CopyObjectCommandInput
  | CreateBucketCommandInput
  | CreateMultipartUploadCommandInput
  | DeleteBucketAnalyticsConfigurationCommandInput
  | DeleteBucketCommandInput
  | DeleteBucketCorsCommandInput
  | DeleteBucketEncryptionCommandInput
  | DeleteBucketIntelligentTieringConfigurationCommandInput
  | DeleteBucketInventoryConfigurationCommandInput
  | DeleteBucketLifecycleCommandInput
  | DeleteBucketMetricsConfigurationCommandInput
  | DeleteBucketOwnershipControlsCommandInput
  | DeleteBucketPolicyCommandInput
  | DeleteBucketReplicationCommandInput
  | DeleteBucketTaggingCommandInput
  | DeleteBucketWebsiteCommandInput
  | DeleteObjectCommandInput
  | DeleteObjectTaggingCommandInput
  | DeleteObjectsCommandInput
  | DeletePublicAccessBlockCommandInput
  | GetBucketAccelerateConfigurationCommandInput
  | GetBucketAclCommandInput
  | GetBucketAnalyticsConfigurationCommandInput
  | GetBucketCorsCommandInput
  | GetBucketEncryptionCommandInput
  | GetBucketIntelligentTieringConfigurationCommandInput
  | GetBucketInventoryConfigurationCommandInput
  | GetBucketLifecycleConfigurationCommandInput
  | GetBucketLocationCommandInput
  | GetBucketLoggingCommandInput
  | GetBucketMetricsConfigurationCommandInput
  | GetBucketNotificationConfigurationCommandInput
  | GetBucketOwnershipControlsCommandInput
  | GetBucketPolicyCommandInput
  | GetBucketPolicyStatusCommandInput
  | GetBucketReplicationCommandInput
  | GetBucketRequestPaymentCommandInput
  | GetBucketTaggingCommandInput
  | GetBucketVersioningCommandInput
  | GetBucketWebsiteCommandInput
  | GetObjectAclCommandInput
  | GetObjectAttributesCommandInput
  | GetObjectCommandInput
  | GetObjectLegalHoldCommandInput
  | GetObjectLockConfigurationCommandInput
  | GetObjectRetentionCommandInput
  | GetObjectTaggingCommandInput
  | GetObjectTorrentCommandInput
  | GetPublicAccessBlockCommandInput
  | HeadBucketCommandInput
  | HeadObjectCommandInput
  | ListBucketAnalyticsConfigurationsCommandInput
  | ListBucketIntelligentTieringConfigurationsCommandInput
  | ListBucketInventoryConfigurationsCommandInput
  | ListBucketMetricsConfigurationsCommandInput
  | ListBucketsCommandInput
  | ListMultipartUploadsCommandInput
  | ListObjectVersionsCommandInput
  | ListObjectsCommandInput
  | ListObjectsV2CommandInput
  | ListPartsCommandInput
  | PutBucketAccelerateConfigurationCommandInput
  | PutBucketAclCommandInput
  | PutBucketAnalyticsConfigurationCommandInput
  | PutBucketCorsCommandInput
  | PutBucketEncryptionCommandInput
  | PutBucketIntelligentTieringConfigurationCommandInput
  | PutBucketInventoryConfigurationCommandInput
  | PutBucketLifecycleConfigurationCommandInput
  | PutBucketLoggingCommandInput
  | PutBucketMetricsConfigurationCommandInput
  | PutBucketNotificationConfigurationCommandInput
  | PutBucketOwnershipControlsCommandInput
  | PutBucketPolicyCommandInput
  | PutBucketReplicationCommandInput
  | PutBucketRequestPaymentCommandInput
  | PutBucketTaggingCommandInput
  | PutBucketVersioningCommandInput
  | PutBucketWebsiteCommandInput
  | PutObjectAclCommandInput
  | PutObjectCommandInput
  | PutObjectLegalHoldCommandInput
  | PutObjectLockConfigurationCommandInput
  | PutObjectRetentionCommandInput
  | PutObjectTaggingCommandInput
  | PutPublicAccessBlockCommandInput
  | RestoreObjectCommandInput
  | SelectObjectContentCommandInput
  | UploadPartCommandInput
  | UploadPartCopyCommandInput
  | WriteGetObjectResponseCommandInput;
export type ServiceOutputTypes =
  | AbortMultipartUploadCommandOutput
  | CompleteMultipartUploadCommandOutput
  | CopyObjectCommandOutput
  | CreateBucketCommandOutput
  | CreateMultipartUploadCommandOutput
  | DeleteBucketAnalyticsConfigurationCommandOutput
  | DeleteBucketCommandOutput
  | DeleteBucketCorsCommandOutput
  | DeleteBucketEncryptionCommandOutput
  | DeleteBucketIntelligentTieringConfigurationCommandOutput
  | DeleteBucketInventoryConfigurationCommandOutput
  | DeleteBucketLifecycleCommandOutput
  | DeleteBucketMetricsConfigurationCommandOutput
  | DeleteBucketOwnershipControlsCommandOutput
  | DeleteBucketPolicyCommandOutput
  | DeleteBucketReplicationCommandOutput
  | DeleteBucketTaggingCommandOutput
  | DeleteBucketWebsiteCommandOutput
  | DeleteObjectCommandOutput
  | DeleteObjectTaggingCommandOutput
  | DeleteObjectsCommandOutput
  | DeletePublicAccessBlockCommandOutput
  | GetBucketAccelerateConfigurationCommandOutput
  | GetBucketAclCommandOutput
  | GetBucketAnalyticsConfigurationCommandOutput
  | GetBucketCorsCommandOutput
  | GetBucketEncryptionCommandOutput
  | GetBucketIntelligentTieringConfigurationCommandOutput
  | GetBucketInventoryConfigurationCommandOutput
  | GetBucketLifecycleConfigurationCommandOutput
  | GetBucketLocationCommandOutput
  | GetBucketLoggingCommandOutput
  | GetBucketMetricsConfigurationCommandOutput
  | GetBucketNotificationConfigurationCommandOutput
  | GetBucketOwnershipControlsCommandOutput
  | GetBucketPolicyCommandOutput
  | GetBucketPolicyStatusCommandOutput
  | GetBucketReplicationCommandOutput
  | GetBucketRequestPaymentCommandOutput
  | GetBucketTaggingCommandOutput
  | GetBucketVersioningCommandOutput
  | GetBucketWebsiteCommandOutput
  | GetObjectAclCommandOutput
  | GetObjectAttributesCommandOutput
  | GetObjectCommandOutput
  | GetObjectLegalHoldCommandOutput
  | GetObjectLockConfigurationCommandOutput
  | GetObjectRetentionCommandOutput
  | GetObjectTaggingCommandOutput
  | GetObjectTorrentCommandOutput
  | GetPublicAccessBlockCommandOutput
  | HeadBucketCommandOutput
  | HeadObjectCommandOutput
  | ListBucketAnalyticsConfigurationsCommandOutput
  | ListBucketIntelligentTieringConfigurationsCommandOutput
  | ListBucketInventoryConfigurationsCommandOutput
  | ListBucketMetricsConfigurationsCommandOutput
  | ListBucketsCommandOutput
  | ListMultipartUploadsCommandOutput
  | ListObjectVersionsCommandOutput
  | ListObjectsCommandOutput
  | ListObjectsV2CommandOutput
  | ListPartsCommandOutput
  | PutBucketAccelerateConfigurationCommandOutput
  | PutBucketAclCommandOutput
  | PutBucketAnalyticsConfigurationCommandOutput
  | PutBucketCorsCommandOutput
  | PutBucketEncryptionCommandOutput
  | PutBucketIntelligentTieringConfigurationCommandOutput
  | PutBucketInventoryConfigurationCommandOutput
  | PutBucketLifecycleConfigurationCommandOutput
  | PutBucketLoggingCommandOutput
  | PutBucketMetricsConfigurationCommandOutput
  | PutBucketNotificationConfigurationCommandOutput
  | PutBucketOwnershipControlsCommandOutput
  | PutBucketPolicyCommandOutput
  | PutBucketReplicationCommandOutput
  | PutBucketRequestPaymentCommandOutput
  | PutBucketTaggingCommandOutput
  | PutBucketVersioningCommandOutput
  | PutBucketWebsiteCommandOutput
  | PutObjectAclCommandOutput
  | PutObjectCommandOutput
  | PutObjectLegalHoldCommandOutput
  | PutObjectLockConfigurationCommandOutput
  | PutObjectRetentionCommandOutput
  | PutObjectTaggingCommandOutput
  | PutPublicAccessBlockCommandOutput
  | RestoreObjectCommandOutput
  | SelectObjectContentCommandOutput
  | UploadPartCommandOutput
  | UploadPartCopyCommandOutput
  | WriteGetObjectResponseCommandOutput;
export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  requestHandler?: __HttpHandler;
  sha256?: __ChecksumConstructor | __HashConstructor;
  urlParser?: __UrlParser;
  bodyLengthChecker?: __BodyLengthCalculator;
  streamCollector?: __StreamCollector;
  base64Decoder?: __Decoder;
  base64Encoder?: __Encoder;
  utf8Decoder?: __Decoder;
  utf8Encoder?: __Encoder;
  runtime?: string;
  disableHostPrefix?: boolean;
  serviceId?: string;
  useDualstackEndpoint?: boolean | __Provider<boolean>;
  useFipsEndpoint?: boolean | __Provider<boolean>;
  region?: string | __Provider<string>;
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;
  signingEscapePath?: boolean;
  useArnRegion?: boolean | Provider<boolean>;
  defaultUserAgentProvider?: Provider<__UserAgent>;
  streamHasher?: __StreamHasher<Readable> | __StreamHasher<Blob>;
  md5?: __ChecksumConstructor | __HashConstructor;
  sha1?: __ChecksumConstructor | __HashConstructor;
  getAwsChunkedEncodingStream?: GetAwsChunkedEncodingStream;
  maxAttempts?: number | __Provider<number>;
  retryMode?: string | __Provider<string>;
  logger?: __Logger;
  eventStreamSerdeProvider?: __EventStreamSerdeProvider;
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
  sdkStreamMixin?: __SdkStreamMixinInjector;
}
type S3ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  S3InputConfig &
  UserAgentInputConfig &
  EventStreamSerdeInputConfig &
  ClientInputEndpointParameters;
export interface S3ClientConfig extends S3ClientConfigType {}
type S3ClientResolvedConfigType =
  __SmithyResolvedConfiguration<__HttpHandlerOptions> &
    Required<ClientDefaults> &
    RegionResolvedConfig &
    EndpointResolvedConfig<EndpointParameters> &
    RetryResolvedConfig &
    HostHeaderResolvedConfig &
    AwsAuthResolvedConfig &
    S3ResolvedConfig &
    UserAgentResolvedConfig &
    EventStreamSerdeResolvedConfig &
    ClientResolvedEndpointParameters;
export interface S3ClientResolvedConfig extends S3ClientResolvedConfigType {}
export declare class S3Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  S3ClientResolvedConfig
> {
  readonly config: S3ClientResolvedConfig;
  constructor(configuration: S3ClientConfig);
  destroy(): void;
}
export {};
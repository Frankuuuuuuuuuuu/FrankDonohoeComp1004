import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { Readable } from "stream";
import { S3ServiceException as __BaseException } from "./S3ServiceException";
export interface AbortIncompleteMultipartUpload {
  DaysAfterInitiation?: number;
}
export declare enum RequestCharged {
  requester = "requester",
}
export interface AbortMultipartUploadOutput {
  RequestCharged?: RequestCharged | string;
}
export declare enum RequestPayer {
  requester = "requester",
}
export interface AbortMultipartUploadRequest {
  Bucket: string | undefined;
  Key: string | undefined;
  UploadId: string | undefined;
  RequestPayer?: RequestPayer | string;
  ExpectedBucketOwner?: string;
}
export declare class NoSuchUpload extends __BaseException {
  readonly name: "NoSuchUpload";
  readonly $fault: "client";
  constructor(opts: __ExceptionOptionType<NoSuchUpload, __BaseException>);
}
export declare enum BucketAccelerateStatus {
  Enabled = "Enabled",
  Suspended = "Suspended",
}
export interface AccelerateConfiguration {
  Status?: BucketAccelerateStatus | string;
}
export declare enum Type {
  AmazonCustomerByEmail = "AmazonCustomerByEmail",
  CanonicalUser = "CanonicalUser",
  Group = "Group",
}
export interface Grantee {
  DisplayName?: string;
  EmailAddress?: string;
  ID?: string;
  URI?: string;
  Type: Type | string | undefined;
}
export declare enum Permission {
  FULL_CONTROL = "FULL_CONTROL",
  READ = "READ",
  READ_ACP = "READ_ACP",
  WRITE = "WRITE",
  WRITE_ACP = "WRITE_ACP",
}
export interface Grant {
  Grantee?: Grantee;
  Permission?: Permission | string;
}
export interface Owner {
  DisplayName?: string;
  ID?: string;
}
export interface AccessControlPolicy {
  Grants?: Grant[];
  Owner?: Owner;
}
export declare enum OwnerOverride {
  Destination = "Destination",
}
export interface AccessControlTranslation {
  Owner: OwnerOverride | string | undefined;
}
export declare enum ServerSideEncryption {
  AES256 = "AES256",
  aws_kms = "aws:kms",
}
export interface CompleteMultipartUploadOutput {
  Location?: string;
  Bucket?: string;
  Key?: string;
  Expiration?: string;
  ETag?: string;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
  ServerSideEncryption?: ServerSideEncryption | string;
  VersionId?: string;
  SSEKMSKeyId?: string;
  BucketKeyEnabled?: boolean;
  RequestCharged?: RequestCharged | string;
}
export interface CompletedPart {
  ETag?: string;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
  PartNumber?: number;
}
export interface CompletedMultipartUpload {
  Parts?: CompletedPart[];
}
export interface CompleteMultipartUploadRequest {
  Bucket: string | undefined;
  Key: string | undefined;
  MultipartUpload?: CompletedMultipartUpload;
  UploadId: string | undefined;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
  RequestPayer?: RequestPayer | string;
  ExpectedBucketOwner?: string;
  SSECustomerAlgorithm?: string;
  SSECustomerKey?: string;
  SSECustomerKeyMD5?: string;
}
export interface CopyObjectResult {
  ETag?: string;
  LastModified?: Date;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
}
export interface CopyObjectOutput {
  CopyObjectResult?: CopyObjectResult;
  Expiration?: string;
  CopySourceVersionId?: string;
  VersionId?: string;
  ServerSideEncryption?: ServerSideEncryption | string;
  SSECustomerAlgorithm?: string;
  SSECustomerKeyMD5?: string;
  SSEKMSKeyId?: string;
  SSEKMSEncryptionContext?: string;
  BucketKeyEnabled?: boolean;
  RequestCharged?: RequestCharged | string;
}
export declare enum ObjectCannedACL {
  authenticated_read = "authenticated-read",
  aws_exec_read = "aws-exec-read",
  bucket_owner_full_control = "bucket-owner-full-control",
  bucket_owner_read = "bucket-owner-read",
  private = "private",
  public_read = "public-read",
  public_read_write = "public-read-write",
}
export declare enum ChecksumAlgorithm {
  CRC32 = "CRC32",
  CRC32C = "CRC32C",
  SHA1 = "SHA1",
  SHA256 = "SHA256",
}
export declare enum MetadataDirective {
  COPY = "COPY",
  REPLACE = "REPLACE",
}
export declare enum ObjectLockLegalHoldStatus {
  OFF = "OFF",
  ON = "ON",
}
export declare enum ObjectLockMode {
  COMPLIANCE = "COMPLIANCE",
  GOVERNANCE = "GOVERNANCE",
}
export declare enum StorageClass {
  DEEP_ARCHIVE = "DEEP_ARCHIVE",
  GLACIER = "GLACIER",
  GLACIER_IR = "GLACIER_IR",
  INTELLIGENT_TIERING = "INTELLIGENT_TIERING",
  ONEZONE_IA = "ONEZONE_IA",
  OUTPOSTS = "OUTPOSTS",
  REDUCED_REDUNDANCY = "REDUCED_REDUNDANCY",
  STANDARD = "STANDARD",
  STANDARD_IA = "STANDARD_IA",
}
export declare enum TaggingDirective {
  COPY = "COPY",
  REPLACE = "REPLACE",
}
export interface CopyObjectRequest {
  ACL?: ObjectCannedACL | string;
  Bucket: string | undefined;
  CacheControl?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
  ContentDisposition?: string;
  ContentEncoding?: string;
  ContentLanguage?: string;
  ContentType?: string;
  CopySource: string | undefined;
  CopySourceIfMatch?: string;
  CopySourceIfModifiedSince?: Date;
  CopySourceIfNoneMatch?: string;
  CopySourceIfUnmodifiedSince?: Date;
  Expires?: Date;
  GrantFullControl?: string;
  GrantRead?: string;
  GrantReadACP?: string;
  GrantWriteACP?: string;
  Key: string | undefined;
  Metadata?: Record<string, string>;
  MetadataDirective?: MetadataDirective | string;
  TaggingDirective?: TaggingDirective | string;
  ServerSideEncryption?: ServerSideEncryption | string;
  StorageClass?: StorageClass | string;
  WebsiteRedirectLocation?: string;
  SSECustomerAlgorithm?: string;
  SSECustomerKey?: string;
  SSECustomerKeyMD5?: string;
  SSEKMSKeyId?: string;
  SSEKMSEncryptionContext?: string;
  BucketKeyEnabled?: boolean;
  CopySourceSSECustomerAlgorithm?: string;
  CopySourceSSECustomerKey?: string;
  CopySourceSSECustomerKeyMD5?: string;
  RequestPayer?: RequestPayer | string;
  Tagging?: string;
  ObjectLockMode?: ObjectLockMode | string;
  ObjectLockRetainUntilDate?: Date;
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;
  ExpectedBucketOwner?: string;
  ExpectedSourceBucketOwner?: string;
}
export declare class ObjectNotInActiveTierError extends __BaseException {
  readonly name: "ObjectNotInActiveTierError";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<ObjectNotInActiveTierError, __BaseException>
  );
}
export declare class BucketAlreadyExists extends __BaseException {
  readonly name: "BucketAlreadyExists";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<BucketAlreadyExists, __BaseException>
  );
}
export declare class BucketAlreadyOwnedByYou extends __BaseException {
  readonly name: "BucketAlreadyOwnedByYou";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<BucketAlreadyOwnedByYou, __BaseException>
  );
}
export interface CreateBucketOutput {
  Location?: string;
}
export declare enum BucketCannedACL {
  authenticated_read = "authenticated-read",
  private = "private",
  public_read = "public-read",
  public_read_write = "public-read-write",
}
export declare enum BucketLocationConstraint {
  EU = "EU",
  af_south_1 = "af-south-1",
  ap_east_1 = "ap-east-1",
  ap_northeast_1 = "ap-northeast-1",
  ap_northeast_2 = "ap-northeast-2",
  ap_northeast_3 = "ap-northeast-3",
  ap_south_1 = "ap-south-1",
  ap_southeast_1 = "ap-southeast-1",
  ap_southeast_2 = "ap-southeast-2",
  ap_southeast_3 = "ap-southeast-3",
  ca_central_1 = "ca-central-1",
  cn_north_1 = "cn-north-1",
  cn_northwest_1 = "cn-northwest-1",
  eu_central_1 = "eu-central-1",
  eu_north_1 = "eu-north-1",
  eu_south_1 = "eu-south-1",
  eu_west_1 = "eu-west-1",
  eu_west_2 = "eu-west-2",
  eu_west_3 = "eu-west-3",
  me_south_1 = "me-south-1",
  sa_east_1 = "sa-east-1",
  us_east_2 = "us-east-2",
  us_gov_east_1 = "us-gov-east-1",
  us_gov_west_1 = "us-gov-west-1",
  us_west_1 = "us-west-1",
  us_west_2 = "us-west-2",
}
export interface CreateBucketConfiguration {
  LocationConstraint?: BucketLocationConstraint | string;
}
export declare enum ObjectOwnership {
  BucketOwnerEnforced = "BucketOwnerEnforced",
  BucketOwnerPreferred = "BucketOwnerPreferred",
  ObjectWriter = "ObjectWriter",
}
export interface CreateBucketRequest {
  ACL?: BucketCannedACL | string;
  Bucket: string | undefined;
  CreateBucketConfiguration?: CreateBucketConfiguration;
  GrantFullControl?: string;
  GrantRead?: string;
  GrantReadACP?: string;
  GrantWrite?: string;
  GrantWriteACP?: string;
  ObjectLockEnabledForBucket?: boolean;
  ObjectOwnership?: ObjectOwnership | string;
}
export interface CreateMultipartUploadOutput {
  AbortDate?: Date;
  AbortRuleId?: string;
  Bucket?: string;
  Key?: string;
  UploadId?: string;
  ServerSideEncryption?: ServerSideEncryption | string;
  SSECustomerAlgorithm?: string;
  SSECustomerKeyMD5?: string;
  SSEKMSKeyId?: string;
  SSEKMSEncryptionContext?: string;
  BucketKeyEnabled?: boolean;
  RequestCharged?: RequestCharged | string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
}
export interface CreateMultipartUploadRequest {
  ACL?: ObjectCannedACL | string;
  Bucket: string | undefined;
  CacheControl?: string;
  ContentDisposition?: string;
  ContentEncoding?: string;
  ContentLanguage?: string;
  ContentType?: string;
  Expires?: Date;
  GrantFullControl?: string;
  GrantRead?: string;
  GrantReadACP?: string;
  GrantWriteACP?: string;
  Key: string | undefined;
  Metadata?: Record<string, string>;
  ServerSideEncryption?: ServerSideEncryption | string;
  StorageClass?: StorageClass | string;
  WebsiteRedirectLocation?: string;
  SSECustomerAlgorithm?: string;
  SSECustomerKey?: string;
  SSECustomerKeyMD5?: string;
  SSEKMSKeyId?: string;
  SSEKMSEncryptionContext?: string;
  BucketKeyEnabled?: boolean;
  RequestPayer?: RequestPayer | string;
  Tagging?: string;
  ObjectLockMode?: ObjectLockMode | string;
  ObjectLockRetainUntilDate?: Date;
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;
  ExpectedBucketOwner?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
}
export interface DeleteBucketRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface DeleteBucketAnalyticsConfigurationRequest {
  Bucket: string | undefined;
  Id: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface DeleteBucketCorsRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface DeleteBucketEncryptionRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface DeleteBucketIntelligentTieringConfigurationRequest {
  Bucket: string | undefined;
  Id: string | undefined;
}
export interface DeleteBucketInventoryConfigurationRequest {
  Bucket: string | undefined;
  Id: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface DeleteBucketLifecycleRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface DeleteBucketMetricsConfigurationRequest {
  Bucket: string | undefined;
  Id: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface DeleteBucketOwnershipControlsRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface DeleteBucketPolicyRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface DeleteBucketReplicationRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface DeleteBucketTaggingRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface DeleteBucketWebsiteRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface DeleteObjectOutput {
  DeleteMarker?: boolean;
  VersionId?: string;
  RequestCharged?: RequestCharged | string;
}
export interface DeleteObjectRequest {
  Bucket: string | undefined;
  Key: string | undefined;
  MFA?: string;
  VersionId?: string;
  RequestPayer?: RequestPayer | string;
  BypassGovernanceRetention?: boolean;
  ExpectedBucketOwner?: string;
}
export interface DeletedObject {
  Key?: string;
  VersionId?: string;
  DeleteMarker?: boolean;
  DeleteMarkerVersionId?: string;
}
export interface _Error {
  Key?: string;
  VersionId?: string;
  Code?: string;
  Message?: string;
}
export interface DeleteObjectsOutput {
  Deleted?: DeletedObject[];
  RequestCharged?: RequestCharged | string;
  Errors?: _Error[];
}
export interface ObjectIdentifier {
  Key: string | undefined;
  VersionId?: string;
}
export interface Delete {
  Objects: ObjectIdentifier[] | undefined;
  Quiet?: boolean;
}
export interface DeleteObjectsRequest {
  Bucket: string | undefined;
  Delete: Delete | undefined;
  MFA?: string;
  RequestPayer?: RequestPayer | string;
  BypassGovernanceRetention?: boolean;
  ExpectedBucketOwner?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
}
export interface DeleteObjectTaggingOutput {
  VersionId?: string;
}
export interface DeleteObjectTaggingRequest {
  Bucket: string | undefined;
  Key: string | undefined;
  VersionId?: string;
  ExpectedBucketOwner?: string;
}
export interface DeletePublicAccessBlockRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface GetBucketAccelerateConfigurationOutput {
  Status?: BucketAccelerateStatus | string;
}
export interface GetBucketAccelerateConfigurationRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface GetBucketAclOutput {
  Owner?: Owner;
  Grants?: Grant[];
}
export interface GetBucketAclRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface Tag {
  Key: string | undefined;
  Value: string | undefined;
}
export interface AnalyticsAndOperator {
  Prefix?: string;
  Tags?: Tag[];
}
export type AnalyticsFilter =
  | AnalyticsFilter.AndMember
  | AnalyticsFilter.PrefixMember
  | AnalyticsFilter.TagMember
  | AnalyticsFilter.$UnknownMember;
export declare namespace AnalyticsFilter {
  interface PrefixMember {
    Prefix: string;
    Tag?: never;
    And?: never;
    $unknown?: never;
  }
  interface TagMember {
    Prefix?: never;
    Tag: Tag;
    And?: never;
    $unknown?: never;
  }
  interface AndMember {
    Prefix?: never;
    Tag?: never;
    And: AnalyticsAndOperator;
    $unknown?: never;
  }
  interface $UnknownMember {
    Prefix?: never;
    Tag?: never;
    And?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    Prefix: (value: string) => T;
    Tag: (value: Tag) => T;
    And: (value: AnalyticsAndOperator) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: AnalyticsFilter, visitor: Visitor<T>) => T;
}
export declare enum AnalyticsS3ExportFileFormat {
  CSV = "CSV",
}
export interface AnalyticsS3BucketDestination {
  Format: AnalyticsS3ExportFileFormat | string | undefined;
  BucketAccountId?: string;
  Bucket: string | undefined;
  Prefix?: string;
}
export interface AnalyticsExportDestination {
  S3BucketDestination: AnalyticsS3BucketDestination | undefined;
}
export declare enum StorageClassAnalysisSchemaVersion {
  V_1 = "V_1",
}
export interface StorageClassAnalysisDataExport {
  OutputSchemaVersion: StorageClassAnalysisSchemaVersion | string | undefined;
  Destination: AnalyticsExportDestination | undefined;
}
export interface StorageClassAnalysis {
  DataExport?: StorageClassAnalysisDataExport;
}
export interface AnalyticsConfiguration {
  Id: string | undefined;
  Filter?: AnalyticsFilter;
  StorageClassAnalysis: StorageClassAnalysis | undefined;
}
export interface GetBucketAnalyticsConfigurationOutput {
  AnalyticsConfiguration?: AnalyticsConfiguration;
}
export interface GetBucketAnalyticsConfigurationRequest {
  Bucket: string | undefined;
  Id: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface CORSRule {
  ID?: string;
  AllowedHeaders?: string[];
  AllowedMethods: string[] | undefined;
  AllowedOrigins: string[] | undefined;
  ExposeHeaders?: string[];
  MaxAgeSeconds?: number;
}
export interface GetBucketCorsOutput {
  CORSRules?: CORSRule[];
}
export interface GetBucketCorsRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface ServerSideEncryptionByDefault {
  SSEAlgorithm: ServerSideEncryption | string | undefined;
  KMSMasterKeyID?: string;
}
export interface ServerSideEncryptionRule {
  ApplyServerSideEncryptionByDefault?: ServerSideEncryptionByDefault;
  BucketKeyEnabled?: boolean;
}
export interface ServerSideEncryptionConfiguration {
  Rules: ServerSideEncryptionRule[] | undefined;
}
export interface GetBucketEncryptionOutput {
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
}
export interface GetBucketEncryptionRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface IntelligentTieringAndOperator {
  Prefix?: string;
  Tags?: Tag[];
}
export interface IntelligentTieringFilter {
  Prefix?: string;
  Tag?: Tag;
  And?: IntelligentTieringAndOperator;
}
export declare enum IntelligentTieringStatus {
  Disabled = "Disabled",
  Enabled = "Enabled",
}
export declare enum IntelligentTieringAccessTier {
  ARCHIVE_ACCESS = "ARCHIVE_ACCESS",
  DEEP_ARCHIVE_ACCESS = "DEEP_ARCHIVE_ACCESS",
}
export interface Tiering {
  Days: number | undefined;
  AccessTier: IntelligentTieringAccessTier | string | undefined;
}
export interface IntelligentTieringConfiguration {
  Id: string | undefined;
  Filter?: IntelligentTieringFilter;
  Status: IntelligentTieringStatus | string | undefined;
  Tierings: Tiering[] | undefined;
}
export interface GetBucketIntelligentTieringConfigurationOutput {
  IntelligentTieringConfiguration?: IntelligentTieringConfiguration;
}
export interface GetBucketIntelligentTieringConfigurationRequest {
  Bucket: string | undefined;
  Id: string | undefined;
}
export interface SSEKMS {
  KeyId: string | undefined;
}
export interface SSES3 {}
export interface InventoryEncryption {
  SSES3?: SSES3;
  SSEKMS?: SSEKMS;
}
export declare enum InventoryFormat {
  CSV = "CSV",
  ORC = "ORC",
  Parquet = "Parquet",
}
export interface InventoryS3BucketDestination {
  AccountId?: string;
  Bucket: string | undefined;
  Format: InventoryFormat | string | undefined;
  Prefix?: string;
  Encryption?: InventoryEncryption;
}
export interface InventoryDestination {
  S3BucketDestination: InventoryS3BucketDestination | undefined;
}
export interface InventoryFilter {
  Prefix: string | undefined;
}
export declare enum InventoryIncludedObjectVersions {
  All = "All",
  Current = "Current",
}
export declare enum InventoryOptionalField {
  BucketKeyStatus = "BucketKeyStatus",
  ChecksumAlgorithm = "ChecksumAlgorithm",
  ETag = "ETag",
  EncryptionStatus = "EncryptionStatus",
  IntelligentTieringAccessTier = "IntelligentTieringAccessTier",
  IsMultipartUploaded = "IsMultipartUploaded",
  LastModifiedDate = "LastModifiedDate",
  ObjectLockLegalHoldStatus = "ObjectLockLegalHoldStatus",
  ObjectLockMode = "ObjectLockMode",
  ObjectLockRetainUntilDate = "ObjectLockRetainUntilDate",
  ReplicationStatus = "ReplicationStatus",
  Size = "Size",
  StorageClass = "StorageClass",
}
export declare enum InventoryFrequency {
  Daily = "Daily",
  Weekly = "Weekly",
}
export interface InventorySchedule {
  Frequency: InventoryFrequency | string | undefined;
}
export interface InventoryConfiguration {
  Destination: InventoryDestination | undefined;
  IsEnabled: boolean | undefined;
  Filter?: InventoryFilter;
  Id: string | undefined;
  IncludedObjectVersions: InventoryIncludedObjectVersions | string | undefined;
  OptionalFields?: (InventoryOptionalField | string)[];
  Schedule: InventorySchedule | undefined;
}
export interface GetBucketInventoryConfigurationOutput {
  InventoryConfiguration?: InventoryConfiguration;
}
export interface GetBucketInventoryConfigurationRequest {
  Bucket: string | undefined;
  Id: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface LifecycleExpiration {
  Date?: Date;
  Days?: number;
  ExpiredObjectDeleteMarker?: boolean;
}
export interface LifecycleRuleAndOperator {
  Prefix?: string;
  Tags?: Tag[];
  ObjectSizeGreaterThan?: number;
  ObjectSizeLessThan?: number;
}
export type LifecycleRuleFilter =
  | LifecycleRuleFilter.AndMember
  | LifecycleRuleFilter.ObjectSizeGreaterThanMember
  | LifecycleRuleFilter.ObjectSizeLessThanMember
  | LifecycleRuleFilter.PrefixMember
  | LifecycleRuleFilter.TagMember
  | LifecycleRuleFilter.$UnknownMember;
export declare namespace LifecycleRuleFilter {
  interface PrefixMember {
    Prefix: string;
    Tag?: never;
    ObjectSizeGreaterThan?: never;
    ObjectSizeLessThan?: never;
    And?: never;
    $unknown?: never;
  }
  interface TagMember {
    Prefix?: never;
    Tag: Tag;
    ObjectSizeGreaterThan?: never;
    ObjectSizeLessThan?: never;
    And?: never;
    $unknown?: never;
  }
  interface ObjectSizeGreaterThanMember {
    Prefix?: never;
    Tag?: never;
    ObjectSizeGreaterThan: number;
    ObjectSizeLessThan?: never;
    And?: never;
    $unknown?: never;
  }
  interface ObjectSizeLessThanMember {
    Prefix?: never;
    Tag?: never;
    ObjectSizeGreaterThan?: never;
    ObjectSizeLessThan: number;
    And?: never;
    $unknown?: never;
  }
  interface AndMember {
    Prefix?: never;
    Tag?: never;
    ObjectSizeGreaterThan?: never;
    ObjectSizeLessThan?: never;
    And: LifecycleRuleAndOperator;
    $unknown?: never;
  }
  interface $UnknownMember {
    Prefix?: never;
    Tag?: never;
    ObjectSizeGreaterThan?: never;
    ObjectSizeLessThan?: never;
    And?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    Prefix: (value: string) => T;
    Tag: (value: Tag) => T;
    ObjectSizeGreaterThan: (value: number) => T;
    ObjectSizeLessThan: (value: number) => T;
    And: (value: LifecycleRuleAndOperator) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: LifecycleRuleFilter, visitor: Visitor<T>) => T;
}
export interface NoncurrentVersionExpiration {
  NoncurrentDays?: number;
  NewerNoncurrentVersions?: number;
}
export declare enum TransitionStorageClass {
  DEEP_ARCHIVE = "DEEP_ARCHIVE",
  GLACIER = "GLACIER",
  GLACIER_IR = "GLACIER_IR",
  INTELLIGENT_TIERING = "INTELLIGENT_TIERING",
  ONEZONE_IA = "ONEZONE_IA",
  STANDARD_IA = "STANDARD_IA",
}
export interface NoncurrentVersionTransition {
  NoncurrentDays?: number;
  StorageClass?: TransitionStorageClass | string;
  NewerNoncurrentVersions?: number;
}
export declare enum ExpirationStatus {
  Disabled = "Disabled",
  Enabled = "Enabled",
}
export interface Transition {
  Date?: Date;
  Days?: number;
  StorageClass?: TransitionStorageClass | string;
}
export interface LifecycleRule {
  Expiration?: LifecycleExpiration;
  ID?: string;
  Prefix?: string;
  Filter?: LifecycleRuleFilter;
  Status: ExpirationStatus | string | undefined;
  Transitions?: Transition[];
  NoncurrentVersionTransitions?: NoncurrentVersionTransition[];
  NoncurrentVersionExpiration?: NoncurrentVersionExpiration;
  AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;
}
export interface GetBucketLifecycleConfigurationOutput {
  Rules?: LifecycleRule[];
}
export interface GetBucketLifecycleConfigurationRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface GetBucketLocationOutput {
  LocationConstraint?: BucketLocationConstraint | string;
}
export interface GetBucketLocationRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export declare enum BucketLogsPermission {
  FULL_CONTROL = "FULL_CONTROL",
  READ = "READ",
  WRITE = "WRITE",
}
export interface TargetGrant {
  Grantee?: Grantee;
  Permission?: BucketLogsPermission | string;
}
export interface LoggingEnabled {
  TargetBucket: string | undefined;
  TargetGrants?: TargetGrant[];
  TargetPrefix: string | undefined;
}
export interface GetBucketLoggingOutput {
  LoggingEnabled?: LoggingEnabled;
}
export interface GetBucketLoggingRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface MetricsAndOperator {
  Prefix?: string;
  Tags?: Tag[];
  AccessPointArn?: string;
}
export type MetricsFilter =
  | MetricsFilter.AccessPointArnMember
  | MetricsFilter.AndMember
  | MetricsFilter.PrefixMember
  | MetricsFilter.TagMember
  | MetricsFilter.$UnknownMember;
export declare namespace MetricsFilter {
  interface PrefixMember {
    Prefix: string;
    Tag?: never;
    AccessPointArn?: never;
    And?: never;
    $unknown?: never;
  }
  interface TagMember {
    Prefix?: never;
    Tag: Tag;
    AccessPointArn?: never;
    And?: never;
    $unknown?: never;
  }
  interface AccessPointArnMember {
    Prefix?: never;
    Tag?: never;
    AccessPointArn: string;
    And?: never;
    $unknown?: never;
  }
  interface AndMember {
    Prefix?: never;
    Tag?: never;
    AccessPointArn?: never;
    And: MetricsAndOperator;
    $unknown?: never;
  }
  interface $UnknownMember {
    Prefix?: never;
    Tag?: never;
    AccessPointArn?: never;
    And?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    Prefix: (value: string) => T;
    Tag: (value: Tag) => T;
    AccessPointArn: (value: string) => T;
    And: (value: MetricsAndOperator) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: MetricsFilter, visitor: Visitor<T>) => T;
}
export interface MetricsConfiguration {
  Id: string | undefined;
  Filter?: MetricsFilter;
}
export interface GetBucketMetricsConfigurationOutput {
  MetricsConfiguration?: MetricsConfiguration;
}
export interface GetBucketMetricsConfigurationRequest {
  Bucket: string | undefined;
  Id: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface GetBucketNotificationConfigurationRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface EventBridgeConfiguration {}
export type Event =
  | "s3:IntelligentTiering"
  | "s3:LifecycleExpiration:*"
  | "s3:LifecycleExpiration:Delete"
  | "s3:LifecycleExpiration:DeleteMarkerCreated"
  | "s3:LifecycleTransition"
  | "s3:ObjectAcl:Put"
  | "s3:ObjectCreated:*"
  | "s3:ObjectCreated:CompleteMultipartUpload"
  | "s3:ObjectCreated:Copy"
  | "s3:ObjectCreated:Post"
  | "s3:ObjectCreated:Put"
  | "s3:ObjectRemoved:*"
  | "s3:ObjectRemoved:Delete"
  | "s3:ObjectRemoved:DeleteMarkerCreated"
  | "s3:ObjectRestore:*"
  | "s3:ObjectRestore:Completed"
  | "s3:ObjectRestore:Delete"
  | "s3:ObjectRestore:Post"
  | "s3:ObjectTagging:*"
  | "s3:ObjectTagging:Delete"
  | "s3:ObjectTagging:Put"
  | "s3:ReducedRedundancyLostObject"
  | "s3:Replication:*"
  | "s3:Replication:OperationFailedReplication"
  | "s3:Replication:OperationMissedThreshold"
  | "s3:Replication:OperationNotTracked"
  | "s3:Replication:OperationReplicatedAfterThreshold";
export declare enum FilterRuleName {
  prefix = "prefix",
  suffix = "suffix",
}
export interface FilterRule {
  Name?: FilterRuleName | string;
  Value?: string;
}
export interface S3KeyFilter {
  FilterRules?: FilterRule[];
}
export interface NotificationConfigurationFilter {
  Key?: S3KeyFilter;
}
export interface LambdaFunctionConfiguration {
  Id?: string;
  LambdaFunctionArn: string | undefined;
  Events: (Event | string)[] | undefined;
  Filter?: NotificationConfigurationFilter;
}
export interface QueueConfiguration {
  Id?: string;
  QueueArn: string | undefined;
  Events: (Event | string)[] | undefined;
  Filter?: NotificationConfigurationFilter;
}
export interface TopicConfiguration {
  Id?: string;
  TopicArn: string | undefined;
  Events: (Event | string)[] | undefined;
  Filter?: NotificationConfigurationFilter;
}
export interface NotificationConfiguration {
  TopicConfigurations?: TopicConfiguration[];
  QueueConfigurations?: QueueConfiguration[];
  LambdaFunctionConfigurations?: LambdaFunctionConfiguration[];
  EventBridgeConfiguration?: EventBridgeConfiguration;
}
export interface OwnershipControlsRule {
  ObjectOwnership: ObjectOwnership | string | undefined;
}
export interface OwnershipControls {
  Rules: OwnershipControlsRule[] | undefined;
}
export interface GetBucketOwnershipControlsOutput {
  OwnershipControls?: OwnershipControls;
}
export interface GetBucketOwnershipControlsRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface GetBucketPolicyOutput {
  Policy?: string;
}
export interface GetBucketPolicyRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface PolicyStatus {
  IsPublic?: boolean;
}
export interface GetBucketPolicyStatusOutput {
  PolicyStatus?: PolicyStatus;
}
export interface GetBucketPolicyStatusRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export declare enum DeleteMarkerReplicationStatus {
  Disabled = "Disabled",
  Enabled = "Enabled",
}
export interface DeleteMarkerReplication {
  Status?: DeleteMarkerReplicationStatus | string;
}
export interface EncryptionConfiguration {
  ReplicaKmsKeyID?: string;
}
export interface ReplicationTimeValue {
  Minutes?: number;
}
export declare enum MetricsStatus {
  Disabled = "Disabled",
  Enabled = "Enabled",
}
export interface Metrics {
  Status: MetricsStatus | string | undefined;
  EventThreshold?: ReplicationTimeValue;
}
export declare enum ReplicationTimeStatus {
  Disabled = "Disabled",
  Enabled = "Enabled",
}
export interface ReplicationTime {
  Status: ReplicationTimeStatus | string | undefined;
  Time: ReplicationTimeValue | undefined;
}
export interface Destination {
  Bucket: string | undefined;
  Account?: string;
  StorageClass?: StorageClass | string;
  AccessControlTranslation?: AccessControlTranslation;
  EncryptionConfiguration?: EncryptionConfiguration;
  ReplicationTime?: ReplicationTime;
  Metrics?: Metrics;
}
export declare enum ExistingObjectReplicationStatus {
  Disabled = "Disabled",
  Enabled = "Enabled",
}
export interface ExistingObjectReplication {
  Status: ExistingObjectReplicationStatus | string | undefined;
}
export interface ReplicationRuleAndOperator {
  Prefix?: string;
  Tags?: Tag[];
}
export type ReplicationRuleFilter =
  | ReplicationRuleFilter.AndMember
  | ReplicationRuleFilter.PrefixMember
  | ReplicationRuleFilter.TagMember
  | ReplicationRuleFilter.$UnknownMember;
export declare namespace ReplicationRuleFilter {
  interface PrefixMember {
    Prefix: string;
    Tag?: never;
    And?: never;
    $unknown?: never;
  }
  interface TagMember {
    Prefix?: never;
    Tag: Tag;
    And?: never;
    $unknown?: never;
  }
  interface AndMember {
    Prefix?: never;
    Tag?: never;
    And: ReplicationRuleAndOperator;
    $unknown?: never;
  }
  interface $UnknownMember {
    Prefix?: never;
    Tag?: never;
    And?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    Prefix: (value: string) => T;
    Tag: (value: Tag) => T;
    And: (value: ReplicationRuleAndOperator) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(value: ReplicationRuleFilter, visitor: Visitor<T>) => T;
}
export declare enum ReplicaModificationsStatus {
  Disabled = "Disabled",
  Enabled = "Enabled",
}
export interface ReplicaModifications {
  Status: ReplicaModificationsStatus | string | undefined;
}
export declare enum SseKmsEncryptedObjectsStatus {
  Disabled = "Disabled",
  Enabled = "Enabled",
}
export interface SseKmsEncryptedObjects {
  Status: SseKmsEncryptedObjectsStatus | string | undefined;
}
export interface SourceSelectionCriteria {
  SseKmsEncryptedObjects?: SseKmsEncryptedObjects;
  ReplicaModifications?: ReplicaModifications;
}
export declare enum ReplicationRuleStatus {
  Disabled = "Disabled",
  Enabled = "Enabled",
}
export interface ReplicationRule {
  ID?: string;
  Priority?: number;
  Prefix?: string;
  Filter?: ReplicationRuleFilter;
  Status: ReplicationRuleStatus | string | undefined;
  SourceSelectionCriteria?: SourceSelectionCriteria;
  ExistingObjectReplication?: ExistingObjectReplication;
  Destination: Destination | undefined;
  DeleteMarkerReplication?: DeleteMarkerReplication;
}
export interface ReplicationConfiguration {
  Role: string | undefined;
  Rules: ReplicationRule[] | undefined;
}
export interface GetBucketReplicationOutput {
  ReplicationConfiguration?: ReplicationConfiguration;
}
export interface GetBucketReplicationRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export declare enum Payer {
  BucketOwner = "BucketOwner",
  Requester = "Requester",
}
export interface GetBucketRequestPaymentOutput {
  Payer?: Payer | string;
}
export interface GetBucketRequestPaymentRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface GetBucketTaggingOutput {
  TagSet: Tag[] | undefined;
}
export interface GetBucketTaggingRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export declare enum MFADeleteStatus {
  Disabled = "Disabled",
  Enabled = "Enabled",
}
export declare enum BucketVersioningStatus {
  Enabled = "Enabled",
  Suspended = "Suspended",
}
export interface GetBucketVersioningOutput {
  Status?: BucketVersioningStatus | string;
  MFADelete?: MFADeleteStatus | string;
}
export interface GetBucketVersioningRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface ErrorDocument {
  Key: string | undefined;
}
export interface IndexDocument {
  Suffix: string | undefined;
}
export declare enum Protocol {
  http = "http",
  https = "https",
}
export interface RedirectAllRequestsTo {
  HostName: string | undefined;
  Protocol?: Protocol | string;
}
export interface Condition {
  HttpErrorCodeReturnedEquals?: string;
  KeyPrefixEquals?: string;
}
export interface Redirect {
  HostName?: string;
  HttpRedirectCode?: string;
  Protocol?: Protocol | string;
  ReplaceKeyPrefixWith?: string;
  ReplaceKeyWith?: string;
}
export interface RoutingRule {
  Condition?: Condition;
  Redirect: Redirect | undefined;
}
export interface GetBucketWebsiteOutput {
  RedirectAllRequestsTo?: RedirectAllRequestsTo;
  IndexDocument?: IndexDocument;
  ErrorDocument?: ErrorDocument;
  RoutingRules?: RoutingRule[];
}
export interface GetBucketWebsiteRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export declare enum ReplicationStatus {
  COMPLETE = "COMPLETE",
  FAILED = "FAILED",
  PENDING = "PENDING",
  REPLICA = "REPLICA",
}
export interface GetObjectOutput {
  Body?: Readable | ReadableStream | Blob;
  DeleteMarker?: boolean;
  AcceptRanges?: string;
  Expiration?: string;
  Restore?: string;
  LastModified?: Date;
  ContentLength?: number;
  ETag?: string;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
  MissingMeta?: number;
  VersionId?: string;
  CacheControl?: string;
  ContentDisposition?: string;
  ContentEncoding?: string;
  ContentLanguage?: string;
  ContentRange?: string;
  ContentType?: string;
  Expires?: Date;
  WebsiteRedirectLocation?: string;
  ServerSideEncryption?: ServerSideEncryption | string;
  Metadata?: Record<string, string>;
  SSECustomerAlgorithm?: string;
  SSECustomerKeyMD5?: string;
  SSEKMSKeyId?: string;
  BucketKeyEnabled?: boolean;
  StorageClass?: StorageClass | string;
  RequestCharged?: RequestCharged | string;
  ReplicationStatus?: ReplicationStatus | string;
  PartsCount?: number;
  TagCount?: number;
  ObjectLockMode?: ObjectLockMode | string;
  ObjectLockRetainUntilDate?: Date;
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;
}
export declare enum ChecksumMode {
  ENABLED = "ENABLED",
}
export interface GetObjectRequest {
  Bucket: string | undefined;
  IfMatch?: string;
  IfModifiedSince?: Date;
  IfNoneMatch?: string;
  IfUnmodifiedSince?: Date;
  Key: string | undefined;
  Range?: string;
  ResponseCacheControl?: string;
  ResponseContentDisposition?: string;
  ResponseContentEncoding?: string;
  ResponseContentLanguage?: string;
  ResponseContentType?: string;
  ResponseExpires?: Date;
  VersionId?: string;
  SSECustomerAlgorithm?: string;
  SSECustomerKey?: string;
  SSECustomerKeyMD5?: string;
  RequestPayer?: RequestPayer | string;
  PartNumber?: number;
  ExpectedBucketOwner?: string;
  ChecksumMode?: ChecksumMode | string;
}
export declare class InvalidObjectState extends __BaseException {
  readonly name: "InvalidObjectState";
  readonly $fault: "client";
  StorageClass?: StorageClass | string;
  AccessTier?: IntelligentTieringAccessTier | string;
  constructor(opts: __ExceptionOptionType<InvalidObjectState, __BaseException>);
}
export declare class NoSuchKey extends __BaseException {
  readonly name: "NoSuchKey";
  readonly $fault: "client";
  constructor(opts: __ExceptionOptionType<NoSuchKey, __BaseException>);
}
export interface GetObjectAclOutput {
  Owner?: Owner;
  Grants?: Grant[];
  RequestCharged?: RequestCharged | string;
}
export interface GetObjectAclRequest {
  Bucket: string | undefined;
  Key: string | undefined;
  VersionId?: string;
  RequestPayer?: RequestPayer | string;
  ExpectedBucketOwner?: string;
}
export interface Checksum {
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
}
export interface ObjectPart {
  PartNumber?: number;
  Size?: number;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
}
export interface GetObjectAttributesParts {
  TotalPartsCount?: number;
  PartNumberMarker?: string;
  NextPartNumberMarker?: string;
  MaxParts?: number;
  IsTruncated?: boolean;
  Parts?: ObjectPart[];
}
export interface GetObjectAttributesOutput {
  DeleteMarker?: boolean;
  LastModified?: Date;
  VersionId?: string;
  RequestCharged?: RequestCharged | string;
  ETag?: string;
  Checksum?: Checksum;
  ObjectParts?: GetObjectAttributesParts;
  StorageClass?: StorageClass | string;
  ObjectSize?: number;
}
export declare enum ObjectAttributes {
  CHECKSUM = "Checksum",
  ETAG = "ETag",
  OBJECT_PARTS = "ObjectParts",
  OBJECT_SIZE = "ObjectSize",
  STORAGE_CLASS = "StorageClass",
}
export interface GetObjectAttributesRequest {
  Bucket: string | undefined;
  Key: string | undefined;
  VersionId?: string;
  MaxParts?: number;
  PartNumberMarker?: string;
  SSECustomerAlgorithm?: string;
  SSECustomerKey?: string;
  SSECustomerKeyMD5?: string;
  RequestPayer?: RequestPayer | string;
  ExpectedBucketOwner?: string;
  ObjectAttributes: (ObjectAttributes | string)[] | undefined;
}
export interface ObjectLockLegalHold {
  Status?: ObjectLockLegalHoldStatus | string;
}
export interface GetObjectLegalHoldOutput {
  LegalHold?: ObjectLockLegalHold;
}
export interface GetObjectLegalHoldRequest {
  Bucket: string | undefined;
  Key: string | undefined;
  VersionId?: string;
  RequestPayer?: RequestPayer | string;
  ExpectedBucketOwner?: string;
}
export declare enum ObjectLockEnabled {
  Enabled = "Enabled",
}
export declare enum ObjectLockRetentionMode {
  COMPLIANCE = "COMPLIANCE",
  GOVERNANCE = "GOVERNANCE",
}
export interface DefaultRetention {
  Mode?: ObjectLockRetentionMode | string;
  Days?: number;
  Years?: number;
}
export interface ObjectLockRule {
  DefaultRetention?: DefaultRetention;
}
export interface ObjectLockConfiguration {
  ObjectLockEnabled?: ObjectLockEnabled | string;
  Rule?: ObjectLockRule;
}
export interface GetObjectLockConfigurationOutput {
  ObjectLockConfiguration?: ObjectLockConfiguration;
}
export interface GetObjectLockConfigurationRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface ObjectLockRetention {
  Mode?: ObjectLockRetentionMode | string;
  RetainUntilDate?: Date;
}
export interface GetObjectRetentionOutput {
  Retention?: ObjectLockRetention;
}
export interface GetObjectRetentionRequest {
  Bucket: string | undefined;
  Key: string | undefined;
  VersionId?: string;
  RequestPayer?: RequestPayer | string;
  ExpectedBucketOwner?: string;
}
export interface GetObjectTaggingOutput {
  VersionId?: string;
  TagSet: Tag[] | undefined;
}
export interface GetObjectTaggingRequest {
  Bucket: string | undefined;
  Key: string | undefined;
  VersionId?: string;
  ExpectedBucketOwner?: string;
  RequestPayer?: RequestPayer | string;
}
export interface GetObjectTorrentOutput {
  Body?: Readable | ReadableStream | Blob;
  RequestCharged?: RequestCharged | string;
}
export interface GetObjectTorrentRequest {
  Bucket: string | undefined;
  Key: string | undefined;
  RequestPayer?: RequestPayer | string;
  ExpectedBucketOwner?: string;
}
export interface PublicAccessBlockConfiguration {
  BlockPublicAcls?: boolean;
  IgnorePublicAcls?: boolean;
  BlockPublicPolicy?: boolean;
  RestrictPublicBuckets?: boolean;
}
export interface GetPublicAccessBlockOutput {
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
}
export interface GetPublicAccessBlockRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface HeadBucketRequest {
  Bucket: string | undefined;
  ExpectedBucketOwner?: string;
}
export declare class NotFound extends __BaseException {
  readonly name: "NotFound";
  readonly $fault: "client";
  constructor(opts: __ExceptionOptionType<NotFound, __BaseException>);
}
export declare enum ArchiveStatus {
  ARCHIVE_ACCESS = "ARCHIVE_ACCESS",
  DEEP_ARCHIVE_ACCESS = "DEEP_ARCHIVE_ACCESS",
}
export interface HeadObjectOutput {
  DeleteMarker?: boolean;
  AcceptRanges?: string;
  Expiration?: string;
  Restore?: string;
  ArchiveStatus?: ArchiveStatus | string;
  LastModified?: Date;
  ContentLength?: number;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
  ETag?: string;
  MissingMeta?: number;
  VersionId?: string;
  CacheControl?: string;
  ContentDisposition?: string;
  ContentEncoding?: string;
  ContentLanguage?: string;
  ContentType?: string;
  Expires?: Date;
  WebsiteRedirectLocation?: string;
  ServerSideEncryption?: ServerSideEncryption | string;
  Metadata?: Record<string, string>;
  SSECustomerAlgorithm?: string;
  SSECustomerKeyMD5?: string;
  SSEKMSKeyId?: string;
  BucketKeyEnabled?: boolean;
  StorageClass?: StorageClass | string;
  RequestCharged?: RequestCharged | string;
  ReplicationStatus?: ReplicationStatus | string;
  PartsCount?: number;
  ObjectLockMode?: ObjectLockMode | string;
  ObjectLockRetainUntilDate?: Date;
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;
}
export interface HeadObjectRequest {
  Bucket: string | undefined;
  IfMatch?: string;
  IfModifiedSince?: Date;
  IfNoneMatch?: string;
  IfUnmodifiedSince?: Date;
  Key: string | undefined;
  Range?: string;
  VersionId?: string;
  SSECustomerAlgorithm?: string;
  SSECustomerKey?: string;
  SSECustomerKeyMD5?: string;
  RequestPayer?: RequestPayer | string;
  PartNumber?: number;
  ExpectedBucketOwner?: string;
  ChecksumMode?: ChecksumMode | string;
}
export interface ListBucketAnalyticsConfigurationsOutput {
  IsTruncated?: boolean;
  ContinuationToken?: string;
  NextContinuationToken?: string;
  AnalyticsConfigurationList?: AnalyticsConfiguration[];
}
export interface ListBucketAnalyticsConfigurationsRequest {
  Bucket: string | undefined;
  ContinuationToken?: string;
  ExpectedBucketOwner?: string;
}
export interface ListBucketIntelligentTieringConfigurationsOutput {
  IsTruncated?: boolean;
  ContinuationToken?: string;
  NextContinuationToken?: string;
  IntelligentTieringConfigurationList?: IntelligentTieringConfiguration[];
}
export interface ListBucketIntelligentTieringConfigurationsRequest {
  Bucket: string | undefined;
  ContinuationToken?: string;
}
export interface ListBucketInventoryConfigurationsOutput {
  ContinuationToken?: string;
  InventoryConfigurationList?: InventoryConfiguration[];
  IsTruncated?: boolean;
  NextContinuationToken?: string;
}
export interface ListBucketInventoryConfigurationsRequest {
  Bucket: string | undefined;
  ContinuationToken?: string;
  ExpectedBucketOwner?: string;
}
export interface ListBucketMetricsConfigurationsOutput {
  IsTruncated?: boolean;
  ContinuationToken?: string;
  NextContinuationToken?: string;
  MetricsConfigurationList?: MetricsConfiguration[];
}
export interface ListBucketMetricsConfigurationsRequest {
  Bucket: string | undefined;
  ContinuationToken?: string;
  ExpectedBucketOwner?: string;
}
export interface Bucket {
  Name?: string;
  CreationDate?: Date;
}
export interface ListBucketsOutput {
  Buckets?: Bucket[];
  Owner?: Owner;
}
export interface CommonPrefix {
  Prefix?: string;
}
export declare enum EncodingType {
  url = "url",
}
export interface Initiator {
  ID?: string;
  DisplayName?: string;
}
export interface MultipartUpload {
  UploadId?: string;
  Key?: string;
  Initiated?: Date;
  StorageClass?: StorageClass | string;
  Owner?: Owner;
  Initiator?: Initiator;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
}
export interface ListMultipartUploadsOutput {
  Bucket?: string;
  KeyMarker?: string;
  UploadIdMarker?: string;
  NextKeyMarker?: string;
  Prefix?: string;
  Delimiter?: string;
  NextUploadIdMarker?: string;
  MaxUploads?: number;
  IsTruncated?: boolean;
  Uploads?: MultipartUpload[];
  CommonPrefixes?: CommonPrefix[];
  EncodingType?: EncodingType | string;
}
export interface ListMultipartUploadsRequest {
  Bucket: string | undefined;
  Delimiter?: string;
  EncodingType?: EncodingType | string;
  KeyMarker?: string;
  MaxUploads?: number;
  Prefix?: string;
  UploadIdMarker?: string;
  ExpectedBucketOwner?: string;
}
export declare enum ObjectStorageClass {
  DEEP_ARCHIVE = "DEEP_ARCHIVE",
  GLACIER = "GLACIER",
  GLACIER_IR = "GLACIER_IR",
  INTELLIGENT_TIERING = "INTELLIGENT_TIERING",
  ONEZONE_IA = "ONEZONE_IA",
  OUTPOSTS = "OUTPOSTS",
  REDUCED_REDUNDANCY = "REDUCED_REDUNDANCY",
  STANDARD = "STANDARD",
  STANDARD_IA = "STANDARD_IA",
}
export interface _Object {
  Key?: string;
  LastModified?: Date;
  ETag?: string;
  ChecksumAlgorithm?: (ChecksumAlgorithm | string)[];
  Size?: number;
  StorageClass?: ObjectStorageClass | string;
  Owner?: Owner;
}
export interface ListObjectsOutput {
  IsTruncated?: boolean;
  Marker?: string;
  NextMarker?: string;
  Contents?: _Object[];
  Name?: string;
  Prefix?: string;
  Delimiter?: string;
  MaxKeys?: number;
  CommonPrefixes?: CommonPrefix[];
  EncodingType?: EncodingType | string;
}
export interface ListObjectsRequest {
  Bucket: string | undefined;
  Delimiter?: string;
  EncodingType?: EncodingType | string;
  Marker?: string;
  MaxKeys?: number;
  Prefix?: string;
  RequestPayer?: RequestPayer | string;
  ExpectedBucketOwner?: string;
}
export declare class NoSuchBucket extends __BaseException {
  readonly name: "NoSuchBucket";
  readonly $fault: "client";
  constructor(opts: __ExceptionOptionType<NoSuchBucket, __BaseException>);
}
export interface ListObjectsV2Output {
  IsTruncated?: boolean;
  Contents?: _Object[];
  Name?: string;
  Prefix?: string;
  Delimiter?: string;
  MaxKeys?: number;
  CommonPrefixes?: CommonPrefix[];
  EncodingType?: EncodingType | string;
  KeyCount?: number;
  ContinuationToken?: string;
  NextContinuationToken?: string;
  StartAfter?: string;
}
export interface ListObjectsV2Request {
  Bucket: string | undefined;
  Delimiter?: string;
  EncodingType?: EncodingType | string;
  MaxKeys?: number;
  Prefix?: string;
  ContinuationToken?: string;
  FetchOwner?: boolean;
  StartAfter?: string;
  RequestPayer?: RequestPayer | string;
  ExpectedBucketOwner?: string;
}
export interface DeleteMarkerEntry {
  Owner?: Owner;
  Key?: string;
  VersionId?: string;
  IsLatest?: boolean;
  LastModified?: Date;
}
export declare enum ObjectVersionStorageClass {
  STANDARD = "STANDARD",
}
export interface ObjectVersion {
  ETag?: string;
  ChecksumAlgorithm?: (ChecksumAlgorithm | string)[];
  Size?: number;
  StorageClass?: ObjectVersionStorageClass | string;
  Key?: string;
  VersionId?: string;
  IsLatest?: boolean;
  LastModified?: Date;
  Owner?: Owner;
}
export interface ListObjectVersionsOutput {
  IsTruncated?: boolean;
  KeyMarker?: string;
  VersionIdMarker?: string;
  NextKeyMarker?: string;
  NextVersionIdMarker?: string;
  Versions?: ObjectVersion[];
  DeleteMarkers?: DeleteMarkerEntry[];
  Name?: string;
  Prefix?: string;
  Delimiter?: string;
  MaxKeys?: number;
  CommonPrefixes?: CommonPrefix[];
  EncodingType?: EncodingType | string;
}
export interface ListObjectVersionsRequest {
  Bucket: string | undefined;
  Delimiter?: string;
  EncodingType?: EncodingType | string;
  KeyMarker?: string;
  MaxKeys?: number;
  Prefix?: string;
  VersionIdMarker?: string;
  ExpectedBucketOwner?: string;
}
export interface Part {
  PartNumber?: number;
  LastModified?: Date;
  ETag?: string;
  Size?: number;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
}
export interface ListPartsOutput {
  AbortDate?: Date;
  AbortRuleId?: string;
  Bucket?: string;
  Key?: string;
  UploadId?: string;
  PartNumberMarker?: string;
  NextPartNumberMarker?: string;
  MaxParts?: number;
  IsTruncated?: boolean;
  Parts?: Part[];
  Initiator?: Initiator;
  Owner?: Owner;
  StorageClass?: StorageClass | string;
  RequestCharged?: RequestCharged | string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
}
export interface ListPartsRequest {
  Bucket: string | undefined;
  Key: string | undefined;
  MaxParts?: number;
  PartNumberMarker?: string;
  UploadId: string | undefined;
  RequestPayer?: RequestPayer | string;
  ExpectedBucketOwner?: string;
  SSECustomerAlgorithm?: string;
  SSECustomerKey?: string;
  SSECustomerKeyMD5?: string;
}
export interface PutBucketAccelerateConfigurationRequest {
  Bucket: string | undefined;
  AccelerateConfiguration: AccelerateConfiguration | undefined;
  ExpectedBucketOwner?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
}
export interface PutBucketAclRequest {
  ACL?: BucketCannedACL | string;
  AccessControlPolicy?: AccessControlPolicy;
  Bucket: string | undefined;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
  GrantFullControl?: string;
  GrantRead?: string;
  GrantReadACP?: string;
  GrantWrite?: string;
  GrantWriteACP?: string;
  ExpectedBucketOwner?: string;
}
export interface PutBucketAnalyticsConfigurationRequest {
  Bucket: string | undefined;
  Id: string | undefined;
  AnalyticsConfiguration: AnalyticsConfiguration | undefined;
  ExpectedBucketOwner?: string;
}
export interface CORSConfiguration {
  CORSRules: CORSRule[] | undefined;
}
export interface PutBucketCorsRequest {
  Bucket: string | undefined;
  CORSConfiguration: CORSConfiguration | undefined;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
  ExpectedBucketOwner?: string;
}
export interface PutBucketEncryptionRequest {
  Bucket: string | undefined;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
  ServerSideEncryptionConfiguration:
    | ServerSideEncryptionConfiguration
    | undefined;
  ExpectedBucketOwner?: string;
}
export interface PutBucketIntelligentTieringConfigurationRequest {
  Bucket: string | undefined;
  Id: string | undefined;
  IntelligentTieringConfiguration: IntelligentTieringConfiguration | undefined;
}
export interface PutBucketInventoryConfigurationRequest {
  Bucket: string | undefined;
  Id: string | undefined;
  InventoryConfiguration: InventoryConfiguration | undefined;
  ExpectedBucketOwner?: string;
}
export interface BucketLifecycleConfiguration {
  Rules: LifecycleRule[] | undefined;
}
export interface PutBucketLifecycleConfigurationRequest {
  Bucket: string | undefined;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
  LifecycleConfiguration?: BucketLifecycleConfiguration;
  ExpectedBucketOwner?: string;
}
export interface BucketLoggingStatus {
  LoggingEnabled?: LoggingEnabled;
}
export interface PutBucketLoggingRequest {
  Bucket: string | undefined;
  BucketLoggingStatus: BucketLoggingStatus | undefined;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
  ExpectedBucketOwner?: string;
}
export interface PutBucketMetricsConfigurationRequest {
  Bucket: string | undefined;
  Id: string | undefined;
  MetricsConfiguration: MetricsConfiguration | undefined;
  ExpectedBucketOwner?: string;
}
export interface PutBucketNotificationConfigurationRequest {
  Bucket: string | undefined;
  NotificationConfiguration: NotificationConfiguration | undefined;
  ExpectedBucketOwner?: string;
  SkipDestinationValidation?: boolean;
}
export interface PutBucketOwnershipControlsRequest {
  Bucket: string | undefined;
  ContentMD5?: string;
  ExpectedBucketOwner?: string;
  OwnershipControls: OwnershipControls | undefined;
}
export interface PutBucketPolicyRequest {
  Bucket: string | undefined;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
  ConfirmRemoveSelfBucketAccess?: boolean;
  Policy: string | undefined;
  ExpectedBucketOwner?: string;
}
export interface PutBucketReplicationRequest {
  Bucket: string | undefined;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
  ReplicationConfiguration: ReplicationConfiguration | undefined;
  Token?: string;
  ExpectedBucketOwner?: string;
}
export interface RequestPaymentConfiguration {
  Payer: Payer | string | undefined;
}
export interface PutBucketRequestPaymentRequest {
  Bucket: string | undefined;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
  RequestPaymentConfiguration: RequestPaymentConfiguration | undefined;
  ExpectedBucketOwner?: string;
}
export interface Tagging {
  TagSet: Tag[] | undefined;
}
export interface PutBucketTaggingRequest {
  Bucket: string | undefined;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
  Tagging: Tagging | undefined;
  ExpectedBucketOwner?: string;
}
export declare enum MFADelete {
  Disabled = "Disabled",
  Enabled = "Enabled",
}
export interface VersioningConfiguration {
  MFADelete?: MFADelete | string;
  Status?: BucketVersioningStatus | string;
}
export interface PutBucketVersioningRequest {
  Bucket: string | undefined;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
  MFA?: string;
  VersioningConfiguration: VersioningConfiguration | undefined;
  ExpectedBucketOwner?: string;
}
export interface WebsiteConfiguration {
  ErrorDocument?: ErrorDocument;
  IndexDocument?: IndexDocument;
  RedirectAllRequestsTo?: RedirectAllRequestsTo;
  RoutingRules?: RoutingRule[];
}
export interface PutBucketWebsiteRequest {
  Bucket: string | undefined;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
  WebsiteConfiguration: WebsiteConfiguration | undefined;
  ExpectedBucketOwner?: string;
}
export interface PutObjectOutput {
  Expiration?: string;
  ETag?: string;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
  ServerSideEncryption?: ServerSideEncryption | string;
  VersionId?: string;
  SSECustomerAlgorithm?: string;
  SSECustomerKeyMD5?: string;
  SSEKMSKeyId?: string;
  SSEKMSEncryptionContext?: string;
  BucketKeyEnabled?: boolean;
  RequestCharged?: RequestCharged | string;
}
export interface PutObjectRequest {
  ACL?: ObjectCannedACL | string;
  Body?: Readable | ReadableStream | Blob;
  Bucket: string | undefined;
  CacheControl?: string;
  ContentDisposition?: string;
  ContentEncoding?: string;
  ContentLanguage?: string;
  ContentLength?: number;
  ContentMD5?: string;
  ContentType?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
  Expires?: Date;
  GrantFullControl?: string;
  GrantRead?: string;
  GrantReadACP?: string;
  GrantWriteACP?: string;
  Key: string | undefined;
  Metadata?: Record<string, string>;
  ServerSideEncryption?: ServerSideEncryption | string;
  StorageClass?: StorageClass | string;
  WebsiteRedirectLocation?: string;
  SSECustomerAlgorithm?: string;
  SSECustomerKey?: string;
  SSECustomerKeyMD5?: string;
  SSEKMSKeyId?: string;
  SSEKMSEncryptionContext?: string;
  BucketKeyEnabled?: boolean;
  RequestPayer?: RequestPayer | string;
  Tagging?: string;
  ObjectLockMode?: ObjectLockMode | string;
  ObjectLockRetainUntilDate?: Date;
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;
  ExpectedBucketOwner?: string;
}
export interface PutObjectAclOutput {
  RequestCharged?: RequestCharged | string;
}
export interface PutObjectAclRequest {
  ACL?: ObjectCannedACL | string;
  AccessControlPolicy?: AccessControlPolicy;
  Bucket: string | undefined;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
  GrantFullControl?: string;
  GrantRead?: string;
  GrantReadACP?: string;
  GrantWrite?: string;
  GrantWriteACP?: string;
  Key: string | undefined;
  RequestPayer?: RequestPayer | string;
  VersionId?: string;
  ExpectedBucketOwner?: string;
}
export interface PutObjectLegalHoldOutput {
  RequestCharged?: RequestCharged | string;
}
export interface PutObjectLegalHoldRequest {
  Bucket: string | undefined;
  Key: string | undefined;
  LegalHold?: ObjectLockLegalHold;
  RequestPayer?: RequestPayer | string;
  VersionId?: string;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
  ExpectedBucketOwner?: string;
}
export interface PutObjectLockConfigurationOutput {
  RequestCharged?: RequestCharged | string;
}
export interface PutObjectLockConfigurationRequest {
  Bucket: string | undefined;
  ObjectLockConfiguration?: ObjectLockConfiguration;
  RequestPayer?: RequestPayer | string;
  Token?: string;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
  ExpectedBucketOwner?: string;
}
export declare const AbortIncompleteMultipartUploadFilterSensitiveLog: (
  obj: AbortIncompleteMultipartUpload
) => any;
export declare const AbortMultipartUploadOutputFilterSensitiveLog: (
  obj: AbortMultipartUploadOutput
) => any;
export declare const AbortMultipartUploadRequestFilterSensitiveLog: (
  obj: AbortMultipartUploadRequest
) => any;
export declare const AccelerateConfigurationFilterSensitiveLog: (
  obj: AccelerateConfiguration
) => any;
export declare const GranteeFilterSensitiveLog: (obj: Grantee) => any;
export declare const GrantFilterSensitiveLog: (obj: Grant) => any;
export declare const OwnerFilterSensitiveLog: (obj: Owner) => any;
export declare const AccessControlPolicyFilterSensitiveLog: (
  obj: AccessControlPolicy
) => any;
export declare const AccessControlTranslationFilterSensitiveLog: (
  obj: AccessControlTranslation
) => any;
export declare const CompleteMultipartUploadOutputFilterSensitiveLog: (
  obj: CompleteMultipartUploadOutput
) => any;
export declare const CompletedPartFilterSensitiveLog: (
  obj: CompletedPart
) => any;
export declare const CompletedMultipartUploadFilterSensitiveLog: (
  obj: CompletedMultipartUpload
) => any;
export declare const CompleteMultipartUploadRequestFilterSensitiveLog: (
  obj: CompleteMultipartUploadRequest
) => any;
export declare const CopyObjectResultFilterSensitiveLog: (
  obj: CopyObjectResult
) => any;
export declare const CopyObjectOutputFilterSensitiveLog: (
  obj: CopyObjectOutput
) => any;
export declare const CopyObjectRequestFilterSensitiveLog: (
  obj: CopyObjectRequest
) => any;
export declare const CreateBucketOutputFilterSensitiveLog: (
  obj: CreateBucketOutput
) => any;
export declare const CreateBucketConfigurationFilterSensitiveLog: (
  obj: CreateBucketConfiguration
) => any;
export declare const CreateBucketRequestFilterSensitiveLog: (
  obj: CreateBucketRequest
) => any;
export declare const CreateMultipartUploadOutputFilterSensitiveLog: (
  obj: CreateMultipartUploadOutput
) => any;
export declare const CreateMultipartUploadRequestFilterSensitiveLog: (
  obj: CreateMultipartUploadRequest
) => any;
export declare const DeleteBucketRequestFilterSensitiveLog: (
  obj: DeleteBucketRequest
) => any;
export declare const DeleteBucketAnalyticsConfigurationRequestFilterSensitiveLog: (
  obj: DeleteBucketAnalyticsConfigurationRequest
) => any;
export declare const DeleteBucketCorsRequestFilterSensitiveLog: (
  obj: DeleteBucketCorsRequest
) => any;
export declare const DeleteBucketEncryptionRequestFilterSensitiveLog: (
  obj: DeleteBucketEncryptionRequest
) => any;
export declare const DeleteBucketIntelligentTieringConfigurationRequestFilterSensitiveLog: (
  obj: DeleteBucketIntelligentTieringConfigurationRequest
) => any;
export declare const DeleteBucketInventoryConfigurationRequestFilterSensitiveLog: (
  obj: DeleteBucketInventoryConfigurationRequest
) => any;
export declare const DeleteBucketLifecycleRequestFilterSensitiveLog: (
  obj: DeleteBucketLifecycleRequest
) => any;
export declare const DeleteBucketMetricsConfigurationRequestFilterSensitiveLog: (
  obj: DeleteBucketMetricsConfigurationRequest
) => any;
export declare const DeleteBucketOwnershipControlsRequestFilterSensitiveLog: (
  obj: DeleteBucketOwnershipControlsRequest
) => any;
export declare const DeleteBucketPolicyRequestFilterSensitiveLog: (
  obj: DeleteBucketPolicyRequest
) => any;
export declare const DeleteBucketReplicationRequestFilterSensitiveLog: (
  obj: DeleteBucketReplicationRequest
) => any;
export declare const DeleteBucketTaggingRequestFilterSensitiveLog: (
  obj: DeleteBucketTaggingRequest
) => any;
export declare const DeleteBucketWebsiteRequestFilterSensitiveLog: (
  obj: DeleteBucketWebsiteRequest
) => any;
export declare const DeleteObjectOutputFilterSensitiveLog: (
  obj: DeleteObjectOutput
) => any;
export declare const DeleteObjectRequestFilterSensitiveLog: (
  obj: DeleteObjectRequest
) => any;
export declare const DeletedObjectFilterSensitiveLog: (
  obj: DeletedObject
) => any;
export declare const _ErrorFilterSensitiveLog: (obj: _Error) => any;
export declare const DeleteObjectsOutputFilterSensitiveLog: (
  obj: DeleteObjectsOutput
) => any;
export declare const ObjectIdentifierFilterSensitiveLog: (
  obj: ObjectIdentifier
) => any;
export declare const DeleteFilterSensitiveLog: (obj: Delete) => any;
export declare const DeleteObjectsRequestFilterSensitiveLog: (
  obj: DeleteObjectsRequest
) => any;
export declare const DeleteObjectTaggingOutputFilterSensitiveLog: (
  obj: DeleteObjectTaggingOutput
) => any;
export declare const DeleteObjectTaggingRequestFilterSensitiveLog: (
  obj: DeleteObjectTaggingRequest
) => any;
export declare const DeletePublicAccessBlockRequestFilterSensitiveLog: (
  obj: DeletePublicAccessBlockRequest
) => any;
export declare const GetBucketAccelerateConfigurationOutputFilterSensitiveLog: (
  obj: GetBucketAccelerateConfigurationOutput
) => any;
export declare const GetBucketAccelerateConfigurationRequestFilterSensitiveLog: (
  obj: GetBucketAccelerateConfigurationRequest
) => any;
export declare const GetBucketAclOutputFilterSensitiveLog: (
  obj: GetBucketAclOutput
) => any;
export declare const GetBucketAclRequestFilterSensitiveLog: (
  obj: GetBucketAclRequest
) => any;
export declare const TagFilterSensitiveLog: (obj: Tag) => any;
export declare const AnalyticsAndOperatorFilterSensitiveLog: (
  obj: AnalyticsAndOperator
) => any;
export declare const AnalyticsFilterFilterSensitiveLog: (
  obj: AnalyticsFilter
) => any;
export declare const AnalyticsS3BucketDestinationFilterSensitiveLog: (
  obj: AnalyticsS3BucketDestination
) => any;
export declare const AnalyticsExportDestinationFilterSensitiveLog: (
  obj: AnalyticsExportDestination
) => any;
export declare const StorageClassAnalysisDataExportFilterSensitiveLog: (
  obj: StorageClassAnalysisDataExport
) => any;
export declare const StorageClassAnalysisFilterSensitiveLog: (
  obj: StorageClassAnalysis
) => any;
export declare const AnalyticsConfigurationFilterSensitiveLog: (
  obj: AnalyticsConfiguration
) => any;
export declare const GetBucketAnalyticsConfigurationOutputFilterSensitiveLog: (
  obj: GetBucketAnalyticsConfigurationOutput
) => any;
export declare const GetBucketAnalyticsConfigurationRequestFilterSensitiveLog: (
  obj: GetBucketAnalyticsConfigurationRequest
) => any;
export declare const CORSRuleFilterSensitiveLog: (obj: CORSRule) => any;
export declare const GetBucketCorsOutputFilterSensitiveLog: (
  obj: GetBucketCorsOutput
) => any;
export declare const GetBucketCorsRequestFilterSensitiveLog: (
  obj: GetBucketCorsRequest
) => any;
export declare const ServerSideEncryptionByDefaultFilterSensitiveLog: (
  obj: ServerSideEncryptionByDefault
) => any;
export declare const ServerSideEncryptionRuleFilterSensitiveLog: (
  obj: ServerSideEncryptionRule
) => any;
export declare const ServerSideEncryptionConfigurationFilterSensitiveLog: (
  obj: ServerSideEncryptionConfiguration
) => any;
export declare const GetBucketEncryptionOutputFilterSensitiveLog: (
  obj: GetBucketEncryptionOutput
) => any;
export declare const GetBucketEncryptionRequestFilterSensitiveLog: (
  obj: GetBucketEncryptionRequest
) => any;
export declare const IntelligentTieringAndOperatorFilterSensitiveLog: (
  obj: IntelligentTieringAndOperator
) => any;
export declare const IntelligentTieringFilterFilterSensitiveLog: (
  obj: IntelligentTieringFilter
) => any;
export declare const TieringFilterSensitiveLog: (obj: Tiering) => any;
export declare const IntelligentTieringConfigurationFilterSensitiveLog: (
  obj: IntelligentTieringConfiguration
) => any;
export declare const GetBucketIntelligentTieringConfigurationOutputFilterSensitiveLog: (
  obj: GetBucketIntelligentTieringConfigurationOutput
) => any;
export declare const GetBucketIntelligentTieringConfigurationRequestFilterSensitiveLog: (
  obj: GetBucketIntelligentTieringConfigurationRequest
) => any;
export declare const SSEKMSFilterSensitiveLog: (obj: SSEKMS) => any;
export declare const SSES3FilterSensitiveLog: (obj: SSES3) => any;
export declare const InventoryEncryptionFilterSensitiveLog: (
  obj: InventoryEncryption
) => any;
export declare const InventoryS3BucketDestinationFilterSensitiveLog: (
  obj: InventoryS3BucketDestination
) => any;
export declare const InventoryDestinationFilterSensitiveLog: (
  obj: InventoryDestination
) => any;
export declare const InventoryFilterFilterSensitiveLog: (
  obj: InventoryFilter
) => any;
export declare const InventoryScheduleFilterSensitiveLog: (
  obj: InventorySchedule
) => any;
export declare const InventoryConfigurationFilterSensitiveLog: (
  obj: InventoryConfiguration
) => any;
export declare const GetBucketInventoryConfigurationOutputFilterSensitiveLog: (
  obj: GetBucketInventoryConfigurationOutput
) => any;
export declare const GetBucketInventoryConfigurationRequestFilterSensitiveLog: (
  obj: GetBucketInventoryConfigurationRequest
) => any;
export declare const LifecycleExpirationFilterSensitiveLog: (
  obj: LifecycleExpiration
) => any;
export declare const LifecycleRuleAndOperatorFilterSensitiveLog: (
  obj: LifecycleRuleAndOperator
) => any;
export declare const LifecycleRuleFilterFilterSensitiveLog: (
  obj: LifecycleRuleFilter
) => any;
export declare const NoncurrentVersionExpirationFilterSensitiveLog: (
  obj: NoncurrentVersionExpiration
) => any;
export declare const NoncurrentVersionTransitionFilterSensitiveLog: (
  obj: NoncurrentVersionTransition
) => any;
export declare const TransitionFilterSensitiveLog: (obj: Transition) => any;
export declare const LifecycleRuleFilterSensitiveLog: (
  obj: LifecycleRule
) => any;
export declare const GetBucketLifecycleConfigurationOutputFilterSensitiveLog: (
  obj: GetBucketLifecycleConfigurationOutput
) => any;
export declare const GetBucketLifecycleConfigurationRequestFilterSensitiveLog: (
  obj: GetBucketLifecycleConfigurationRequest
) => any;
export declare const GetBucketLocationOutputFilterSensitiveLog: (
  obj: GetBucketLocationOutput
) => any;
export declare const GetBucketLocationRequestFilterSensitiveLog: (
  obj: GetBucketLocationRequest
) => any;
export declare const TargetGrantFilterSensitiveLog: (obj: TargetGrant) => any;
export declare const LoggingEnabledFilterSensitiveLog: (
  obj: LoggingEnabled
) => any;
export declare const GetBucketLoggingOutputFilterSensitiveLog: (
  obj: GetBucketLoggingOutput
) => any;
export declare const GetBucketLoggingRequestFilterSensitiveLog: (
  obj: GetBucketLoggingRequest
) => any;
export declare const MetricsAndOperatorFilterSensitiveLog: (
  obj: MetricsAndOperator
) => any;
export declare const MetricsFilterFilterSensitiveLog: (
  obj: MetricsFilter
) => any;
export declare const MetricsConfigurationFilterSensitiveLog: (
  obj: MetricsConfiguration
) => any;
export declare const GetBucketMetricsConfigurationOutputFilterSensitiveLog: (
  obj: GetBucketMetricsConfigurationOutput
) => any;
export declare const GetBucketMetricsConfigurationRequestFilterSensitiveLog: (
  obj: GetBucketMetricsConfigurationRequest
) => any;
export declare const GetBucketNotificationConfigurationRequestFilterSensitiveLog: (
  obj: GetBucketNotificationConfigurationRequest
) => any;
export declare const EventBridgeConfigurationFilterSensitiveLog: (
  obj: EventBridgeConfiguration
) => any;
export declare const FilterRuleFilterSensitiveLog: (obj: FilterRule) => any;
export declare const S3KeyFilterFilterSensitiveLog: (obj: S3KeyFilter) => any;
export declare const NotificationConfigurationFilterFilterSensitiveLog: (
  obj: NotificationConfigurationFilter
) => any;
export declare const LambdaFunctionConfigurationFilterSensitiveLog: (
  obj: LambdaFunctionConfiguration
) => any;
export declare const QueueConfigurationFilterSensitiveLog: (
  obj: QueueConfiguration
) => any;
export declare const TopicConfigurationFilterSensitiveLog: (
  obj: TopicConfiguration
) => any;
export declare const NotificationConfigurationFilterSensitiveLog: (
  obj: NotificationConfiguration
) => any;
export declare const OwnershipControlsRuleFilterSensitiveLog: (
  obj: OwnershipControlsRule
) => any;
export declare const OwnershipControlsFilterSensitiveLog: (
  obj: OwnershipControls
) => any;
export declare const GetBucketOwnershipControlsOutputFilterSensitiveLog: (
  obj: GetBucketOwnershipControlsOutput
) => any;
export declare const GetBucketOwnershipControlsRequestFilterSensitiveLog: (
  obj: GetBucketOwnershipControlsRequest
) => any;
export declare const GetBucketPolicyOutputFilterSensitiveLog: (
  obj: GetBucketPolicyOutput
) => any;
export declare const GetBucketPolicyRequestFilterSensitiveLog: (
  obj: GetBucketPolicyRequest
) => any;
export declare const PolicyStatusFilterSensitiveLog: (obj: PolicyStatus) => any;
export declare const GetBucketPolicyStatusOutputFilterSensitiveLog: (
  obj: GetBucketPolicyStatusOutput
) => any;
export declare const GetBucketPolicyStatusRequestFilterSensitiveLog: (
  obj: GetBucketPolicyStatusRequest
) => any;
export declare const DeleteMarkerReplicationFilterSensitiveLog: (
  obj: DeleteMarkerReplication
) => any;
export declare const EncryptionConfigurationFilterSensitiveLog: (
  obj: EncryptionConfiguration
) => any;
export declare const ReplicationTimeValueFilterSensitiveLog: (
  obj: ReplicationTimeValue
) => any;
export declare const MetricsFilterSensitiveLog: (obj: Metrics) => any;
export declare const ReplicationTimeFilterSensitiveLog: (
  obj: ReplicationTime
) => any;
export declare const DestinationFilterSensitiveLog: (obj: Destination) => any;
export declare const ExistingObjectReplicationFilterSensitiveLog: (
  obj: ExistingObjectReplication
) => any;
export declare const ReplicationRuleAndOperatorFilterSensitiveLog: (
  obj: ReplicationRuleAndOperator
) => any;
export declare const ReplicationRuleFilterFilterSensitiveLog: (
  obj: ReplicationRuleFilter
) => any;
export declare const ReplicaModificationsFilterSensitiveLog: (
  obj: ReplicaModifications
) => any;
export declare const SseKmsEncryptedObjectsFilterSensitiveLog: (
  obj: SseKmsEncryptedObjects
) => any;
export declare const SourceSelectionCriteriaFilterSensitiveLog: (
  obj: SourceSelectionCriteria
) => any;
export declare const ReplicationRuleFilterSensitiveLog: (
  obj: ReplicationRule
) => any;
export declare const ReplicationConfigurationFilterSensitiveLog: (
  obj: ReplicationConfiguration
) => any;
export declare const GetBucketReplicationOutputFilterSensitiveLog: (
  obj: GetBucketReplicationOutput
) => any;
export declare const GetBucketReplicationRequestFilterSensitiveLog: (
  obj: GetBucketReplicationRequest
) => any;
export declare const GetBucketRequestPaymentOutputFilterSensitiveLog: (
  obj: GetBucketRequestPaymentOutput
) => any;
export declare const GetBucketRequestPaymentRequestFilterSensitiveLog: (
  obj: GetBucketRequestPaymentRequest
) => any;
export declare const GetBucketTaggingOutputFilterSensitiveLog: (
  obj: GetBucketTaggingOutput
) => any;
export declare const GetBucketTaggingRequestFilterSensitiveLog: (
  obj: GetBucketTaggingRequest
) => any;
export declare const GetBucketVersioningOutputFilterSensitiveLog: (
  obj: GetBucketVersioningOutput
) => any;
export declare const GetBucketVersioningRequestFilterSensitiveLog: (
  obj: GetBucketVersioningRequest
) => any;
export declare const ErrorDocumentFilterSensitiveLog: (
  obj: ErrorDocument
) => any;
export declare const IndexDocumentFilterSensitiveLog: (
  obj: IndexDocument
) => any;
export declare const RedirectAllRequestsToFilterSensitiveLog: (
  obj: RedirectAllRequestsTo
) => any;
export declare const ConditionFilterSensitiveLog: (obj: Condition) => any;
export declare const RedirectFilterSensitiveLog: (obj: Redirect) => any;
export declare const RoutingRuleFilterSensitiveLog: (obj: RoutingRule) => any;
export declare const GetBucketWebsiteOutputFilterSensitiveLog: (
  obj: GetBucketWebsiteOutput
) => any;
export declare const GetBucketWebsiteRequestFilterSensitiveLog: (
  obj: GetBucketWebsiteRequest
) => any;
export declare const GetObjectOutputFilterSensitiveLog: (
  obj: GetObjectOutput
) => any;
export declare const GetObjectRequestFilterSensitiveLog: (
  obj: GetObjectRequest
) => any;
export declare const GetObjectAclOutputFilterSensitiveLog: (
  obj: GetObjectAclOutput
) => any;
export declare const GetObjectAclRequestFilterSensitiveLog: (
  obj: GetObjectAclRequest
) => any;
export declare const ChecksumFilterSensitiveLog: (obj: Checksum) => any;
export declare const ObjectPartFilterSensitiveLog: (obj: ObjectPart) => any;
export declare const GetObjectAttributesPartsFilterSensitiveLog: (
  obj: GetObjectAttributesParts
) => any;
export declare const GetObjectAttributesOutputFilterSensitiveLog: (
  obj: GetObjectAttributesOutput
) => any;
export declare const GetObjectAttributesRequestFilterSensitiveLog: (
  obj: GetObjectAttributesRequest
) => any;
export declare const ObjectLockLegalHoldFilterSensitiveLog: (
  obj: ObjectLockLegalHold
) => any;
export declare const GetObjectLegalHoldOutputFilterSensitiveLog: (
  obj: GetObjectLegalHoldOutput
) => any;
export declare const GetObjectLegalHoldRequestFilterSensitiveLog: (
  obj: GetObjectLegalHoldRequest
) => any;
export declare const DefaultRetentionFilterSensitiveLog: (
  obj: DefaultRetention
) => any;
export declare const ObjectLockRuleFilterSensitiveLog: (
  obj: ObjectLockRule
) => any;
export declare const ObjectLockConfigurationFilterSensitiveLog: (
  obj: ObjectLockConfiguration
) => any;
export declare const GetObjectLockConfigurationOutputFilterSensitiveLog: (
  obj: GetObjectLockConfigurationOutput
) => any;
export declare const GetObjectLockConfigurationRequestFilterSensitiveLog: (
  obj: GetObjectLockConfigurationRequest
) => any;
export declare const ObjectLockRetentionFilterSensitiveLog: (
  obj: ObjectLockRetention
) => any;
export declare const GetObjectRetentionOutputFilterSensitiveLog: (
  obj: GetObjectRetentionOutput
) => any;
export declare const GetObjectRetentionRequestFilterSensitiveLog: (
  obj: GetObjectRetentionRequest
) => any;
export declare const GetObjectTaggingOutputFilterSensitiveLog: (
  obj: GetObjectTaggingOutput
) => any;
export declare const GetObjectTaggingRequestFilterSensitiveLog: (
  obj: GetObjectTaggingRequest
) => any;
export declare const GetObjectTorrentOutputFilterSensitiveLog: (
  obj: GetObjectTorrentOutput
) => any;
export declare const GetObjectTorrentRequestFilterSensitiveLog: (
  obj: GetObjectTorrentRequest
) => any;
export declare const PublicAccessBlockConfigurationFilterSensitiveLog: (
  obj: PublicAccessBlockConfiguration
) => any;
export declare const GetPublicAccessBlockOutputFilterSensitiveLog: (
  obj: GetPublicAccessBlockOutput
) => any;
export declare const GetPublicAccessBlockRequestFilterSensitiveLog: (
  obj: GetPublicAccessBlockRequest
) => any;
export declare const HeadBucketRequestFilterSensitiveLog: (
  obj: HeadBucketRequest
) => any;
export declare const HeadObjectOutputFilterSensitiveLog: (
  obj: HeadObjectOutput
) => any;
export declare const HeadObjectRequestFilterSensitiveLog: (
  obj: HeadObjectRequest
) => any;
export declare const ListBucketAnalyticsConfigurationsOutputFilterSensitiveLog: (
  obj: ListBucketAnalyticsConfigurationsOutput
) => any;
export declare const ListBucketAnalyticsConfigurationsRequestFilterSensitiveLog: (
  obj: ListBucketAnalyticsConfigurationsRequest
) => any;
export declare const ListBucketIntelligentTieringConfigurationsOutputFilterSensitiveLog: (
  obj: ListBucketIntelligentTieringConfigurationsOutput
) => any;
export declare const ListBucketIntelligentTieringConfigurationsRequestFilterSensitiveLog: (
  obj: ListBucketIntelligentTieringConfigurationsRequest
) => any;
export declare const ListBucketInventoryConfigurationsOutputFilterSensitiveLog: (
  obj: ListBucketInventoryConfigurationsOutput
) => any;
export declare const ListBucketInventoryConfigurationsRequestFilterSensitiveLog: (
  obj: ListBucketInventoryConfigurationsRequest
) => any;
export declare const ListBucketMetricsConfigurationsOutputFilterSensitiveLog: (
  obj: ListBucketMetricsConfigurationsOutput
) => any;
export declare const ListBucketMetricsConfigurationsRequestFilterSensitiveLog: (
  obj: ListBucketMetricsConfigurationsRequest
) => any;
export declare const BucketFilterSensitiveLog: (obj: Bucket) => any;
export declare const ListBucketsOutputFilterSensitiveLog: (
  obj: ListBucketsOutput
) => any;
export declare const CommonPrefixFilterSensitiveLog: (obj: CommonPrefix) => any;
export declare const InitiatorFilterSensitiveLog: (obj: Initiator) => any;
export declare const MultipartUploadFilterSensitiveLog: (
  obj: MultipartUpload
) => any;
export declare const ListMultipartUploadsOutputFilterSensitiveLog: (
  obj: ListMultipartUploadsOutput
) => any;
export declare const ListMultipartUploadsRequestFilterSensitiveLog: (
  obj: ListMultipartUploadsRequest
) => any;
export declare const _ObjectFilterSensitiveLog: (obj: _Object) => any;
export declare const ListObjectsOutputFilterSensitiveLog: (
  obj: ListObjectsOutput
) => any;
export declare const ListObjectsRequestFilterSensitiveLog: (
  obj: ListObjectsRequest
) => any;
export declare const ListObjectsV2OutputFilterSensitiveLog: (
  obj: ListObjectsV2Output
) => any;
export declare const ListObjectsV2RequestFilterSensitiveLog: (
  obj: ListObjectsV2Request
) => any;
export declare const DeleteMarkerEntryFilterSensitiveLog: (
  obj: DeleteMarkerEntry
) => any;
export declare const ObjectVersionFilterSensitiveLog: (
  obj: ObjectVersion
) => any;
export declare const ListObjectVersionsOutputFilterSensitiveLog: (
  obj: ListObjectVersionsOutput
) => any;
export declare const ListObjectVersionsRequestFilterSensitiveLog: (
  obj: ListObjectVersionsRequest
) => any;
export declare const PartFilterSensitiveLog: (obj: Part) => any;
export declare const ListPartsOutputFilterSensitiveLog: (
  obj: ListPartsOutput
) => any;
export declare const ListPartsRequestFilterSensitiveLog: (
  obj: ListPartsRequest
) => any;
export declare const PutBucketAccelerateConfigurationRequestFilterSensitiveLog: (
  obj: PutBucketAccelerateConfigurationRequest
) => any;
export declare const PutBucketAclRequestFilterSensitiveLog: (
  obj: PutBucketAclRequest
) => any;
export declare const PutBucketAnalyticsConfigurationRequestFilterSensitiveLog: (
  obj: PutBucketAnalyticsConfigurationRequest
) => any;
export declare const CORSConfigurationFilterSensitiveLog: (
  obj: CORSConfiguration
) => any;
export declare const PutBucketCorsRequestFilterSensitiveLog: (
  obj: PutBucketCorsRequest
) => any;
export declare const PutBucketEncryptionRequestFilterSensitiveLog: (
  obj: PutBucketEncryptionRequest
) => any;
export declare const PutBucketIntelligentTieringConfigurationRequestFilterSensitiveLog: (
  obj: PutBucketIntelligentTieringConfigurationRequest
) => any;
export declare const PutBucketInventoryConfigurationRequestFilterSensitiveLog: (
  obj: PutBucketInventoryConfigurationRequest
) => any;
export declare const BucketLifecycleConfigurationFilterSensitiveLog: (
  obj: BucketLifecycleConfiguration
) => any;
export declare const PutBucketLifecycleConfigurationRequestFilterSensitiveLog: (
  obj: PutBucketLifecycleConfigurationRequest
) => any;
export declare const BucketLoggingStatusFilterSensitiveLog: (
  obj: BucketLoggingStatus
) => any;
export declare const PutBucketLoggingRequestFilterSensitiveLog: (
  obj: PutBucketLoggingRequest
) => any;
export declare const PutBucketMetricsConfigurationRequestFilterSensitiveLog: (
  obj: PutBucketMetricsConfigurationRequest
) => any;
export declare const PutBucketNotificationConfigurationRequestFilterSensitiveLog: (
  obj: PutBucketNotificationConfigurationRequest
) => any;
export declare const PutBucketOwnershipControlsRequestFilterSensitiveLog: (
  obj: PutBucketOwnershipControlsRequest
) => any;
export declare const PutBucketPolicyRequestFilterSensitiveLog: (
  obj: PutBucketPolicyRequest
) => any;
export declare const PutBucketReplicationRequestFilterSensitiveLog: (
  obj: PutBucketReplicationRequest
) => any;
export declare const RequestPaymentConfigurationFilterSensitiveLog: (
  obj: RequestPaymentConfiguration
) => any;
export declare const PutBucketRequestPaymentRequestFilterSensitiveLog: (
  obj: PutBucketRequestPaymentRequest
) => any;
export declare const TaggingFilterSensitiveLog: (obj: Tagging) => any;
export declare const PutBucketTaggingRequestFilterSensitiveLog: (
  obj: PutBucketTaggingRequest
) => any;
export declare const VersioningConfigurationFilterSensitiveLog: (
  obj: VersioningConfiguration
) => any;
export declare const PutBucketVersioningRequestFilterSensitiveLog: (
  obj: PutBucketVersioningRequest
) => any;
export declare const WebsiteConfigurationFilterSensitiveLog: (
  obj: WebsiteConfiguration
) => any;
export declare const PutBucketWebsiteRequestFilterSensitiveLog: (
  obj: PutBucketWebsiteRequest
) => any;
export declare const PutObjectOutputFilterSensitiveLog: (
  obj: PutObjectOutput
) => any;
export declare const PutObjectRequestFilterSensitiveLog: (
  obj: PutObjectRequest
) => any;
export declare const PutObjectAclOutputFilterSensitiveLog: (
  obj: PutObjectAclOutput
) => any;
export declare const PutObjectAclRequestFilterSensitiveLog: (
  obj: PutObjectAclRequest
) => any;
export declare const PutObjectLegalHoldOutputFilterSensitiveLog: (
  obj: PutObjectLegalHoldOutput
) => any;
export declare const PutObjectLegalHoldRequestFilterSensitiveLog: (
  obj: PutObjectLegalHoldRequest
) => any;
export declare const PutObjectLockConfigurationOutputFilterSensitiveLog: (
  obj: PutObjectLockConfigurationOutput
) => any;
export declare const PutObjectLockConfigurationRequestFilterSensitiveLog: (
  obj: PutObjectLockConfigurationRequest
) => any;

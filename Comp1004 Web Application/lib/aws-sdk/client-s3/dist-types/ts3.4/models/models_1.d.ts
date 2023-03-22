import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { Readable } from "stream";
import {
  ChecksumAlgorithm,
  Grant,
  ObjectCannedACL,
  ObjectLockLegalHoldStatus,
  ObjectLockMode,
  ObjectLockRetention,
  PublicAccessBlockConfiguration,
  ReplicationStatus,
  RequestCharged,
  RequestPayer,
  ServerSideEncryption,
  StorageClass,
  Tagging,
} from "./models_0";
import { S3ServiceException as __BaseException } from "./S3ServiceException";
export interface PutObjectRetentionOutput {
  RequestCharged?: RequestCharged | string;
}
export interface PutObjectRetentionRequest {
  Bucket: string | undefined;
  Key: string | undefined;
  Retention?: ObjectLockRetention;
  RequestPayer?: RequestPayer | string;
  VersionId?: string;
  BypassGovernanceRetention?: boolean;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
  ExpectedBucketOwner?: string;
}
export interface PutObjectTaggingOutput {
  VersionId?: string;
}
export interface PutObjectTaggingRequest {
  Bucket: string | undefined;
  Key: string | undefined;
  VersionId?: string;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
  Tagging: Tagging | undefined;
  ExpectedBucketOwner?: string;
  RequestPayer?: RequestPayer | string;
}
export interface PutPublicAccessBlockRequest {
  Bucket: string | undefined;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
  PublicAccessBlockConfiguration: PublicAccessBlockConfiguration | undefined;
  ExpectedBucketOwner?: string;
}
export declare class ObjectAlreadyInActiveTierError extends __BaseException {
  readonly name: "ObjectAlreadyInActiveTierError";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<ObjectAlreadyInActiveTierError, __BaseException>
  );
}
export interface RestoreObjectOutput {
  RequestCharged?: RequestCharged | string;
  RestoreOutputPath?: string;
}
export declare enum Tier {
  Bulk = "Bulk",
  Expedited = "Expedited",
  Standard = "Standard",
}
export interface GlacierJobParameters {
  Tier: Tier | string | undefined;
}
export interface Encryption {
  EncryptionType: ServerSideEncryption | string | undefined;
  KMSKeyId?: string;
  KMSContext?: string;
}
export interface MetadataEntry {
  Name?: string;
  Value?: string;
}
export interface S3Location {
  BucketName: string | undefined;
  Prefix: string | undefined;
  Encryption?: Encryption;
  CannedACL?: ObjectCannedACL | string;
  AccessControlList?: Grant[];
  Tagging?: Tagging;
  UserMetadata?: MetadataEntry[];
  StorageClass?: StorageClass | string;
}
export interface OutputLocation {
  S3?: S3Location;
}
export declare enum ExpressionType {
  SQL = "SQL",
}
export declare enum CompressionType {
  BZIP2 = "BZIP2",
  GZIP = "GZIP",
  NONE = "NONE",
}
export declare enum FileHeaderInfo {
  IGNORE = "IGNORE",
  NONE = "NONE",
  USE = "USE",
}
export interface CSVInput {
  FileHeaderInfo?: FileHeaderInfo | string;
  Comments?: string;
  QuoteEscapeCharacter?: string;
  RecordDelimiter?: string;
  FieldDelimiter?: string;
  QuoteCharacter?: string;
  AllowQuotedRecordDelimiter?: boolean;
}
export declare enum JSONType {
  DOCUMENT = "DOCUMENT",
  LINES = "LINES",
}
export interface JSONInput {
  Type?: JSONType | string;
}
export interface ParquetInput {}
export interface InputSerialization {
  CSV?: CSVInput;
  CompressionType?: CompressionType | string;
  JSON?: JSONInput;
  Parquet?: ParquetInput;
}
export declare enum QuoteFields {
  ALWAYS = "ALWAYS",
  ASNEEDED = "ASNEEDED",
}
export interface CSVOutput {
  QuoteFields?: QuoteFields | string;
  QuoteEscapeCharacter?: string;
  RecordDelimiter?: string;
  FieldDelimiter?: string;
  QuoteCharacter?: string;
}
export interface JSONOutput {
  RecordDelimiter?: string;
}
export interface OutputSerialization {
  CSV?: CSVOutput;
  JSON?: JSONOutput;
}
export interface SelectParameters {
  InputSerialization: InputSerialization | undefined;
  ExpressionType: ExpressionType | string | undefined;
  Expression: string | undefined;
  OutputSerialization: OutputSerialization | undefined;
}
export declare enum RestoreRequestType {
  SELECT = "SELECT",
}
export interface RestoreRequest {
  Days?: number;
  GlacierJobParameters?: GlacierJobParameters;
  Type?: RestoreRequestType | string;
  Tier?: Tier | string;
  Description?: string;
  SelectParameters?: SelectParameters;
  OutputLocation?: OutputLocation;
}
export interface RestoreObjectRequest {
  Bucket: string | undefined;
  Key: string | undefined;
  VersionId?: string;
  RestoreRequest?: RestoreRequest;
  RequestPayer?: RequestPayer | string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
  ExpectedBucketOwner?: string;
}
export interface ContinuationEvent {}
export interface EndEvent {}
export interface Progress {
  BytesScanned?: number;
  BytesProcessed?: number;
  BytesReturned?: number;
}
export interface ProgressEvent {
  Details?: Progress;
}
export interface RecordsEvent {
  Payload?: Uint8Array;
}
export interface Stats {
  BytesScanned?: number;
  BytesProcessed?: number;
  BytesReturned?: number;
}
export interface StatsEvent {
  Details?: Stats;
}
export type SelectObjectContentEventStream =
  | SelectObjectContentEventStream.ContMember
  | SelectObjectContentEventStream.EndMember
  | SelectObjectContentEventStream.ProgressMember
  | SelectObjectContentEventStream.RecordsMember
  | SelectObjectContentEventStream.StatsMember
  | SelectObjectContentEventStream.$UnknownMember;
export declare namespace SelectObjectContentEventStream {
  interface RecordsMember {
    Records: RecordsEvent;
    Stats?: never;
    Progress?: never;
    Cont?: never;
    End?: never;
    $unknown?: never;
  }
  interface StatsMember {
    Records?: never;
    Stats: StatsEvent;
    Progress?: never;
    Cont?: never;
    End?: never;
    $unknown?: never;
  }
  interface ProgressMember {
    Records?: never;
    Stats?: never;
    Progress: ProgressEvent;
    Cont?: never;
    End?: never;
    $unknown?: never;
  }
  interface ContMember {
    Records?: never;
    Stats?: never;
    Progress?: never;
    Cont: ContinuationEvent;
    End?: never;
    $unknown?: never;
  }
  interface EndMember {
    Records?: never;
    Stats?: never;
    Progress?: never;
    Cont?: never;
    End: EndEvent;
    $unknown?: never;
  }
  interface $UnknownMember {
    Records?: never;
    Stats?: never;
    Progress?: never;
    Cont?: never;
    End?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    Records: (value: RecordsEvent) => T;
    Stats: (value: StatsEvent) => T;
    Progress: (value: ProgressEvent) => T;
    Cont: (value: ContinuationEvent) => T;
    End: (value: EndEvent) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(
    value: SelectObjectContentEventStream,
    visitor: Visitor<T>
  ) => T;
}
export interface SelectObjectContentOutput {
  Payload?: AsyncIterable<SelectObjectContentEventStream>;
}
export interface RequestProgress {
  Enabled?: boolean;
}
export interface ScanRange {
  Start?: number;
  End?: number;
}
export interface SelectObjectContentRequest {
  Bucket: string | undefined;
  Key: string | undefined;
  SSECustomerAlgorithm?: string;
  SSECustomerKey?: string;
  SSECustomerKeyMD5?: string;
  Expression: string | undefined;
  ExpressionType: ExpressionType | string | undefined;
  RequestProgress?: RequestProgress;
  InputSerialization: InputSerialization | undefined;
  OutputSerialization: OutputSerialization | undefined;
  ScanRange?: ScanRange;
  ExpectedBucketOwner?: string;
}
export interface UploadPartOutput {
  ServerSideEncryption?: ServerSideEncryption | string;
  ETag?: string;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
  SSECustomerAlgorithm?: string;
  SSECustomerKeyMD5?: string;
  SSEKMSKeyId?: string;
  BucketKeyEnabled?: boolean;
  RequestCharged?: RequestCharged | string;
}
export interface UploadPartRequest {
  Body?: Readable | ReadableStream | Blob;
  Bucket: string | undefined;
  ContentLength?: number;
  ContentMD5?: string;
  ChecksumAlgorithm?: ChecksumAlgorithm | string;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
  Key: string | undefined;
  PartNumber: number | undefined;
  UploadId: string | undefined;
  SSECustomerAlgorithm?: string;
  SSECustomerKey?: string;
  SSECustomerKeyMD5?: string;
  RequestPayer?: RequestPayer | string;
  ExpectedBucketOwner?: string;
}
export interface CopyPartResult {
  ETag?: string;
  LastModified?: Date;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
}
export interface UploadPartCopyOutput {
  CopySourceVersionId?: string;
  CopyPartResult?: CopyPartResult;
  ServerSideEncryption?: ServerSideEncryption | string;
  SSECustomerAlgorithm?: string;
  SSECustomerKeyMD5?: string;
  SSEKMSKeyId?: string;
  BucketKeyEnabled?: boolean;
  RequestCharged?: RequestCharged | string;
}
export interface UploadPartCopyRequest {
  Bucket: string | undefined;
  CopySource: string | undefined;
  CopySourceIfMatch?: string;
  CopySourceIfModifiedSince?: Date;
  CopySourceIfNoneMatch?: string;
  CopySourceIfUnmodifiedSince?: Date;
  CopySourceRange?: string;
  Key: string | undefined;
  PartNumber: number | undefined;
  UploadId: string | undefined;
  SSECustomerAlgorithm?: string;
  SSECustomerKey?: string;
  SSECustomerKeyMD5?: string;
  CopySourceSSECustomerAlgorithm?: string;
  CopySourceSSECustomerKey?: string;
  CopySourceSSECustomerKeyMD5?: string;
  RequestPayer?: RequestPayer | string;
  ExpectedBucketOwner?: string;
  ExpectedSourceBucketOwner?: string;
}
export interface WriteGetObjectResponseRequest {
  RequestRoute: string | undefined;
  RequestToken: string | undefined;
  Body?: Readable | ReadableStream | Blob;
  StatusCode?: number;
  ErrorCode?: string;
  ErrorMessage?: string;
  AcceptRanges?: string;
  CacheControl?: string;
  ContentDisposition?: string;
  ContentEncoding?: string;
  ContentLanguage?: string;
  ContentLength?: number;
  ContentRange?: string;
  ContentType?: string;
  ChecksumCRC32?: string;
  ChecksumCRC32C?: string;
  ChecksumSHA1?: string;
  ChecksumSHA256?: string;
  DeleteMarker?: boolean;
  ETag?: string;
  Expires?: Date;
  Expiration?: string;
  LastModified?: Date;
  MissingMeta?: number;
  Metadata?: Record<string, string>;
  ObjectLockMode?: ObjectLockMode | string;
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;
  ObjectLockRetainUntilDate?: Date;
  PartsCount?: number;
  ReplicationStatus?: ReplicationStatus | string;
  RequestCharged?: RequestCharged | string;
  Restore?: string;
  ServerSideEncryption?: ServerSideEncryption | string;
  SSECustomerAlgorithm?: string;
  SSEKMSKeyId?: string;
  SSECustomerKeyMD5?: string;
  StorageClass?: StorageClass | string;
  TagCount?: number;
  VersionId?: string;
  BucketKeyEnabled?: boolean;
}
export declare const PutObjectRetentionOutputFilterSensitiveLog: (
  obj: PutObjectRetentionOutput
) => any;
export declare const PutObjectRetentionRequestFilterSensitiveLog: (
  obj: PutObjectRetentionRequest
) => any;
export declare const PutObjectTaggingOutputFilterSensitiveLog: (
  obj: PutObjectTaggingOutput
) => any;
export declare const PutObjectTaggingRequestFilterSensitiveLog: (
  obj: PutObjectTaggingRequest
) => any;
export declare const PutPublicAccessBlockRequestFilterSensitiveLog: (
  obj: PutPublicAccessBlockRequest
) => any;
export declare const RestoreObjectOutputFilterSensitiveLog: (
  obj: RestoreObjectOutput
) => any;
export declare const GlacierJobParametersFilterSensitiveLog: (
  obj: GlacierJobParameters
) => any;
export declare const EncryptionFilterSensitiveLog: (obj: Encryption) => any;
export declare const MetadataEntryFilterSensitiveLog: (
  obj: MetadataEntry
) => any;
export declare const S3LocationFilterSensitiveLog: (obj: S3Location) => any;
export declare const OutputLocationFilterSensitiveLog: (
  obj: OutputLocation
) => any;
export declare const CSVInputFilterSensitiveLog: (obj: CSVInput) => any;
export declare const JSONInputFilterSensitiveLog: (obj: JSONInput) => any;
export declare const ParquetInputFilterSensitiveLog: (obj: ParquetInput) => any;
export declare const InputSerializationFilterSensitiveLog: (
  obj: InputSerialization
) => any;
export declare const CSVOutputFilterSensitiveLog: (obj: CSVOutput) => any;
export declare const JSONOutputFilterSensitiveLog: (obj: JSONOutput) => any;
export declare const OutputSerializationFilterSensitiveLog: (
  obj: OutputSerialization
) => any;
export declare const SelectParametersFilterSensitiveLog: (
  obj: SelectParameters
) => any;
export declare const RestoreRequestFilterSensitiveLog: (
  obj: RestoreRequest
) => any;
export declare const RestoreObjectRequestFilterSensitiveLog: (
  obj: RestoreObjectRequest
) => any;
export declare const ContinuationEventFilterSensitiveLog: (
  obj: ContinuationEvent
) => any;
export declare const EndEventFilterSensitiveLog: (obj: EndEvent) => any;
export declare const ProgressFilterSensitiveLog: (obj: Progress) => any;
export declare const ProgressEventFilterSensitiveLog: (
  obj: ProgressEvent
) => any;
export declare const RecordsEventFilterSensitiveLog: (obj: RecordsEvent) => any;
export declare const StatsFilterSensitiveLog: (obj: Stats) => any;
export declare const StatsEventFilterSensitiveLog: (obj: StatsEvent) => any;
export declare const SelectObjectContentEventStreamFilterSensitiveLog: (
  obj: SelectObjectContentEventStream
) => any;
export declare const SelectObjectContentOutputFilterSensitiveLog: (
  obj: SelectObjectContentOutput
) => any;
export declare const RequestProgressFilterSensitiveLog: (
  obj: RequestProgress
) => any;
export declare const ScanRangeFilterSensitiveLog: (obj: ScanRange) => any;
export declare const SelectObjectContentRequestFilterSensitiveLog: (
  obj: SelectObjectContentRequest
) => any;
export declare const UploadPartOutputFilterSensitiveLog: (
  obj: UploadPartOutput
) => any;
export declare const UploadPartRequestFilterSensitiveLog: (
  obj: UploadPartRequest
) => any;
export declare const CopyPartResultFilterSensitiveLog: (
  obj: CopyPartResult
) => any;
export declare const UploadPartCopyOutputFilterSensitiveLog: (
  obj: UploadPartCopyOutput
) => any;
export declare const UploadPartCopyRequestFilterSensitiveLog: (
  obj: UploadPartCopyRequest
) => any;
export declare const WriteGetObjectResponseRequestFilterSensitiveLog: (
  obj: WriteGetObjectResponseRequest
) => any;

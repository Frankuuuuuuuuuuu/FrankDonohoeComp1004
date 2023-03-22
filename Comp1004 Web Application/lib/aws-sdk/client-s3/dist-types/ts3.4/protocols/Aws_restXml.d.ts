import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import {
  EventStreamSerdeContext as __EventStreamSerdeContext,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import {
  AbortMultipartUploadCommandInput,
  AbortMultipartUploadCommandOutput,
} from "../commands/AbortMultipartUploadCommand";
import {
  CompleteMultipartUploadCommandInput,
  CompleteMultipartUploadCommandOutput,
} from "../commands/CompleteMultipartUploadCommand";
import {
  CopyObjectCommandInput,
  CopyObjectCommandOutput,
} from "../commands/CopyObjectCommand";
import {
  CreateBucketCommandInput,
  CreateBucketCommandOutput,
} from "../commands/CreateBucketCommand";
import {
  CreateMultipartUploadCommandInput,
  CreateMultipartUploadCommandOutput,
} from "../commands/CreateMultipartUploadCommand";
import {
  DeleteBucketAnalyticsConfigurationCommandInput,
  DeleteBucketAnalyticsConfigurationCommandOutput,
} from "../commands/DeleteBucketAnalyticsConfigurationCommand";
import {
  DeleteBucketCommandInput,
  DeleteBucketCommandOutput,
} from "../commands/DeleteBucketCommand";
import {
  DeleteBucketCorsCommandInput,
  DeleteBucketCorsCommandOutput,
} from "../commands/DeleteBucketCorsCommand";
import {
  DeleteBucketEncryptionCommandInput,
  DeleteBucketEncryptionCommandOutput,
} from "../commands/DeleteBucketEncryptionCommand";
import {
  DeleteBucketIntelligentTieringConfigurationCommandInput,
  DeleteBucketIntelligentTieringConfigurationCommandOutput,
} from "../commands/DeleteBucketIntelligentTieringConfigurationCommand";
import {
  DeleteBucketInventoryConfigurationCommandInput,
  DeleteBucketInventoryConfigurationCommandOutput,
} from "../commands/DeleteBucketInventoryConfigurationCommand";
import {
  DeleteBucketLifecycleCommandInput,
  DeleteBucketLifecycleCommandOutput,
} from "../commands/DeleteBucketLifecycleCommand";
import {
  DeleteBucketMetricsConfigurationCommandInput,
  DeleteBucketMetricsConfigurationCommandOutput,
} from "../commands/DeleteBucketMetricsConfigurationCommand";
import {
  DeleteBucketOwnershipControlsCommandInput,
  DeleteBucketOwnershipControlsCommandOutput,
} from "../commands/DeleteBucketOwnershipControlsCommand";
import {
  DeleteBucketPolicyCommandInput,
  DeleteBucketPolicyCommandOutput,
} from "../commands/DeleteBucketPolicyCommand";
import {
  DeleteBucketReplicationCommandInput,
  DeleteBucketReplicationCommandOutput,
} from "../commands/DeleteBucketReplicationCommand";
import {
  DeleteBucketTaggingCommandInput,
  DeleteBucketTaggingCommandOutput,
} from "../commands/DeleteBucketTaggingCommand";
import {
  DeleteBucketWebsiteCommandInput,
  DeleteBucketWebsiteCommandOutput,
} from "../commands/DeleteBucketWebsiteCommand";
import {
  DeleteObjectCommandInput,
  DeleteObjectCommandOutput,
} from "../commands/DeleteObjectCommand";
import {
  DeleteObjectsCommandInput,
  DeleteObjectsCommandOutput,
} from "../commands/DeleteObjectsCommand";
import {
  DeleteObjectTaggingCommandInput,
  DeleteObjectTaggingCommandOutput,
} from "../commands/DeleteObjectTaggingCommand";
import {
  DeletePublicAccessBlockCommandInput,
  DeletePublicAccessBlockCommandOutput,
} from "../commands/DeletePublicAccessBlockCommand";
import {
  GetBucketAccelerateConfigurationCommandInput,
  GetBucketAccelerateConfigurationCommandOutput,
} from "../commands/GetBucketAccelerateConfigurationCommand";
import {
  GetBucketAclCommandInput,
  GetBucketAclCommandOutput,
} from "../commands/GetBucketAclCommand";
import {
  GetBucketAnalyticsConfigurationCommandInput,
  GetBucketAnalyticsConfigurationCommandOutput,
} from "../commands/GetBucketAnalyticsConfigurationCommand";
import {
  GetBucketCorsCommandInput,
  GetBucketCorsCommandOutput,
} from "../commands/GetBucketCorsCommand";
import {
  GetBucketEncryptionCommandInput,
  GetBucketEncryptionCommandOutput,
} from "../commands/GetBucketEncryptionCommand";
import {
  GetBucketIntelligentTieringConfigurationCommandInput,
  GetBucketIntelligentTieringConfigurationCommandOutput,
} from "../commands/GetBucketIntelligentTieringConfigurationCommand";
import {
  GetBucketInventoryConfigurationCommandInput,
  GetBucketInventoryConfigurationCommandOutput,
} from "../commands/GetBucketInventoryConfigurationCommand";
import {
  GetBucketLifecycleConfigurationCommandInput,
  GetBucketLifecycleConfigurationCommandOutput,
} from "../commands/GetBucketLifecycleConfigurationCommand";
import {
  GetBucketLocationCommandInput,
  GetBucketLocationCommandOutput,
} from "../commands/GetBucketLocationCommand";
import {
  GetBucketLoggingCommandInput,
  GetBucketLoggingCommandOutput,
} from "../commands/GetBucketLoggingCommand";
import {
  GetBucketMetricsConfigurationCommandInput,
  GetBucketMetricsConfigurationCommandOutput,
} from "../commands/GetBucketMetricsConfigurationCommand";
import {
  GetBucketNotificationConfigurationCommandInput,
  GetBucketNotificationConfigurationCommandOutput,
} from "../commands/GetBucketNotificationConfigurationCommand";
import {
  GetBucketOwnershipControlsCommandInput,
  GetBucketOwnershipControlsCommandOutput,
} from "../commands/GetBucketOwnershipControlsCommand";
import {
  GetBucketPolicyCommandInput,
  GetBucketPolicyCommandOutput,
} from "../commands/GetBucketPolicyCommand";
import {
  GetBucketPolicyStatusCommandInput,
  GetBucketPolicyStatusCommandOutput,
} from "../commands/GetBucketPolicyStatusCommand";
import {
  GetBucketReplicationCommandInput,
  GetBucketReplicationCommandOutput,
} from "../commands/GetBucketReplicationCommand";
import {
  GetBucketRequestPaymentCommandInput,
  GetBucketRequestPaymentCommandOutput,
} from "../commands/GetBucketRequestPaymentCommand";
import {
  GetBucketTaggingCommandInput,
  GetBucketTaggingCommandOutput,
} from "../commands/GetBucketTaggingCommand";
import {
  GetBucketVersioningCommandInput,
  GetBucketVersioningCommandOutput,
} from "../commands/GetBucketVersioningCommand";
import {
  GetBucketWebsiteCommandInput,
  GetBucketWebsiteCommandOutput,
} from "../commands/GetBucketWebsiteCommand";
import {
  GetObjectAclCommandInput,
  GetObjectAclCommandOutput,
} from "../commands/GetObjectAclCommand";
import {
  GetObjectAttributesCommandInput,
  GetObjectAttributesCommandOutput,
} from "../commands/GetObjectAttributesCommand";
import {
  GetObjectCommandInput,
  GetObjectCommandOutput,
} from "../commands/GetObjectCommand";
import {
  GetObjectLegalHoldCommandInput,
  GetObjectLegalHoldCommandOutput,
} from "../commands/GetObjectLegalHoldCommand";
import {
  GetObjectLockConfigurationCommandInput,
  GetObjectLockConfigurationCommandOutput,
} from "../commands/GetObjectLockConfigurationCommand";
import {
  GetObjectRetentionCommandInput,
  GetObjectRetentionCommandOutput,
} from "../commands/GetObjectRetentionCommand";
import {
  GetObjectTaggingCommandInput,
  GetObjectTaggingCommandOutput,
} from "../commands/GetObjectTaggingCommand";
import {
  GetObjectTorrentCommandInput,
  GetObjectTorrentCommandOutput,
} from "../commands/GetObjectTorrentCommand";
import {
  GetPublicAccessBlockCommandInput,
  GetPublicAccessBlockCommandOutput,
} from "../commands/GetPublicAccessBlockCommand";
import {
  HeadBucketCommandInput,
  HeadBucketCommandOutput,
} from "../commands/HeadBucketCommand";
import {
  HeadObjectCommandInput,
  HeadObjectCommandOutput,
} from "../commands/HeadObjectCommand";
import {
  ListBucketAnalyticsConfigurationsCommandInput,
  ListBucketAnalyticsConfigurationsCommandOutput,
} from "../commands/ListBucketAnalyticsConfigurationsCommand";
import {
  ListBucketIntelligentTieringConfigurationsCommandInput,
  ListBucketIntelligentTieringConfigurationsCommandOutput,
} from "../commands/ListBucketIntelligentTieringConfigurationsCommand";
import {
  ListBucketInventoryConfigurationsCommandInput,
  ListBucketInventoryConfigurationsCommandOutput,
} from "../commands/ListBucketInventoryConfigurationsCommand";
import {
  ListBucketMetricsConfigurationsCommandInput,
  ListBucketMetricsConfigurationsCommandOutput,
} from "../commands/ListBucketMetricsConfigurationsCommand";
import {
  ListBucketsCommandInput,
  ListBucketsCommandOutput,
} from "../commands/ListBucketsCommand";
import {
  ListMultipartUploadsCommandInput,
  ListMultipartUploadsCommandOutput,
} from "../commands/ListMultipartUploadsCommand";
import {
  ListObjectsCommandInput,
  ListObjectsCommandOutput,
} from "../commands/ListObjectsCommand";
import {
  ListObjectsV2CommandInput,
  ListObjectsV2CommandOutput,
} from "../commands/ListObjectsV2Command";
import {
  ListObjectVersionsCommandInput,
  ListObjectVersionsCommandOutput,
} from "../commands/ListObjectVersionsCommand";
import {
  ListPartsCommandInput,
  ListPartsCommandOutput,
} from "../commands/ListPartsCommand";
import {
  PutBucketAccelerateConfigurationCommandInput,
  PutBucketAccelerateConfigurationCommandOutput,
} from "../commands/PutBucketAccelerateConfigurationCommand";
import {
  PutBucketAclCommandInput,
  PutBucketAclCommandOutput,
} from "../commands/PutBucketAclCommand";
import {
  PutBucketAnalyticsConfigurationCommandInput,
  PutBucketAnalyticsConfigurationCommandOutput,
} from "../commands/PutBucketAnalyticsConfigurationCommand";
import {
  PutBucketCorsCommandInput,
  PutBucketCorsCommandOutput,
} from "../commands/PutBucketCorsCommand";
import {
  PutBucketEncryptionCommandInput,
  PutBucketEncryptionCommandOutput,
} from "../commands/PutBucketEncryptionCommand";
import {
  PutBucketIntelligentTieringConfigurationCommandInput,
  PutBucketIntelligentTieringConfigurationCommandOutput,
} from "../commands/PutBucketIntelligentTieringConfigurationCommand";
import {
  PutBucketInventoryConfigurationCommandInput,
  PutBucketInventoryConfigurationCommandOutput,
} from "../commands/PutBucketInventoryConfigurationCommand";
import {
  PutBucketLifecycleConfigurationCommandInput,
  PutBucketLifecycleConfigurationCommandOutput,
} from "../commands/PutBucketLifecycleConfigurationCommand";
import {
  PutBucketLoggingCommandInput,
  PutBucketLoggingCommandOutput,
} from "../commands/PutBucketLoggingCommand";
import {
  PutBucketMetricsConfigurationCommandInput,
  PutBucketMetricsConfigurationCommandOutput,
} from "../commands/PutBucketMetricsConfigurationCommand";
import {
  PutBucketNotificationConfigurationCommandInput,
  PutBucketNotificationConfigurationCommandOutput,
} from "../commands/PutBucketNotificationConfigurationCommand";
import {
  PutBucketOwnershipControlsCommandInput,
  PutBucketOwnershipControlsCommandOutput,
} from "../commands/PutBucketOwnershipControlsCommand";
import {
  PutBucketPolicyCommandInput,
  PutBucketPolicyCommandOutput,
} from "../commands/PutBucketPolicyCommand";
import {
  PutBucketReplicationCommandInput,
  PutBucketReplicationCommandOutput,
} from "../commands/PutBucketReplicationCommand";
import {
  PutBucketRequestPaymentCommandInput,
  PutBucketRequestPaymentCommandOutput,
} from "../commands/PutBucketRequestPaymentCommand";
import {
  PutBucketTaggingCommandInput,
  PutBucketTaggingCommandOutput,
} from "../commands/PutBucketTaggingCommand";
import {
  PutBucketVersioningCommandInput,
  PutBucketVersioningCommandOutput,
} from "../commands/PutBucketVersioningCommand";
import {
  PutBucketWebsiteCommandInput,
  PutBucketWebsiteCommandOutput,
} from "../commands/PutBucketWebsiteCommand";
import {
  PutObjectAclCommandInput,
  PutObjectAclCommandOutput,
} from "../commands/PutObjectAclCommand";
import {
  PutObjectCommandInput,
  PutObjectCommandOutput,
} from "../commands/PutObjectCommand";
import {
  PutObjectLegalHoldCommandInput,
  PutObjectLegalHoldCommandOutput,
} from "../commands/PutObjectLegalHoldCommand";
import {
  PutObjectLockConfigurationCommandInput,
  PutObjectLockConfigurationCommandOutput,
} from "../commands/PutObjectLockConfigurationCommand";
import {
  PutObjectRetentionCommandInput,
  PutObjectRetentionCommandOutput,
} from "../commands/PutObjectRetentionCommand";
import {
  PutObjectTaggingCommandInput,
  PutObjectTaggingCommandOutput,
} from "../commands/PutObjectTaggingCommand";
import {
  PutPublicAccessBlockCommandInput,
  PutPublicAccessBlockCommandOutput,
} from "../commands/PutPublicAccessBlockCommand";
import {
  RestoreObjectCommandInput,
  RestoreObjectCommandOutput,
} from "../commands/RestoreObjectCommand";
import {
  SelectObjectContentCommandInput,
  SelectObjectContentCommandOutput,
} from "../commands/SelectObjectContentCommand";
import {
  UploadPartCommandInput,
  UploadPartCommandOutput,
} from "../commands/UploadPartCommand";
import {
  UploadPartCopyCommandInput,
  UploadPartCopyCommandOutput,
} from "../commands/UploadPartCopyCommand";
import {
  WriteGetObjectResponseCommandInput,
  WriteGetObjectResponseCommandOutput,
} from "../commands/WriteGetObjectResponseCommand";
export declare const serializeAws_restXmlAbortMultipartUploadCommand: (
  input: AbortMultipartUploadCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlCompleteMultipartUploadCommand: (
  input: CompleteMultipartUploadCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlCopyObjectCommand: (
  input: CopyObjectCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlCreateBucketCommand: (
  input: CreateBucketCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlCreateMultipartUploadCommand: (
  input: CreateMultipartUploadCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlDeleteBucketCommand: (
  input: DeleteBucketCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand: (
  input: DeleteBucketAnalyticsConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlDeleteBucketCorsCommand: (
  input: DeleteBucketCorsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlDeleteBucketEncryptionCommand: (
  input: DeleteBucketEncryptionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommand: (
  input: DeleteBucketIntelligentTieringConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlDeleteBucketInventoryConfigurationCommand: (
  input: DeleteBucketInventoryConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlDeleteBucketLifecycleCommand: (
  input: DeleteBucketLifecycleCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlDeleteBucketMetricsConfigurationCommand: (
  input: DeleteBucketMetricsConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlDeleteBucketOwnershipControlsCommand: (
  input: DeleteBucketOwnershipControlsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlDeleteBucketPolicyCommand: (
  input: DeleteBucketPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlDeleteBucketReplicationCommand: (
  input: DeleteBucketReplicationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlDeleteBucketTaggingCommand: (
  input: DeleteBucketTaggingCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlDeleteBucketWebsiteCommand: (
  input: DeleteBucketWebsiteCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlDeleteObjectCommand: (
  input: DeleteObjectCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlDeleteObjectsCommand: (
  input: DeleteObjectsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlDeleteObjectTaggingCommand: (
  input: DeleteObjectTaggingCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlDeletePublicAccessBlockCommand: (
  input: DeletePublicAccessBlockCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetBucketAccelerateConfigurationCommand: (
  input: GetBucketAccelerateConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetBucketAclCommand: (
  input: GetBucketAclCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetBucketAnalyticsConfigurationCommand: (
  input: GetBucketAnalyticsConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetBucketCorsCommand: (
  input: GetBucketCorsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetBucketEncryptionCommand: (
  input: GetBucketEncryptionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetBucketIntelligentTieringConfigurationCommand: (
  input: GetBucketIntelligentTieringConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetBucketInventoryConfigurationCommand: (
  input: GetBucketInventoryConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetBucketLifecycleConfigurationCommand: (
  input: GetBucketLifecycleConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetBucketLocationCommand: (
  input: GetBucketLocationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetBucketLoggingCommand: (
  input: GetBucketLoggingCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetBucketMetricsConfigurationCommand: (
  input: GetBucketMetricsConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetBucketNotificationConfigurationCommand: (
  input: GetBucketNotificationConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetBucketOwnershipControlsCommand: (
  input: GetBucketOwnershipControlsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetBucketPolicyCommand: (
  input: GetBucketPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetBucketPolicyStatusCommand: (
  input: GetBucketPolicyStatusCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetBucketReplicationCommand: (
  input: GetBucketReplicationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetBucketRequestPaymentCommand: (
  input: GetBucketRequestPaymentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetBucketTaggingCommand: (
  input: GetBucketTaggingCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetBucketVersioningCommand: (
  input: GetBucketVersioningCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetBucketWebsiteCommand: (
  input: GetBucketWebsiteCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetObjectCommand: (
  input: GetObjectCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetObjectAclCommand: (
  input: GetObjectAclCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetObjectAttributesCommand: (
  input: GetObjectAttributesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetObjectLegalHoldCommand: (
  input: GetObjectLegalHoldCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetObjectLockConfigurationCommand: (
  input: GetObjectLockConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetObjectRetentionCommand: (
  input: GetObjectRetentionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetObjectTaggingCommand: (
  input: GetObjectTaggingCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetObjectTorrentCommand: (
  input: GetObjectTorrentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlGetPublicAccessBlockCommand: (
  input: GetPublicAccessBlockCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlHeadBucketCommand: (
  input: HeadBucketCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlHeadObjectCommand: (
  input: HeadObjectCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlListBucketAnalyticsConfigurationsCommand: (
  input: ListBucketAnalyticsConfigurationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlListBucketIntelligentTieringConfigurationsCommand: (
  input: ListBucketIntelligentTieringConfigurationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlListBucketInventoryConfigurationsCommand: (
  input: ListBucketInventoryConfigurationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlListBucketMetricsConfigurationsCommand: (
  input: ListBucketMetricsConfigurationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlListBucketsCommand: (
  input: ListBucketsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlListMultipartUploadsCommand: (
  input: ListMultipartUploadsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlListObjectsCommand: (
  input: ListObjectsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlListObjectsV2Command: (
  input: ListObjectsV2CommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlListObjectVersionsCommand: (
  input: ListObjectVersionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlListPartsCommand: (
  input: ListPartsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutBucketAccelerateConfigurationCommand: (
  input: PutBucketAccelerateConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutBucketAclCommand: (
  input: PutBucketAclCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutBucketAnalyticsConfigurationCommand: (
  input: PutBucketAnalyticsConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutBucketCorsCommand: (
  input: PutBucketCorsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutBucketEncryptionCommand: (
  input: PutBucketEncryptionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutBucketIntelligentTieringConfigurationCommand: (
  input: PutBucketIntelligentTieringConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutBucketInventoryConfigurationCommand: (
  input: PutBucketInventoryConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutBucketLifecycleConfigurationCommand: (
  input: PutBucketLifecycleConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutBucketLoggingCommand: (
  input: PutBucketLoggingCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutBucketMetricsConfigurationCommand: (
  input: PutBucketMetricsConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutBucketNotificationConfigurationCommand: (
  input: PutBucketNotificationConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutBucketOwnershipControlsCommand: (
  input: PutBucketOwnershipControlsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutBucketPolicyCommand: (
  input: PutBucketPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutBucketReplicationCommand: (
  input: PutBucketReplicationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutBucketRequestPaymentCommand: (
  input: PutBucketRequestPaymentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutBucketTaggingCommand: (
  input: PutBucketTaggingCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutBucketVersioningCommand: (
  input: PutBucketVersioningCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutBucketWebsiteCommand: (
  input: PutBucketWebsiteCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutObjectCommand: (
  input: PutObjectCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutObjectAclCommand: (
  input: PutObjectAclCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutObjectLegalHoldCommand: (
  input: PutObjectLegalHoldCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutObjectLockConfigurationCommand: (
  input: PutObjectLockConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutObjectRetentionCommand: (
  input: PutObjectRetentionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutObjectTaggingCommand: (
  input: PutObjectTaggingCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlPutPublicAccessBlockCommand: (
  input: PutPublicAccessBlockCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlRestoreObjectCommand: (
  input: RestoreObjectCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlSelectObjectContentCommand: (
  input: SelectObjectContentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlUploadPartCommand: (
  input: UploadPartCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlUploadPartCopyCommand: (
  input: UploadPartCopyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restXmlWriteGetObjectResponseCommand: (
  input: WriteGetObjectResponseCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_restXmlAbortMultipartUploadCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AbortMultipartUploadCommandOutput>;
export declare const deserializeAws_restXmlCompleteMultipartUploadCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CompleteMultipartUploadCommandOutput>;
export declare const deserializeAws_restXmlCopyObjectCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CopyObjectCommandOutput>;
export declare const deserializeAws_restXmlCreateBucketCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateBucketCommandOutput>;
export declare const deserializeAws_restXmlCreateMultipartUploadCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateMultipartUploadCommandOutput>;
export declare const deserializeAws_restXmlDeleteBucketCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBucketCommandOutput>;
export declare const deserializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBucketAnalyticsConfigurationCommandOutput>;
export declare const deserializeAws_restXmlDeleteBucketCorsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBucketCorsCommandOutput>;
export declare const deserializeAws_restXmlDeleteBucketEncryptionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBucketEncryptionCommandOutput>;
export declare const deserializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBucketIntelligentTieringConfigurationCommandOutput>;
export declare const deserializeAws_restXmlDeleteBucketInventoryConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBucketInventoryConfigurationCommandOutput>;
export declare const deserializeAws_restXmlDeleteBucketLifecycleCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBucketLifecycleCommandOutput>;
export declare const deserializeAws_restXmlDeleteBucketMetricsConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBucketMetricsConfigurationCommandOutput>;
export declare const deserializeAws_restXmlDeleteBucketOwnershipControlsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBucketOwnershipControlsCommandOutput>;
export declare const deserializeAws_restXmlDeleteBucketPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBucketPolicyCommandOutput>;
export declare const deserializeAws_restXmlDeleteBucketReplicationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBucketReplicationCommandOutput>;
export declare const deserializeAws_restXmlDeleteBucketTaggingCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBucketTaggingCommandOutput>;
export declare const deserializeAws_restXmlDeleteBucketWebsiteCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBucketWebsiteCommandOutput>;
export declare const deserializeAws_restXmlDeleteObjectCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteObjectCommandOutput>;
export declare const deserializeAws_restXmlDeleteObjectsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteObjectsCommandOutput>;
export declare const deserializeAws_restXmlDeleteObjectTaggingCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteObjectTaggingCommandOutput>;
export declare const deserializeAws_restXmlDeletePublicAccessBlockCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeletePublicAccessBlockCommandOutput>;
export declare const deserializeAws_restXmlGetBucketAccelerateConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBucketAccelerateConfigurationCommandOutput>;
export declare const deserializeAws_restXmlGetBucketAclCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBucketAclCommandOutput>;
export declare const deserializeAws_restXmlGetBucketAnalyticsConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBucketAnalyticsConfigurationCommandOutput>;
export declare const deserializeAws_restXmlGetBucketCorsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBucketCorsCommandOutput>;
export declare const deserializeAws_restXmlGetBucketEncryptionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBucketEncryptionCommandOutput>;
export declare const deserializeAws_restXmlGetBucketIntelligentTieringConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBucketIntelligentTieringConfigurationCommandOutput>;
export declare const deserializeAws_restXmlGetBucketInventoryConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBucketInventoryConfigurationCommandOutput>;
export declare const deserializeAws_restXmlGetBucketLifecycleConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBucketLifecycleConfigurationCommandOutput>;
export declare const deserializeAws_restXmlGetBucketLocationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBucketLocationCommandOutput>;
export declare const deserializeAws_restXmlGetBucketLoggingCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBucketLoggingCommandOutput>;
export declare const deserializeAws_restXmlGetBucketMetricsConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBucketMetricsConfigurationCommandOutput>;
export declare const deserializeAws_restXmlGetBucketNotificationConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBucketNotificationConfigurationCommandOutput>;
export declare const deserializeAws_restXmlGetBucketOwnershipControlsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBucketOwnershipControlsCommandOutput>;
export declare const deserializeAws_restXmlGetBucketPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBucketPolicyCommandOutput>;
export declare const deserializeAws_restXmlGetBucketPolicyStatusCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBucketPolicyStatusCommandOutput>;
export declare const deserializeAws_restXmlGetBucketReplicationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBucketReplicationCommandOutput>;
export declare const deserializeAws_restXmlGetBucketRequestPaymentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBucketRequestPaymentCommandOutput>;
export declare const deserializeAws_restXmlGetBucketTaggingCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBucketTaggingCommandOutput>;
export declare const deserializeAws_restXmlGetBucketVersioningCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBucketVersioningCommandOutput>;
export declare const deserializeAws_restXmlGetBucketWebsiteCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBucketWebsiteCommandOutput>;
export declare const deserializeAws_restXmlGetObjectCommand: (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
) => Promise<GetObjectCommandOutput>;
export declare const deserializeAws_restXmlGetObjectAclCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetObjectAclCommandOutput>;
export declare const deserializeAws_restXmlGetObjectAttributesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetObjectAttributesCommandOutput>;
export declare const deserializeAws_restXmlGetObjectLegalHoldCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetObjectLegalHoldCommandOutput>;
export declare const deserializeAws_restXmlGetObjectLockConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetObjectLockConfigurationCommandOutput>;
export declare const deserializeAws_restXmlGetObjectRetentionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetObjectRetentionCommandOutput>;
export declare const deserializeAws_restXmlGetObjectTaggingCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetObjectTaggingCommandOutput>;
export declare const deserializeAws_restXmlGetObjectTorrentCommand: (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
) => Promise<GetObjectTorrentCommandOutput>;
export declare const deserializeAws_restXmlGetPublicAccessBlockCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetPublicAccessBlockCommandOutput>;
export declare const deserializeAws_restXmlHeadBucketCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<HeadBucketCommandOutput>;
export declare const deserializeAws_restXmlHeadObjectCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<HeadObjectCommandOutput>;
export declare const deserializeAws_restXmlListBucketAnalyticsConfigurationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListBucketAnalyticsConfigurationsCommandOutput>;
export declare const deserializeAws_restXmlListBucketIntelligentTieringConfigurationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListBucketIntelligentTieringConfigurationsCommandOutput>;
export declare const deserializeAws_restXmlListBucketInventoryConfigurationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListBucketInventoryConfigurationsCommandOutput>;
export declare const deserializeAws_restXmlListBucketMetricsConfigurationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListBucketMetricsConfigurationsCommandOutput>;
export declare const deserializeAws_restXmlListBucketsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListBucketsCommandOutput>;
export declare const deserializeAws_restXmlListMultipartUploadsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListMultipartUploadsCommandOutput>;
export declare const deserializeAws_restXmlListObjectsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListObjectsCommandOutput>;
export declare const deserializeAws_restXmlListObjectsV2Command: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListObjectsV2CommandOutput>;
export declare const deserializeAws_restXmlListObjectVersionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListObjectVersionsCommandOutput>;
export declare const deserializeAws_restXmlListPartsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListPartsCommandOutput>;
export declare const deserializeAws_restXmlPutBucketAccelerateConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutBucketAccelerateConfigurationCommandOutput>;
export declare const deserializeAws_restXmlPutBucketAclCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutBucketAclCommandOutput>;
export declare const deserializeAws_restXmlPutBucketAnalyticsConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutBucketAnalyticsConfigurationCommandOutput>;
export declare const deserializeAws_restXmlPutBucketCorsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutBucketCorsCommandOutput>;
export declare const deserializeAws_restXmlPutBucketEncryptionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutBucketEncryptionCommandOutput>;
export declare const deserializeAws_restXmlPutBucketIntelligentTieringConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutBucketIntelligentTieringConfigurationCommandOutput>;
export declare const deserializeAws_restXmlPutBucketInventoryConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutBucketInventoryConfigurationCommandOutput>;
export declare const deserializeAws_restXmlPutBucketLifecycleConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutBucketLifecycleConfigurationCommandOutput>;
export declare const deserializeAws_restXmlPutBucketLoggingCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutBucketLoggingCommandOutput>;
export declare const deserializeAws_restXmlPutBucketMetricsConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutBucketMetricsConfigurationCommandOutput>;
export declare const deserializeAws_restXmlPutBucketNotificationConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutBucketNotificationConfigurationCommandOutput>;
export declare const deserializeAws_restXmlPutBucketOwnershipControlsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutBucketOwnershipControlsCommandOutput>;
export declare const deserializeAws_restXmlPutBucketPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutBucketPolicyCommandOutput>;
export declare const deserializeAws_restXmlPutBucketReplicationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutBucketReplicationCommandOutput>;
export declare const deserializeAws_restXmlPutBucketRequestPaymentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutBucketRequestPaymentCommandOutput>;
export declare const deserializeAws_restXmlPutBucketTaggingCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutBucketTaggingCommandOutput>;
export declare const deserializeAws_restXmlPutBucketVersioningCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutBucketVersioningCommandOutput>;
export declare const deserializeAws_restXmlPutBucketWebsiteCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutBucketWebsiteCommandOutput>;
export declare const deserializeAws_restXmlPutObjectCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutObjectCommandOutput>;
export declare const deserializeAws_restXmlPutObjectAclCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutObjectAclCommandOutput>;
export declare const deserializeAws_restXmlPutObjectLegalHoldCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutObjectLegalHoldCommandOutput>;
export declare const deserializeAws_restXmlPutObjectLockConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutObjectLockConfigurationCommandOutput>;
export declare const deserializeAws_restXmlPutObjectRetentionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutObjectRetentionCommandOutput>;
export declare const deserializeAws_restXmlPutObjectTaggingCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutObjectTaggingCommandOutput>;
export declare const deserializeAws_restXmlPutPublicAccessBlockCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutPublicAccessBlockCommandOutput>;
export declare const deserializeAws_restXmlRestoreObjectCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RestoreObjectCommandOutput>;
export declare const deserializeAws_restXmlSelectObjectContentCommand: (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
) => Promise<SelectObjectContentCommandOutput>;
export declare const deserializeAws_restXmlUploadPartCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UploadPartCommandOutput>;
export declare const deserializeAws_restXmlUploadPartCopyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UploadPartCopyCommandOutput>;
export declare const deserializeAws_restXmlWriteGetObjectResponseCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<WriteGetObjectResponseCommandOutput>;

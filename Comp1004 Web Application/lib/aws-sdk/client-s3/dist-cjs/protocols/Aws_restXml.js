"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_restXmlGetObjectTorrentCommand = exports.serializeAws_restXmlGetObjectTaggingCommand = exports.serializeAws_restXmlGetObjectRetentionCommand = exports.serializeAws_restXmlGetObjectLockConfigurationCommand = exports.serializeAws_restXmlGetObjectLegalHoldCommand = exports.serializeAws_restXmlGetObjectAttributesCommand = exports.serializeAws_restXmlGetObjectAclCommand = exports.serializeAws_restXmlGetObjectCommand = exports.serializeAws_restXmlGetBucketWebsiteCommand = exports.serializeAws_restXmlGetBucketVersioningCommand = exports.serializeAws_restXmlGetBucketTaggingCommand = exports.serializeAws_restXmlGetBucketRequestPaymentCommand = exports.serializeAws_restXmlGetBucketReplicationCommand = exports.serializeAws_restXmlGetBucketPolicyStatusCommand = exports.serializeAws_restXmlGetBucketPolicyCommand = exports.serializeAws_restXmlGetBucketOwnershipControlsCommand = exports.serializeAws_restXmlGetBucketNotificationConfigurationCommand = exports.serializeAws_restXmlGetBucketMetricsConfigurationCommand = exports.serializeAws_restXmlGetBucketLoggingCommand = exports.serializeAws_restXmlGetBucketLocationCommand = exports.serializeAws_restXmlGetBucketLifecycleConfigurationCommand = exports.serializeAws_restXmlGetBucketInventoryConfigurationCommand = exports.serializeAws_restXmlGetBucketIntelligentTieringConfigurationCommand = exports.serializeAws_restXmlGetBucketEncryptionCommand = exports.serializeAws_restXmlGetBucketCorsCommand = exports.serializeAws_restXmlGetBucketAnalyticsConfigurationCommand = exports.serializeAws_restXmlGetBucketAclCommand = exports.serializeAws_restXmlGetBucketAccelerateConfigurationCommand = exports.serializeAws_restXmlDeletePublicAccessBlockCommand = exports.serializeAws_restXmlDeleteObjectTaggingCommand = exports.serializeAws_restXmlDeleteObjectsCommand = exports.serializeAws_restXmlDeleteObjectCommand = exports.serializeAws_restXmlDeleteBucketWebsiteCommand = exports.serializeAws_restXmlDeleteBucketTaggingCommand = exports.serializeAws_restXmlDeleteBucketReplicationCommand = exports.serializeAws_restXmlDeleteBucketPolicyCommand = exports.serializeAws_restXmlDeleteBucketOwnershipControlsCommand = exports.serializeAws_restXmlDeleteBucketMetricsConfigurationCommand = exports.serializeAws_restXmlDeleteBucketLifecycleCommand = exports.serializeAws_restXmlDeleteBucketInventoryConfigurationCommand = exports.serializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommand = exports.serializeAws_restXmlDeleteBucketEncryptionCommand = exports.serializeAws_restXmlDeleteBucketCorsCommand = exports.serializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand = exports.serializeAws_restXmlDeleteBucketCommand = exports.serializeAws_restXmlCreateMultipartUploadCommand = exports.serializeAws_restXmlCreateBucketCommand = exports.serializeAws_restXmlCopyObjectCommand = exports.serializeAws_restXmlCompleteMultipartUploadCommand = exports.serializeAws_restXmlAbortMultipartUploadCommand = void 0;
exports.deserializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand = exports.deserializeAws_restXmlDeleteBucketCommand = exports.deserializeAws_restXmlCreateMultipartUploadCommand = exports.deserializeAws_restXmlCreateBucketCommand = exports.deserializeAws_restXmlCopyObjectCommand = exports.deserializeAws_restXmlCompleteMultipartUploadCommand = exports.deserializeAws_restXmlAbortMultipartUploadCommand = exports.serializeAws_restXmlWriteGetObjectResponseCommand = exports.serializeAws_restXmlUploadPartCopyCommand = exports.serializeAws_restXmlUploadPartCommand = exports.serializeAws_restXmlSelectObjectContentCommand = exports.serializeAws_restXmlRestoreObjectCommand = exports.serializeAws_restXmlPutPublicAccessBlockCommand = exports.serializeAws_restXmlPutObjectTaggingCommand = exports.serializeAws_restXmlPutObjectRetentionCommand = exports.serializeAws_restXmlPutObjectLockConfigurationCommand = exports.serializeAws_restXmlPutObjectLegalHoldCommand = exports.serializeAws_restXmlPutObjectAclCommand = exports.serializeAws_restXmlPutObjectCommand = exports.serializeAws_restXmlPutBucketWebsiteCommand = exports.serializeAws_restXmlPutBucketVersioningCommand = exports.serializeAws_restXmlPutBucketTaggingCommand = exports.serializeAws_restXmlPutBucketRequestPaymentCommand = exports.serializeAws_restXmlPutBucketReplicationCommand = exports.serializeAws_restXmlPutBucketPolicyCommand = exports.serializeAws_restXmlPutBucketOwnershipControlsCommand = exports.serializeAws_restXmlPutBucketNotificationConfigurationCommand = exports.serializeAws_restXmlPutBucketMetricsConfigurationCommand = exports.serializeAws_restXmlPutBucketLoggingCommand = exports.serializeAws_restXmlPutBucketLifecycleConfigurationCommand = exports.serializeAws_restXmlPutBucketInventoryConfigurationCommand = exports.serializeAws_restXmlPutBucketIntelligentTieringConfigurationCommand = exports.serializeAws_restXmlPutBucketEncryptionCommand = exports.serializeAws_restXmlPutBucketCorsCommand = exports.serializeAws_restXmlPutBucketAnalyticsConfigurationCommand = exports.serializeAws_restXmlPutBucketAclCommand = exports.serializeAws_restXmlPutBucketAccelerateConfigurationCommand = exports.serializeAws_restXmlListPartsCommand = exports.serializeAws_restXmlListObjectVersionsCommand = exports.serializeAws_restXmlListObjectsV2Command = exports.serializeAws_restXmlListObjectsCommand = exports.serializeAws_restXmlListMultipartUploadsCommand = exports.serializeAws_restXmlListBucketsCommand = exports.serializeAws_restXmlListBucketMetricsConfigurationsCommand = exports.serializeAws_restXmlListBucketInventoryConfigurationsCommand = exports.serializeAws_restXmlListBucketIntelligentTieringConfigurationsCommand = exports.serializeAws_restXmlListBucketAnalyticsConfigurationsCommand = exports.serializeAws_restXmlHeadObjectCommand = exports.serializeAws_restXmlHeadBucketCommand = exports.serializeAws_restXmlGetPublicAccessBlockCommand = void 0;
exports.deserializeAws_restXmlListBucketMetricsConfigurationsCommand = exports.deserializeAws_restXmlListBucketInventoryConfigurationsCommand = exports.deserializeAws_restXmlListBucketIntelligentTieringConfigurationsCommand = exports.deserializeAws_restXmlListBucketAnalyticsConfigurationsCommand = exports.deserializeAws_restXmlHeadObjectCommand = exports.deserializeAws_restXmlHeadBucketCommand = exports.deserializeAws_restXmlGetPublicAccessBlockCommand = exports.deserializeAws_restXmlGetObjectTorrentCommand = exports.deserializeAws_restXmlGetObjectTaggingCommand = exports.deserializeAws_restXmlGetObjectRetentionCommand = exports.deserializeAws_restXmlGetObjectLockConfigurationCommand = exports.deserializeAws_restXmlGetObjectLegalHoldCommand = exports.deserializeAws_restXmlGetObjectAttributesCommand = exports.deserializeAws_restXmlGetObjectAclCommand = exports.deserializeAws_restXmlGetObjectCommand = exports.deserializeAws_restXmlGetBucketWebsiteCommand = exports.deserializeAws_restXmlGetBucketVersioningCommand = exports.deserializeAws_restXmlGetBucketTaggingCommand = exports.deserializeAws_restXmlGetBucketRequestPaymentCommand = exports.deserializeAws_restXmlGetBucketReplicationCommand = exports.deserializeAws_restXmlGetBucketPolicyStatusCommand = exports.deserializeAws_restXmlGetBucketPolicyCommand = exports.deserializeAws_restXmlGetBucketOwnershipControlsCommand = exports.deserializeAws_restXmlGetBucketNotificationConfigurationCommand = exports.deserializeAws_restXmlGetBucketMetricsConfigurationCommand = exports.deserializeAws_restXmlGetBucketLoggingCommand = exports.deserializeAws_restXmlGetBucketLocationCommand = exports.deserializeAws_restXmlGetBucketLifecycleConfigurationCommand = exports.deserializeAws_restXmlGetBucketInventoryConfigurationCommand = exports.deserializeAws_restXmlGetBucketIntelligentTieringConfigurationCommand = exports.deserializeAws_restXmlGetBucketEncryptionCommand = exports.deserializeAws_restXmlGetBucketCorsCommand = exports.deserializeAws_restXmlGetBucketAnalyticsConfigurationCommand = exports.deserializeAws_restXmlGetBucketAclCommand = exports.deserializeAws_restXmlGetBucketAccelerateConfigurationCommand = exports.deserializeAws_restXmlDeletePublicAccessBlockCommand = exports.deserializeAws_restXmlDeleteObjectTaggingCommand = exports.deserializeAws_restXmlDeleteObjectsCommand = exports.deserializeAws_restXmlDeleteObjectCommand = exports.deserializeAws_restXmlDeleteBucketWebsiteCommand = exports.deserializeAws_restXmlDeleteBucketTaggingCommand = exports.deserializeAws_restXmlDeleteBucketReplicationCommand = exports.deserializeAws_restXmlDeleteBucketPolicyCommand = exports.deserializeAws_restXmlDeleteBucketOwnershipControlsCommand = exports.deserializeAws_restXmlDeleteBucketMetricsConfigurationCommand = exports.deserializeAws_restXmlDeleteBucketLifecycleCommand = exports.deserializeAws_restXmlDeleteBucketInventoryConfigurationCommand = exports.deserializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommand = exports.deserializeAws_restXmlDeleteBucketEncryptionCommand = exports.deserializeAws_restXmlDeleteBucketCorsCommand = void 0;
exports.deserializeAws_restXmlWriteGetObjectResponseCommand = exports.deserializeAws_restXmlUploadPartCopyCommand = exports.deserializeAws_restXmlUploadPartCommand = exports.deserializeAws_restXmlSelectObjectContentCommand = exports.deserializeAws_restXmlRestoreObjectCommand = exports.deserializeAws_restXmlPutPublicAccessBlockCommand = exports.deserializeAws_restXmlPutObjectTaggingCommand = exports.deserializeAws_restXmlPutObjectRetentionCommand = exports.deserializeAws_restXmlPutObjectLockConfigurationCommand = exports.deserializeAws_restXmlPutObjectLegalHoldCommand = exports.deserializeAws_restXmlPutObjectAclCommand = exports.deserializeAws_restXmlPutObjectCommand = exports.deserializeAws_restXmlPutBucketWebsiteCommand = exports.deserializeAws_restXmlPutBucketVersioningCommand = exports.deserializeAws_restXmlPutBucketTaggingCommand = exports.deserializeAws_restXmlPutBucketRequestPaymentCommand = exports.deserializeAws_restXmlPutBucketReplicationCommand = exports.deserializeAws_restXmlPutBucketPolicyCommand = exports.deserializeAws_restXmlPutBucketOwnershipControlsCommand = exports.deserializeAws_restXmlPutBucketNotificationConfigurationCommand = exports.deserializeAws_restXmlPutBucketMetricsConfigurationCommand = exports.deserializeAws_restXmlPutBucketLoggingCommand = exports.deserializeAws_restXmlPutBucketLifecycleConfigurationCommand = exports.deserializeAws_restXmlPutBucketInventoryConfigurationCommand = exports.deserializeAws_restXmlPutBucketIntelligentTieringConfigurationCommand = exports.deserializeAws_restXmlPutBucketEncryptionCommand = exports.deserializeAws_restXmlPutBucketCorsCommand = exports.deserializeAws_restXmlPutBucketAnalyticsConfigurationCommand = exports.deserializeAws_restXmlPutBucketAclCommand = exports.deserializeAws_restXmlPutBucketAccelerateConfigurationCommand = exports.deserializeAws_restXmlListPartsCommand = exports.deserializeAws_restXmlListObjectVersionsCommand = exports.deserializeAws_restXmlListObjectsV2Command = exports.deserializeAws_restXmlListObjectsCommand = exports.deserializeAws_restXmlListMultipartUploadsCommand = exports.deserializeAws_restXmlListBucketsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const xml_builder_1 = require("@aws-sdk/xml-builder");
const fast_xml_parser_1 = require("fast-xml-parser");
const models_0_1 = require("../models/models_0");
const models_1_1 = require("../models/models_1");
const S3ServiceException_1 = require("../models/S3ServiceException");
const serializeAws_restXmlAbortMultipartUploadCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-request-payer": input.RequestPayer,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Key", () => input.Key, "{Key+}", true);
    const query = map({
        "x-id": [, "AbortMultipartUpload"],
        uploadId: [, (0, smithy_client_1.expectNonNull)(input.UploadId, `UploadId`)],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlAbortMultipartUploadCommand = serializeAws_restXmlAbortMultipartUploadCommand;
const serializeAws_restXmlCompleteMultipartUploadCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "x-amz-checksum-crc32": input.ChecksumCRC32,
        "x-amz-checksum-crc32c": input.ChecksumCRC32C,
        "x-amz-checksum-sha1": input.ChecksumSHA1,
        "x-amz-checksum-sha256": input.ChecksumSHA256,
        "x-amz-request-payer": input.RequestPayer,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
        "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm,
        "x-amz-server-side-encryption-customer-key": input.SSECustomerKey,
        "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Key", () => input.Key, "{Key+}", true);
    const query = map({
        "x-id": [, "CompleteMultipartUpload"],
        uploadId: [, (0, smithy_client_1.expectNonNull)(input.UploadId, `UploadId`)],
    });
    let body;
    if (input.MultipartUpload !== undefined) {
        body = serializeAws_restXmlCompletedMultipartUpload(input.MultipartUpload, context);
    }
    let contents;
    if (input.MultipartUpload !== undefined) {
        contents = serializeAws_restXmlCompletedMultipartUpload(input.MultipartUpload, context);
        contents = contents.withName("CompleteMultipartUpload");
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlCompleteMultipartUploadCommand = serializeAws_restXmlCompleteMultipartUploadCommand;
const serializeAws_restXmlCopyObjectCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-acl": input.ACL,
        "cache-control": input.CacheControl,
        "x-amz-checksum-algorithm": input.ChecksumAlgorithm,
        "content-disposition": input.ContentDisposition,
        "content-encoding": input.ContentEncoding,
        "content-language": input.ContentLanguage,
        "content-type": input.ContentType,
        "x-amz-copy-source": input.CopySource,
        "x-amz-copy-source-if-match": input.CopySourceIfMatch,
        "x-amz-copy-source-if-modified-since": [
            () => isSerializableHeaderValue(input.CopySourceIfModifiedSince),
            () => (0, smithy_client_1.dateToUtcString)(input.CopySourceIfModifiedSince).toString(),
        ],
        "x-amz-copy-source-if-none-match": input.CopySourceIfNoneMatch,
        "x-amz-copy-source-if-unmodified-since": [
            () => isSerializableHeaderValue(input.CopySourceIfUnmodifiedSince),
            () => (0, smithy_client_1.dateToUtcString)(input.CopySourceIfUnmodifiedSince).toString(),
        ],
        expires: [() => isSerializableHeaderValue(input.Expires), () => (0, smithy_client_1.dateToUtcString)(input.Expires).toString()],
        "x-amz-grant-full-control": input.GrantFullControl,
        "x-amz-grant-read": input.GrantRead,
        "x-amz-grant-read-acp": input.GrantReadACP,
        "x-amz-grant-write-acp": input.GrantWriteACP,
        "x-amz-metadata-directive": input.MetadataDirective,
        "x-amz-tagging-directive": input.TaggingDirective,
        "x-amz-server-side-encryption": input.ServerSideEncryption,
        "x-amz-storage-class": input.StorageClass,
        "x-amz-website-redirect-location": input.WebsiteRedirectLocation,
        "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm,
        "x-amz-server-side-encryption-customer-key": input.SSECustomerKey,
        "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5,
        "x-amz-server-side-encryption-aws-kms-key-id": input.SSEKMSKeyId,
        "x-amz-server-side-encryption-context": input.SSEKMSEncryptionContext,
        "x-amz-server-side-encryption-bucket-key-enabled": [
            () => isSerializableHeaderValue(input.BucketKeyEnabled),
            () => input.BucketKeyEnabled.toString(),
        ],
        "x-amz-copy-source-server-side-encryption-customer-algorithm": input.CopySourceSSECustomerAlgorithm,
        "x-amz-copy-source-server-side-encryption-customer-key": input.CopySourceSSECustomerKey,
        "x-amz-copy-source-server-side-encryption-customer-key-md5": input.CopySourceSSECustomerKeyMD5,
        "x-amz-request-payer": input.RequestPayer,
        "x-amz-tagging": input.Tagging,
        "x-amz-object-lock-mode": input.ObjectLockMode,
        "x-amz-object-lock-retain-until-date": [
            () => isSerializableHeaderValue(input.ObjectLockRetainUntilDate),
            () => (input.ObjectLockRetainUntilDate.toISOString().split(".")[0] + "Z").toString(),
        ],
        "x-amz-object-lock-legal-hold": input.ObjectLockLegalHoldStatus,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
        "x-amz-source-expected-bucket-owner": input.ExpectedSourceBucketOwner,
        ...(input.Metadata !== undefined &&
            Object.keys(input.Metadata).reduce((acc, suffix) => {
                acc[`x-amz-meta-${suffix.toLowerCase()}`] = input.Metadata[suffix];
                return acc;
            }, {})),
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Key", () => input.Key, "{Key+}", true);
    const query = map({
        "x-id": [, "CopyObject"],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlCopyObjectCommand = serializeAws_restXmlCopyObjectCommand;
const serializeAws_restXmlCreateBucketCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "x-amz-acl": input.ACL,
        "x-amz-grant-full-control": input.GrantFullControl,
        "x-amz-grant-read": input.GrantRead,
        "x-amz-grant-read-acp": input.GrantReadACP,
        "x-amz-grant-write": input.GrantWrite,
        "x-amz-grant-write-acp": input.GrantWriteACP,
        "x-amz-bucket-object-lock-enabled": [
            () => isSerializableHeaderValue(input.ObjectLockEnabledForBucket),
            () => input.ObjectLockEnabledForBucket.toString(),
        ],
        "x-amz-object-ownership": input.ObjectOwnership,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    let body;
    if (input.CreateBucketConfiguration !== undefined) {
        body = serializeAws_restXmlCreateBucketConfiguration(input.CreateBucketConfiguration, context);
    }
    let contents;
    if (input.CreateBucketConfiguration !== undefined) {
        contents = serializeAws_restXmlCreateBucketConfiguration(input.CreateBucketConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlCreateBucketCommand = serializeAws_restXmlCreateBucketCommand;
const serializeAws_restXmlCreateMultipartUploadCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-acl": input.ACL,
        "cache-control": input.CacheControl,
        "content-disposition": input.ContentDisposition,
        "content-encoding": input.ContentEncoding,
        "content-language": input.ContentLanguage,
        "content-type": input.ContentType,
        expires: [() => isSerializableHeaderValue(input.Expires), () => (0, smithy_client_1.dateToUtcString)(input.Expires).toString()],
        "x-amz-grant-full-control": input.GrantFullControl,
        "x-amz-grant-read": input.GrantRead,
        "x-amz-grant-read-acp": input.GrantReadACP,
        "x-amz-grant-write-acp": input.GrantWriteACP,
        "x-amz-server-side-encryption": input.ServerSideEncryption,
        "x-amz-storage-class": input.StorageClass,
        "x-amz-website-redirect-location": input.WebsiteRedirectLocation,
        "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm,
        "x-amz-server-side-encryption-customer-key": input.SSECustomerKey,
        "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5,
        "x-amz-server-side-encryption-aws-kms-key-id": input.SSEKMSKeyId,
        "x-amz-server-side-encryption-context": input.SSEKMSEncryptionContext,
        "x-amz-server-side-encryption-bucket-key-enabled": [
            () => isSerializableHeaderValue(input.BucketKeyEnabled),
            () => input.BucketKeyEnabled.toString(),
        ],
        "x-amz-request-payer": input.RequestPayer,
        "x-amz-tagging": input.Tagging,
        "x-amz-object-lock-mode": input.ObjectLockMode,
        "x-amz-object-lock-retain-until-date": [
            () => isSerializableHeaderValue(input.ObjectLockRetainUntilDate),
            () => (input.ObjectLockRetainUntilDate.toISOString().split(".")[0] + "Z").toString(),
        ],
        "x-amz-object-lock-legal-hold": input.ObjectLockLegalHoldStatus,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
        "x-amz-checksum-algorithm": input.ChecksumAlgorithm,
        ...(input.Metadata !== undefined &&
            Object.keys(input.Metadata).reduce((acc, suffix) => {
                acc[`x-amz-meta-${suffix.toLowerCase()}`] = input.Metadata[suffix];
                return acc;
            }, {})),
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Key", () => input.Key, "{Key+}", true);
    const query = map({
        uploads: [, ""],
        "x-id": [, "CreateMultipartUpload"],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlCreateMultipartUploadCommand = serializeAws_restXmlCreateMultipartUploadCommand;
const serializeAws_restXmlDeleteBucketCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlDeleteBucketCommand = serializeAws_restXmlDeleteBucketCommand;
const serializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        analytics: [, ""],
        id: [, (0, smithy_client_1.expectNonNull)(input.Id, `Id`)],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand = serializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand;
const serializeAws_restXmlDeleteBucketCorsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        cors: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlDeleteBucketCorsCommand = serializeAws_restXmlDeleteBucketCorsCommand;
const serializeAws_restXmlDeleteBucketEncryptionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        encryption: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlDeleteBucketEncryptionCommand = serializeAws_restXmlDeleteBucketEncryptionCommand;
const serializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        "intelligent-tiering": [, ""],
        id: [, (0, smithy_client_1.expectNonNull)(input.Id, `Id`)],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommand = serializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommand;
const serializeAws_restXmlDeleteBucketInventoryConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        inventory: [, ""],
        id: [, (0, smithy_client_1.expectNonNull)(input.Id, `Id`)],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlDeleteBucketInventoryConfigurationCommand = serializeAws_restXmlDeleteBucketInventoryConfigurationCommand;
const serializeAws_restXmlDeleteBucketLifecycleCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        lifecycle: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlDeleteBucketLifecycleCommand = serializeAws_restXmlDeleteBucketLifecycleCommand;
const serializeAws_restXmlDeleteBucketMetricsConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        metrics: [, ""],
        id: [, (0, smithy_client_1.expectNonNull)(input.Id, `Id`)],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlDeleteBucketMetricsConfigurationCommand = serializeAws_restXmlDeleteBucketMetricsConfigurationCommand;
const serializeAws_restXmlDeleteBucketOwnershipControlsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        ownershipControls: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlDeleteBucketOwnershipControlsCommand = serializeAws_restXmlDeleteBucketOwnershipControlsCommand;
const serializeAws_restXmlDeleteBucketPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        policy: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlDeleteBucketPolicyCommand = serializeAws_restXmlDeleteBucketPolicyCommand;
const serializeAws_restXmlDeleteBucketReplicationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        replication: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlDeleteBucketReplicationCommand = serializeAws_restXmlDeleteBucketReplicationCommand;
const serializeAws_restXmlDeleteBucketTaggingCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        tagging: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlDeleteBucketTaggingCommand = serializeAws_restXmlDeleteBucketTaggingCommand;
const serializeAws_restXmlDeleteBucketWebsiteCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        website: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlDeleteBucketWebsiteCommand = serializeAws_restXmlDeleteBucketWebsiteCommand;
const serializeAws_restXmlDeleteObjectCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-mfa": input.MFA,
        "x-amz-request-payer": input.RequestPayer,
        "x-amz-bypass-governance-retention": [
            () => isSerializableHeaderValue(input.BypassGovernanceRetention),
            () => input.BypassGovernanceRetention.toString(),
        ],
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Key", () => input.Key, "{Key+}", true);
    const query = map({
        "x-id": [, "DeleteObject"],
        versionId: [, input.VersionId],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlDeleteObjectCommand = serializeAws_restXmlDeleteObjectCommand;
const serializeAws_restXmlDeleteObjectsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "x-amz-mfa": input.MFA,
        "x-amz-request-payer": input.RequestPayer,
        "x-amz-bypass-governance-retention": [
            () => isSerializableHeaderValue(input.BypassGovernanceRetention),
            () => input.BypassGovernanceRetention.toString(),
        ],
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
        "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        delete: [, ""],
        "x-id": [, "DeleteObjects"],
    });
    let body;
    if (input.Delete !== undefined) {
        body = serializeAws_restXmlDelete(input.Delete, context);
    }
    let contents;
    if (input.Delete !== undefined) {
        contents = serializeAws_restXmlDelete(input.Delete, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlDeleteObjectsCommand = serializeAws_restXmlDeleteObjectsCommand;
const serializeAws_restXmlDeleteObjectTaggingCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Key", () => input.Key, "{Key+}", true);
    const query = map({
        tagging: [, ""],
        versionId: [, input.VersionId],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlDeleteObjectTaggingCommand = serializeAws_restXmlDeleteObjectTaggingCommand;
const serializeAws_restXmlDeletePublicAccessBlockCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        publicAccessBlock: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlDeletePublicAccessBlockCommand = serializeAws_restXmlDeletePublicAccessBlockCommand;
const serializeAws_restXmlGetBucketAccelerateConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        accelerate: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetBucketAccelerateConfigurationCommand = serializeAws_restXmlGetBucketAccelerateConfigurationCommand;
const serializeAws_restXmlGetBucketAclCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        acl: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetBucketAclCommand = serializeAws_restXmlGetBucketAclCommand;
const serializeAws_restXmlGetBucketAnalyticsConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        analytics: [, ""],
        "x-id": [, "GetBucketAnalyticsConfiguration"],
        id: [, (0, smithy_client_1.expectNonNull)(input.Id, `Id`)],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetBucketAnalyticsConfigurationCommand = serializeAws_restXmlGetBucketAnalyticsConfigurationCommand;
const serializeAws_restXmlGetBucketCorsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        cors: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetBucketCorsCommand = serializeAws_restXmlGetBucketCorsCommand;
const serializeAws_restXmlGetBucketEncryptionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        encryption: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetBucketEncryptionCommand = serializeAws_restXmlGetBucketEncryptionCommand;
const serializeAws_restXmlGetBucketIntelligentTieringConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        "intelligent-tiering": [, ""],
        "x-id": [, "GetBucketIntelligentTieringConfiguration"],
        id: [, (0, smithy_client_1.expectNonNull)(input.Id, `Id`)],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetBucketIntelligentTieringConfigurationCommand = serializeAws_restXmlGetBucketIntelligentTieringConfigurationCommand;
const serializeAws_restXmlGetBucketInventoryConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        inventory: [, ""],
        "x-id": [, "GetBucketInventoryConfiguration"],
        id: [, (0, smithy_client_1.expectNonNull)(input.Id, `Id`)],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetBucketInventoryConfigurationCommand = serializeAws_restXmlGetBucketInventoryConfigurationCommand;
const serializeAws_restXmlGetBucketLifecycleConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        lifecycle: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetBucketLifecycleConfigurationCommand = serializeAws_restXmlGetBucketLifecycleConfigurationCommand;
const serializeAws_restXmlGetBucketLocationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        location: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetBucketLocationCommand = serializeAws_restXmlGetBucketLocationCommand;
const serializeAws_restXmlGetBucketLoggingCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        logging: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetBucketLoggingCommand = serializeAws_restXmlGetBucketLoggingCommand;
const serializeAws_restXmlGetBucketMetricsConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        metrics: [, ""],
        "x-id": [, "GetBucketMetricsConfiguration"],
        id: [, (0, smithy_client_1.expectNonNull)(input.Id, `Id`)],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetBucketMetricsConfigurationCommand = serializeAws_restXmlGetBucketMetricsConfigurationCommand;
const serializeAws_restXmlGetBucketNotificationConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        notification: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetBucketNotificationConfigurationCommand = serializeAws_restXmlGetBucketNotificationConfigurationCommand;
const serializeAws_restXmlGetBucketOwnershipControlsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        ownershipControls: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetBucketOwnershipControlsCommand = serializeAws_restXmlGetBucketOwnershipControlsCommand;
const serializeAws_restXmlGetBucketPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        policy: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetBucketPolicyCommand = serializeAws_restXmlGetBucketPolicyCommand;
const serializeAws_restXmlGetBucketPolicyStatusCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        policyStatus: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetBucketPolicyStatusCommand = serializeAws_restXmlGetBucketPolicyStatusCommand;
const serializeAws_restXmlGetBucketReplicationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        replication: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetBucketReplicationCommand = serializeAws_restXmlGetBucketReplicationCommand;
const serializeAws_restXmlGetBucketRequestPaymentCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        requestPayment: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetBucketRequestPaymentCommand = serializeAws_restXmlGetBucketRequestPaymentCommand;
const serializeAws_restXmlGetBucketTaggingCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        tagging: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetBucketTaggingCommand = serializeAws_restXmlGetBucketTaggingCommand;
const serializeAws_restXmlGetBucketVersioningCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        versioning: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetBucketVersioningCommand = serializeAws_restXmlGetBucketVersioningCommand;
const serializeAws_restXmlGetBucketWebsiteCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        website: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetBucketWebsiteCommand = serializeAws_restXmlGetBucketWebsiteCommand;
const serializeAws_restXmlGetObjectCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "if-match": input.IfMatch,
        "if-modified-since": [
            () => isSerializableHeaderValue(input.IfModifiedSince),
            () => (0, smithy_client_1.dateToUtcString)(input.IfModifiedSince).toString(),
        ],
        "if-none-match": input.IfNoneMatch,
        "if-unmodified-since": [
            () => isSerializableHeaderValue(input.IfUnmodifiedSince),
            () => (0, smithy_client_1.dateToUtcString)(input.IfUnmodifiedSince).toString(),
        ],
        range: input.Range,
        "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm,
        "x-amz-server-side-encryption-customer-key": input.SSECustomerKey,
        "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5,
        "x-amz-request-payer": input.RequestPayer,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
        "x-amz-checksum-mode": input.ChecksumMode,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Key", () => input.Key, "{Key+}", true);
    const query = map({
        "x-id": [, "GetObject"],
        "response-cache-control": [, input.ResponseCacheControl],
        "response-content-disposition": [, input.ResponseContentDisposition],
        "response-content-encoding": [, input.ResponseContentEncoding],
        "response-content-language": [, input.ResponseContentLanguage],
        "response-content-type": [, input.ResponseContentType],
        "response-expires": [
            () => input.ResponseExpires !== void 0,
            () => (0, smithy_client_1.dateToUtcString)(input.ResponseExpires).toString(),
        ],
        versionId: [, input.VersionId],
        partNumber: [() => input.PartNumber !== void 0, () => input.PartNumber.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetObjectCommand = serializeAws_restXmlGetObjectCommand;
const serializeAws_restXmlGetObjectAclCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-request-payer": input.RequestPayer,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Key", () => input.Key, "{Key+}", true);
    const query = map({
        acl: [, ""],
        versionId: [, input.VersionId],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetObjectAclCommand = serializeAws_restXmlGetObjectAclCommand;
const serializeAws_restXmlGetObjectAttributesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-max-parts": [() => isSerializableHeaderValue(input.MaxParts), () => input.MaxParts.toString()],
        "x-amz-part-number-marker": input.PartNumberMarker,
        "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm,
        "x-amz-server-side-encryption-customer-key": input.SSECustomerKey,
        "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5,
        "x-amz-request-payer": input.RequestPayer,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
        "x-amz-object-attributes": [
            () => isSerializableHeaderValue(input.ObjectAttributes),
            () => (input.ObjectAttributes || []).map((_entry) => _entry).join(", "),
        ],
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Key", () => input.Key, "{Key+}", true);
    const query = map({
        attributes: [, ""],
        versionId: [, input.VersionId],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetObjectAttributesCommand = serializeAws_restXmlGetObjectAttributesCommand;
const serializeAws_restXmlGetObjectLegalHoldCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-request-payer": input.RequestPayer,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Key", () => input.Key, "{Key+}", true);
    const query = map({
        "legal-hold": [, ""],
        versionId: [, input.VersionId],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetObjectLegalHoldCommand = serializeAws_restXmlGetObjectLegalHoldCommand;
const serializeAws_restXmlGetObjectLockConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        "object-lock": [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetObjectLockConfigurationCommand = serializeAws_restXmlGetObjectLockConfigurationCommand;
const serializeAws_restXmlGetObjectRetentionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-request-payer": input.RequestPayer,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Key", () => input.Key, "{Key+}", true);
    const query = map({
        retention: [, ""],
        versionId: [, input.VersionId],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetObjectRetentionCommand = serializeAws_restXmlGetObjectRetentionCommand;
const serializeAws_restXmlGetObjectTaggingCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
        "x-amz-request-payer": input.RequestPayer,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Key", () => input.Key, "{Key+}", true);
    const query = map({
        tagging: [, ""],
        versionId: [, input.VersionId],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetObjectTaggingCommand = serializeAws_restXmlGetObjectTaggingCommand;
const serializeAws_restXmlGetObjectTorrentCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-request-payer": input.RequestPayer,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Key", () => input.Key, "{Key+}", true);
    const query = map({
        torrent: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetObjectTorrentCommand = serializeAws_restXmlGetObjectTorrentCommand;
const serializeAws_restXmlGetPublicAccessBlockCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        publicAccessBlock: [, ""],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlGetPublicAccessBlockCommand = serializeAws_restXmlGetPublicAccessBlockCommand;
const serializeAws_restXmlHeadBucketCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "HEAD",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlHeadBucketCommand = serializeAws_restXmlHeadBucketCommand;
const serializeAws_restXmlHeadObjectCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "if-match": input.IfMatch,
        "if-modified-since": [
            () => isSerializableHeaderValue(input.IfModifiedSince),
            () => (0, smithy_client_1.dateToUtcString)(input.IfModifiedSince).toString(),
        ],
        "if-none-match": input.IfNoneMatch,
        "if-unmodified-since": [
            () => isSerializableHeaderValue(input.IfUnmodifiedSince),
            () => (0, smithy_client_1.dateToUtcString)(input.IfUnmodifiedSince).toString(),
        ],
        range: input.Range,
        "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm,
        "x-amz-server-side-encryption-customer-key": input.SSECustomerKey,
        "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5,
        "x-amz-request-payer": input.RequestPayer,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
        "x-amz-checksum-mode": input.ChecksumMode,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Key", () => input.Key, "{Key+}", true);
    const query = map({
        versionId: [, input.VersionId],
        partNumber: [() => input.PartNumber !== void 0, () => input.PartNumber.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "HEAD",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlHeadObjectCommand = serializeAws_restXmlHeadObjectCommand;
const serializeAws_restXmlListBucketAnalyticsConfigurationsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        analytics: [, ""],
        "x-id": [, "ListBucketAnalyticsConfigurations"],
        "continuation-token": [, input.ContinuationToken],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlListBucketAnalyticsConfigurationsCommand = serializeAws_restXmlListBucketAnalyticsConfigurationsCommand;
const serializeAws_restXmlListBucketIntelligentTieringConfigurationsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        "intelligent-tiering": [, ""],
        "x-id": [, "ListBucketIntelligentTieringConfigurations"],
        "continuation-token": [, input.ContinuationToken],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlListBucketIntelligentTieringConfigurationsCommand = serializeAws_restXmlListBucketIntelligentTieringConfigurationsCommand;
const serializeAws_restXmlListBucketInventoryConfigurationsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        inventory: [, ""],
        "x-id": [, "ListBucketInventoryConfigurations"],
        "continuation-token": [, input.ContinuationToken],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlListBucketInventoryConfigurationsCommand = serializeAws_restXmlListBucketInventoryConfigurationsCommand;
const serializeAws_restXmlListBucketMetricsConfigurationsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        metrics: [, ""],
        "x-id": [, "ListBucketMetricsConfigurations"],
        "continuation-token": [, input.ContinuationToken],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlListBucketMetricsConfigurationsCommand = serializeAws_restXmlListBucketMetricsConfigurationsCommand;
const serializeAws_restXmlListBucketsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    let body;
    body = "";
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restXmlListBucketsCommand = serializeAws_restXmlListBucketsCommand;
const serializeAws_restXmlListMultipartUploadsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        uploads: [, ""],
        delimiter: [, input.Delimiter],
        "encoding-type": [, input.EncodingType],
        "key-marker": [, input.KeyMarker],
        "max-uploads": [() => input.MaxUploads !== void 0, () => input.MaxUploads.toString()],
        prefix: [, input.Prefix],
        "upload-id-marker": [, input.UploadIdMarker],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlListMultipartUploadsCommand = serializeAws_restXmlListMultipartUploadsCommand;
const serializeAws_restXmlListObjectsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-request-payer": input.RequestPayer,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        delimiter: [, input.Delimiter],
        "encoding-type": [, input.EncodingType],
        marker: [, input.Marker],
        "max-keys": [() => input.MaxKeys !== void 0, () => input.MaxKeys.toString()],
        prefix: [, input.Prefix],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlListObjectsCommand = serializeAws_restXmlListObjectsCommand;
const serializeAws_restXmlListObjectsV2Command = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-request-payer": input.RequestPayer,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        "list-type": [, "2"],
        delimiter: [, input.Delimiter],
        "encoding-type": [, input.EncodingType],
        "max-keys": [() => input.MaxKeys !== void 0, () => input.MaxKeys.toString()],
        prefix: [, input.Prefix],
        "continuation-token": [, input.ContinuationToken],
        "fetch-owner": [() => input.FetchOwner !== void 0, () => input.FetchOwner.toString()],
        "start-after": [, input.StartAfter],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlListObjectsV2Command = serializeAws_restXmlListObjectsV2Command;
const serializeAws_restXmlListObjectVersionsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        versions: [, ""],
        delimiter: [, input.Delimiter],
        "encoding-type": [, input.EncodingType],
        "key-marker": [, input.KeyMarker],
        "max-keys": [() => input.MaxKeys !== void 0, () => input.MaxKeys.toString()],
        prefix: [, input.Prefix],
        "version-id-marker": [, input.VersionIdMarker],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlListObjectVersionsCommand = serializeAws_restXmlListObjectVersionsCommand;
const serializeAws_restXmlListPartsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-request-payer": input.RequestPayer,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
        "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm,
        "x-amz-server-side-encryption-customer-key": input.SSECustomerKey,
        "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Key", () => input.Key, "{Key+}", true);
    const query = map({
        "x-id": [, "ListParts"],
        "max-parts": [() => input.MaxParts !== void 0, () => input.MaxParts.toString()],
        "part-number-marker": [, input.PartNumberMarker],
        uploadId: [, (0, smithy_client_1.expectNonNull)(input.UploadId, `UploadId`)],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlListPartsCommand = serializeAws_restXmlListPartsCommand;
const serializeAws_restXmlPutBucketAccelerateConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
        "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        accelerate: [, ""],
    });
    let body;
    if (input.AccelerateConfiguration !== undefined) {
        body = serializeAws_restXmlAccelerateConfiguration(input.AccelerateConfiguration, context);
    }
    let contents;
    if (input.AccelerateConfiguration !== undefined) {
        contents = serializeAws_restXmlAccelerateConfiguration(input.AccelerateConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutBucketAccelerateConfigurationCommand = serializeAws_restXmlPutBucketAccelerateConfigurationCommand;
const serializeAws_restXmlPutBucketAclCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "x-amz-acl": input.ACL,
        "content-md5": input.ContentMD5,
        "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm,
        "x-amz-grant-full-control": input.GrantFullControl,
        "x-amz-grant-read": input.GrantRead,
        "x-amz-grant-read-acp": input.GrantReadACP,
        "x-amz-grant-write": input.GrantWrite,
        "x-amz-grant-write-acp": input.GrantWriteACP,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        acl: [, ""],
    });
    let body;
    if (input.AccessControlPolicy !== undefined) {
        body = serializeAws_restXmlAccessControlPolicy(input.AccessControlPolicy, context);
    }
    let contents;
    if (input.AccessControlPolicy !== undefined) {
        contents = serializeAws_restXmlAccessControlPolicy(input.AccessControlPolicy, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutBucketAclCommand = serializeAws_restXmlPutBucketAclCommand;
const serializeAws_restXmlPutBucketAnalyticsConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        analytics: [, ""],
        id: [, (0, smithy_client_1.expectNonNull)(input.Id, `Id`)],
    });
    let body;
    if (input.AnalyticsConfiguration !== undefined) {
        body = serializeAws_restXmlAnalyticsConfiguration(input.AnalyticsConfiguration, context);
    }
    let contents;
    if (input.AnalyticsConfiguration !== undefined) {
        contents = serializeAws_restXmlAnalyticsConfiguration(input.AnalyticsConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutBucketAnalyticsConfigurationCommand = serializeAws_restXmlPutBucketAnalyticsConfigurationCommand;
const serializeAws_restXmlPutBucketCorsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "content-md5": input.ContentMD5,
        "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        cors: [, ""],
    });
    let body;
    if (input.CORSConfiguration !== undefined) {
        body = serializeAws_restXmlCORSConfiguration(input.CORSConfiguration, context);
    }
    let contents;
    if (input.CORSConfiguration !== undefined) {
        contents = serializeAws_restXmlCORSConfiguration(input.CORSConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutBucketCorsCommand = serializeAws_restXmlPutBucketCorsCommand;
const serializeAws_restXmlPutBucketEncryptionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "content-md5": input.ContentMD5,
        "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        encryption: [, ""],
    });
    let body;
    if (input.ServerSideEncryptionConfiguration !== undefined) {
        body = serializeAws_restXmlServerSideEncryptionConfiguration(input.ServerSideEncryptionConfiguration, context);
    }
    let contents;
    if (input.ServerSideEncryptionConfiguration !== undefined) {
        contents = serializeAws_restXmlServerSideEncryptionConfiguration(input.ServerSideEncryptionConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutBucketEncryptionCommand = serializeAws_restXmlPutBucketEncryptionCommand;
const serializeAws_restXmlPutBucketIntelligentTieringConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/xml",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        "intelligent-tiering": [, ""],
        id: [, (0, smithy_client_1.expectNonNull)(input.Id, `Id`)],
    });
    let body;
    if (input.IntelligentTieringConfiguration !== undefined) {
        body = serializeAws_restXmlIntelligentTieringConfiguration(input.IntelligentTieringConfiguration, context);
    }
    let contents;
    if (input.IntelligentTieringConfiguration !== undefined) {
        contents = serializeAws_restXmlIntelligentTieringConfiguration(input.IntelligentTieringConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutBucketIntelligentTieringConfigurationCommand = serializeAws_restXmlPutBucketIntelligentTieringConfigurationCommand;
const serializeAws_restXmlPutBucketInventoryConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        inventory: [, ""],
        id: [, (0, smithy_client_1.expectNonNull)(input.Id, `Id`)],
    });
    let body;
    if (input.InventoryConfiguration !== undefined) {
        body = serializeAws_restXmlInventoryConfiguration(input.InventoryConfiguration, context);
    }
    let contents;
    if (input.InventoryConfiguration !== undefined) {
        contents = serializeAws_restXmlInventoryConfiguration(input.InventoryConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutBucketInventoryConfigurationCommand = serializeAws_restXmlPutBucketInventoryConfigurationCommand;
const serializeAws_restXmlPutBucketLifecycleConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        lifecycle: [, ""],
    });
    let body;
    if (input.LifecycleConfiguration !== undefined) {
        body = serializeAws_restXmlBucketLifecycleConfiguration(input.LifecycleConfiguration, context);
    }
    let contents;
    if (input.LifecycleConfiguration !== undefined) {
        contents = serializeAws_restXmlBucketLifecycleConfiguration(input.LifecycleConfiguration, context);
        contents = contents.withName("LifecycleConfiguration");
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutBucketLifecycleConfigurationCommand = serializeAws_restXmlPutBucketLifecycleConfigurationCommand;
const serializeAws_restXmlPutBucketLoggingCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "content-md5": input.ContentMD5,
        "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        logging: [, ""],
    });
    let body;
    if (input.BucketLoggingStatus !== undefined) {
        body = serializeAws_restXmlBucketLoggingStatus(input.BucketLoggingStatus, context);
    }
    let contents;
    if (input.BucketLoggingStatus !== undefined) {
        contents = serializeAws_restXmlBucketLoggingStatus(input.BucketLoggingStatus, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutBucketLoggingCommand = serializeAws_restXmlPutBucketLoggingCommand;
const serializeAws_restXmlPutBucketMetricsConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        metrics: [, ""],
        id: [, (0, smithy_client_1.expectNonNull)(input.Id, `Id`)],
    });
    let body;
    if (input.MetricsConfiguration !== undefined) {
        body = serializeAws_restXmlMetricsConfiguration(input.MetricsConfiguration, context);
    }
    let contents;
    if (input.MetricsConfiguration !== undefined) {
        contents = serializeAws_restXmlMetricsConfiguration(input.MetricsConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutBucketMetricsConfigurationCommand = serializeAws_restXmlPutBucketMetricsConfigurationCommand;
const serializeAws_restXmlPutBucketNotificationConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
        "x-amz-skip-destination-validation": [
            () => isSerializableHeaderValue(input.SkipDestinationValidation),
            () => input.SkipDestinationValidation.toString(),
        ],
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        notification: [, ""],
    });
    let body;
    if (input.NotificationConfiguration !== undefined) {
        body = serializeAws_restXmlNotificationConfiguration(input.NotificationConfiguration, context);
    }
    let contents;
    if (input.NotificationConfiguration !== undefined) {
        contents = serializeAws_restXmlNotificationConfiguration(input.NotificationConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutBucketNotificationConfigurationCommand = serializeAws_restXmlPutBucketNotificationConfigurationCommand;
const serializeAws_restXmlPutBucketOwnershipControlsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "content-md5": input.ContentMD5,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        ownershipControls: [, ""],
    });
    let body;
    if (input.OwnershipControls !== undefined) {
        body = serializeAws_restXmlOwnershipControls(input.OwnershipControls, context);
    }
    let contents;
    if (input.OwnershipControls !== undefined) {
        contents = serializeAws_restXmlOwnershipControls(input.OwnershipControls, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutBucketOwnershipControlsCommand = serializeAws_restXmlPutBucketOwnershipControlsCommand;
const serializeAws_restXmlPutBucketPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "text/plain",
        "content-md5": input.ContentMD5,
        "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm,
        "x-amz-confirm-remove-self-bucket-access": [
            () => isSerializableHeaderValue(input.ConfirmRemoveSelfBucketAccess),
            () => input.ConfirmRemoveSelfBucketAccess.toString(),
        ],
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        policy: [, ""],
    });
    let body;
    if (input.Policy !== undefined) {
        body = input.Policy;
    }
    let contents;
    if (input.Policy !== undefined) {
        contents = input.Policy;
        body = contents;
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutBucketPolicyCommand = serializeAws_restXmlPutBucketPolicyCommand;
const serializeAws_restXmlPutBucketReplicationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "content-md5": input.ContentMD5,
        "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm,
        "x-amz-bucket-object-lock-token": input.Token,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        replication: [, ""],
    });
    let body;
    if (input.ReplicationConfiguration !== undefined) {
        body = serializeAws_restXmlReplicationConfiguration(input.ReplicationConfiguration, context);
    }
    let contents;
    if (input.ReplicationConfiguration !== undefined) {
        contents = serializeAws_restXmlReplicationConfiguration(input.ReplicationConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutBucketReplicationCommand = serializeAws_restXmlPutBucketReplicationCommand;
const serializeAws_restXmlPutBucketRequestPaymentCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "content-md5": input.ContentMD5,
        "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        requestPayment: [, ""],
    });
    let body;
    if (input.RequestPaymentConfiguration !== undefined) {
        body = serializeAws_restXmlRequestPaymentConfiguration(input.RequestPaymentConfiguration, context);
    }
    let contents;
    if (input.RequestPaymentConfiguration !== undefined) {
        contents = serializeAws_restXmlRequestPaymentConfiguration(input.RequestPaymentConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutBucketRequestPaymentCommand = serializeAws_restXmlPutBucketRequestPaymentCommand;
const serializeAws_restXmlPutBucketTaggingCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "content-md5": input.ContentMD5,
        "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        tagging: [, ""],
    });
    let body;
    if (input.Tagging !== undefined) {
        body = serializeAws_restXmlTagging(input.Tagging, context);
    }
    let contents;
    if (input.Tagging !== undefined) {
        contents = serializeAws_restXmlTagging(input.Tagging, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutBucketTaggingCommand = serializeAws_restXmlPutBucketTaggingCommand;
const serializeAws_restXmlPutBucketVersioningCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "content-md5": input.ContentMD5,
        "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm,
        "x-amz-mfa": input.MFA,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        versioning: [, ""],
    });
    let body;
    if (input.VersioningConfiguration !== undefined) {
        body = serializeAws_restXmlVersioningConfiguration(input.VersioningConfiguration, context);
    }
    let contents;
    if (input.VersioningConfiguration !== undefined) {
        contents = serializeAws_restXmlVersioningConfiguration(input.VersioningConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutBucketVersioningCommand = serializeAws_restXmlPutBucketVersioningCommand;
const serializeAws_restXmlPutBucketWebsiteCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "content-md5": input.ContentMD5,
        "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        website: [, ""],
    });
    let body;
    if (input.WebsiteConfiguration !== undefined) {
        body = serializeAws_restXmlWebsiteConfiguration(input.WebsiteConfiguration, context);
    }
    let contents;
    if (input.WebsiteConfiguration !== undefined) {
        contents = serializeAws_restXmlWebsiteConfiguration(input.WebsiteConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutBucketWebsiteCommand = serializeAws_restXmlPutBucketWebsiteCommand;
const serializeAws_restXmlPutObjectCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": input.ContentType || "application/octet-stream",
        "x-amz-acl": input.ACL,
        "cache-control": input.CacheControl,
        "content-disposition": input.ContentDisposition,
        "content-encoding": input.ContentEncoding,
        "content-language": input.ContentLanguage,
        "content-length": [() => isSerializableHeaderValue(input.ContentLength), () => input.ContentLength.toString()],
        "content-md5": input.ContentMD5,
        "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm,
        "x-amz-checksum-crc32": input.ChecksumCRC32,
        "x-amz-checksum-crc32c": input.ChecksumCRC32C,
        "x-amz-checksum-sha1": input.ChecksumSHA1,
        "x-amz-checksum-sha256": input.ChecksumSHA256,
        expires: [() => isSerializableHeaderValue(input.Expires), () => (0, smithy_client_1.dateToUtcString)(input.Expires).toString()],
        "x-amz-grant-full-control": input.GrantFullControl,
        "x-amz-grant-read": input.GrantRead,
        "x-amz-grant-read-acp": input.GrantReadACP,
        "x-amz-grant-write-acp": input.GrantWriteACP,
        "x-amz-server-side-encryption": input.ServerSideEncryption,
        "x-amz-storage-class": input.StorageClass,
        "x-amz-website-redirect-location": input.WebsiteRedirectLocation,
        "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm,
        "x-amz-server-side-encryption-customer-key": input.SSECustomerKey,
        "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5,
        "x-amz-server-side-encryption-aws-kms-key-id": input.SSEKMSKeyId,
        "x-amz-server-side-encryption-context": input.SSEKMSEncryptionContext,
        "x-amz-server-side-encryption-bucket-key-enabled": [
            () => isSerializableHeaderValue(input.BucketKeyEnabled),
            () => input.BucketKeyEnabled.toString(),
        ],
        "x-amz-request-payer": input.RequestPayer,
        "x-amz-tagging": input.Tagging,
        "x-amz-object-lock-mode": input.ObjectLockMode,
        "x-amz-object-lock-retain-until-date": [
            () => isSerializableHeaderValue(input.ObjectLockRetainUntilDate),
            () => (input.ObjectLockRetainUntilDate.toISOString().split(".")[0] + "Z").toString(),
        ],
        "x-amz-object-lock-legal-hold": input.ObjectLockLegalHoldStatus,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
        ...(input.Metadata !== undefined &&
            Object.keys(input.Metadata).reduce((acc, suffix) => {
                acc[`x-amz-meta-${suffix.toLowerCase()}`] = input.Metadata[suffix];
                return acc;
            }, {})),
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Key", () => input.Key, "{Key+}", true);
    const query = map({
        "x-id": [, "PutObject"],
    });
    let body;
    if (input.Body !== undefined) {
        body = input.Body;
    }
    let contents;
    if (input.Body !== undefined) {
        contents = input.Body;
        body = contents;
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutObjectCommand = serializeAws_restXmlPutObjectCommand;
const serializeAws_restXmlPutObjectAclCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "x-amz-acl": input.ACL,
        "content-md5": input.ContentMD5,
        "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm,
        "x-amz-grant-full-control": input.GrantFullControl,
        "x-amz-grant-read": input.GrantRead,
        "x-amz-grant-read-acp": input.GrantReadACP,
        "x-amz-grant-write": input.GrantWrite,
        "x-amz-grant-write-acp": input.GrantWriteACP,
        "x-amz-request-payer": input.RequestPayer,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Key", () => input.Key, "{Key+}", true);
    const query = map({
        acl: [, ""],
        versionId: [, input.VersionId],
    });
    let body;
    if (input.AccessControlPolicy !== undefined) {
        body = serializeAws_restXmlAccessControlPolicy(input.AccessControlPolicy, context);
    }
    let contents;
    if (input.AccessControlPolicy !== undefined) {
        contents = serializeAws_restXmlAccessControlPolicy(input.AccessControlPolicy, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutObjectAclCommand = serializeAws_restXmlPutObjectAclCommand;
const serializeAws_restXmlPutObjectLegalHoldCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "x-amz-request-payer": input.RequestPayer,
        "content-md5": input.ContentMD5,
        "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Key", () => input.Key, "{Key+}", true);
    const query = map({
        "legal-hold": [, ""],
        versionId: [, input.VersionId],
    });
    let body;
    if (input.LegalHold !== undefined) {
        body = serializeAws_restXmlObjectLockLegalHold(input.LegalHold, context);
    }
    let contents;
    if (input.LegalHold !== undefined) {
        contents = serializeAws_restXmlObjectLockLegalHold(input.LegalHold, context);
        contents = contents.withName("LegalHold");
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutObjectLegalHoldCommand = serializeAws_restXmlPutObjectLegalHoldCommand;
const serializeAws_restXmlPutObjectLockConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "x-amz-request-payer": input.RequestPayer,
        "x-amz-bucket-object-lock-token": input.Token,
        "content-md5": input.ContentMD5,
        "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        "object-lock": [, ""],
    });
    let body;
    if (input.ObjectLockConfiguration !== undefined) {
        body = serializeAws_restXmlObjectLockConfiguration(input.ObjectLockConfiguration, context);
    }
    let contents;
    if (input.ObjectLockConfiguration !== undefined) {
        contents = serializeAws_restXmlObjectLockConfiguration(input.ObjectLockConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutObjectLockConfigurationCommand = serializeAws_restXmlPutObjectLockConfigurationCommand;
const serializeAws_restXmlPutObjectRetentionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "x-amz-request-payer": input.RequestPayer,
        "x-amz-bypass-governance-retention": [
            () => isSerializableHeaderValue(input.BypassGovernanceRetention),
            () => input.BypassGovernanceRetention.toString(),
        ],
        "content-md5": input.ContentMD5,
        "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Key", () => input.Key, "{Key+}", true);
    const query = map({
        retention: [, ""],
        versionId: [, input.VersionId],
    });
    let body;
    if (input.Retention !== undefined) {
        body = serializeAws_restXmlObjectLockRetention(input.Retention, context);
    }
    let contents;
    if (input.Retention !== undefined) {
        contents = serializeAws_restXmlObjectLockRetention(input.Retention, context);
        contents = contents.withName("Retention");
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutObjectRetentionCommand = serializeAws_restXmlPutObjectRetentionCommand;
const serializeAws_restXmlPutObjectTaggingCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "content-md5": input.ContentMD5,
        "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
        "x-amz-request-payer": input.RequestPayer,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Key", () => input.Key, "{Key+}", true);
    const query = map({
        tagging: [, ""],
        versionId: [, input.VersionId],
    });
    let body;
    if (input.Tagging !== undefined) {
        body = serializeAws_restXmlTagging(input.Tagging, context);
    }
    let contents;
    if (input.Tagging !== undefined) {
        contents = serializeAws_restXmlTagging(input.Tagging, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutObjectTaggingCommand = serializeAws_restXmlPutObjectTaggingCommand;
const serializeAws_restXmlPutPublicAccessBlockCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "content-md5": input.ContentMD5,
        "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    const query = map({
        publicAccessBlock: [, ""],
    });
    let body;
    if (input.PublicAccessBlockConfiguration !== undefined) {
        body = serializeAws_restXmlPublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration, context);
    }
    let contents;
    if (input.PublicAccessBlockConfiguration !== undefined) {
        contents = serializeAws_restXmlPublicAccessBlockConfiguration(input.PublicAccessBlockConfiguration, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlPutPublicAccessBlockCommand = serializeAws_restXmlPutPublicAccessBlockCommand;
const serializeAws_restXmlRestoreObjectCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "x-amz-request-payer": input.RequestPayer,
        "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Key", () => input.Key, "{Key+}", true);
    const query = map({
        restore: [, ""],
        "x-id": [, "RestoreObject"],
        versionId: [, input.VersionId],
    });
    let body;
    if (input.RestoreRequest !== undefined) {
        body = serializeAws_restXmlRestoreRequest(input.RestoreRequest, context);
    }
    let contents;
    if (input.RestoreRequest !== undefined) {
        contents = serializeAws_restXmlRestoreRequest(input.RestoreRequest, context);
        body = '<?xml version="1.0" encoding="UTF-8"?>';
        contents.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
        body += contents.toString();
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlRestoreObjectCommand = serializeAws_restXmlRestoreObjectCommand;
const serializeAws_restXmlSelectObjectContentCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/xml",
        "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm,
        "x-amz-server-side-encryption-customer-key": input.SSECustomerKey,
        "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Key", () => input.Key, "{Key+}", true);
    const query = map({
        select: [, ""],
        "select-type": [, "2"],
        "x-id": [, "SelectObjectContent"],
    });
    let body;
    body = '<?xml version="1.0" encoding="UTF-8"?>';
    const bodyNode = new xml_builder_1.XmlNode("SelectObjectContentRequest");
    bodyNode.addAttribute("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
    if (input.Expression !== undefined) {
        const node = xml_builder_1.XmlNode.of("Expression", input.Expression).withName("Expression");
        bodyNode.addChildNode(node);
    }
    if (input.ExpressionType !== undefined) {
        const node = xml_builder_1.XmlNode.of("ExpressionType", input.ExpressionType).withName("ExpressionType");
        bodyNode.addChildNode(node);
    }
    if (input.InputSerialization !== undefined) {
        const node = serializeAws_restXmlInputSerialization(input.InputSerialization, context).withName("InputSerialization");
        bodyNode.addChildNode(node);
    }
    if (input.OutputSerialization !== undefined) {
        const node = serializeAws_restXmlOutputSerialization(input.OutputSerialization, context).withName("OutputSerialization");
        bodyNode.addChildNode(node);
    }
    if (input.RequestProgress !== undefined) {
        const node = serializeAws_restXmlRequestProgress(input.RequestProgress, context).withName("RequestProgress");
        bodyNode.addChildNode(node);
    }
    if (input.ScanRange !== undefined) {
        const node = serializeAws_restXmlScanRange(input.ScanRange, context).withName("ScanRange");
        bodyNode.addChildNode(node);
    }
    body += bodyNode.toString();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlSelectObjectContentCommand = serializeAws_restXmlSelectObjectContentCommand;
const serializeAws_restXmlUploadPartCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/octet-stream",
        "content-length": [() => isSerializableHeaderValue(input.ContentLength), () => input.ContentLength.toString()],
        "content-md5": input.ContentMD5,
        "x-amz-sdk-checksum-algorithm": input.ChecksumAlgorithm,
        "x-amz-checksum-crc32": input.ChecksumCRC32,
        "x-amz-checksum-crc32c": input.ChecksumCRC32C,
        "x-amz-checksum-sha1": input.ChecksumSHA1,
        "x-amz-checksum-sha256": input.ChecksumSHA256,
        "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm,
        "x-amz-server-side-encryption-customer-key": input.SSECustomerKey,
        "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5,
        "x-amz-request-payer": input.RequestPayer,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Key", () => input.Key, "{Key+}", true);
    const query = map({
        "x-id": [, "UploadPart"],
        partNumber: [(0, smithy_client_1.expectNonNull)(input.PartNumber, `PartNumber`) != null, () => input.PartNumber.toString()],
        uploadId: [, (0, smithy_client_1.expectNonNull)(input.UploadId, `UploadId`)],
    });
    let body;
    if (input.Body !== undefined) {
        body = input.Body;
    }
    let contents;
    if (input.Body !== undefined) {
        contents = input.Body;
        body = contents;
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlUploadPartCommand = serializeAws_restXmlUploadPartCommand;
const serializeAws_restXmlUploadPartCopyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-copy-source": input.CopySource,
        "x-amz-copy-source-if-match": input.CopySourceIfMatch,
        "x-amz-copy-source-if-modified-since": [
            () => isSerializableHeaderValue(input.CopySourceIfModifiedSince),
            () => (0, smithy_client_1.dateToUtcString)(input.CopySourceIfModifiedSince).toString(),
        ],
        "x-amz-copy-source-if-none-match": input.CopySourceIfNoneMatch,
        "x-amz-copy-source-if-unmodified-since": [
            () => isSerializableHeaderValue(input.CopySourceIfUnmodifiedSince),
            () => (0, smithy_client_1.dateToUtcString)(input.CopySourceIfUnmodifiedSince).toString(),
        ],
        "x-amz-copy-source-range": input.CopySourceRange,
        "x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm,
        "x-amz-server-side-encryption-customer-key": input.SSECustomerKey,
        "x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5,
        "x-amz-copy-source-server-side-encryption-customer-algorithm": input.CopySourceSSECustomerAlgorithm,
        "x-amz-copy-source-server-side-encryption-customer-key": input.CopySourceSSECustomerKey,
        "x-amz-copy-source-server-side-encryption-customer-key-md5": input.CopySourceSSECustomerKeyMD5,
        "x-amz-request-payer": input.RequestPayer,
        "x-amz-expected-bucket-owner": input.ExpectedBucketOwner,
        "x-amz-source-expected-bucket-owner": input.ExpectedSourceBucketOwner,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Key+}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Bucket", () => input.Bucket, "{Bucket}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Key", () => input.Key, "{Key+}", true);
    const query = map({
        "x-id": [, "UploadPartCopy"],
        partNumber: [(0, smithy_client_1.expectNonNull)(input.PartNumber, `PartNumber`) != null, () => input.PartNumber.toString()],
        uploadId: [, (0, smithy_client_1.expectNonNull)(input.UploadId, `UploadId`)],
    });
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlUploadPartCopyCommand = serializeAws_restXmlUploadPartCopyCommand;
const serializeAws_restXmlWriteGetObjectResponseCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
        "content-type": "application/octet-stream",
        "x-amz-request-route": input.RequestRoute,
        "x-amz-request-token": input.RequestToken,
        "x-amz-fwd-status": [() => isSerializableHeaderValue(input.StatusCode), () => input.StatusCode.toString()],
        "x-amz-fwd-error-code": input.ErrorCode,
        "x-amz-fwd-error-message": input.ErrorMessage,
        "x-amz-fwd-header-accept-ranges": input.AcceptRanges,
        "x-amz-fwd-header-cache-control": input.CacheControl,
        "x-amz-fwd-header-content-disposition": input.ContentDisposition,
        "x-amz-fwd-header-content-encoding": input.ContentEncoding,
        "x-amz-fwd-header-content-language": input.ContentLanguage,
        "content-length": [() => isSerializableHeaderValue(input.ContentLength), () => input.ContentLength.toString()],
        "x-amz-fwd-header-content-range": input.ContentRange,
        "x-amz-fwd-header-content-type": input.ContentType,
        "x-amz-fwd-header-x-amz-checksum-crc32": input.ChecksumCRC32,
        "x-amz-fwd-header-x-amz-checksum-crc32c": input.ChecksumCRC32C,
        "x-amz-fwd-header-x-amz-checksum-sha1": input.ChecksumSHA1,
        "x-amz-fwd-header-x-amz-checksum-sha256": input.ChecksumSHA256,
        "x-amz-fwd-header-x-amz-delete-marker": [
            () => isSerializableHeaderValue(input.DeleteMarker),
            () => input.DeleteMarker.toString(),
        ],
        "x-amz-fwd-header-etag": input.ETag,
        "x-amz-fwd-header-expires": [
            () => isSerializableHeaderValue(input.Expires),
            () => (0, smithy_client_1.dateToUtcString)(input.Expires).toString(),
        ],
        "x-amz-fwd-header-x-amz-expiration": input.Expiration,
        "x-amz-fwd-header-last-modified": [
            () => isSerializableHeaderValue(input.LastModified),
            () => (0, smithy_client_1.dateToUtcString)(input.LastModified).toString(),
        ],
        "x-amz-fwd-header-x-amz-missing-meta": [
            () => isSerializableHeaderValue(input.MissingMeta),
            () => input.MissingMeta.toString(),
        ],
        "x-amz-fwd-header-x-amz-object-lock-mode": input.ObjectLockMode,
        "x-amz-fwd-header-x-amz-object-lock-legal-hold": input.ObjectLockLegalHoldStatus,
        "x-amz-fwd-header-x-amz-object-lock-retain-until-date": [
            () => isSerializableHeaderValue(input.ObjectLockRetainUntilDate),
            () => (input.ObjectLockRetainUntilDate.toISOString().split(".")[0] + "Z").toString(),
        ],
        "x-amz-fwd-header-x-amz-mp-parts-count": [
            () => isSerializableHeaderValue(input.PartsCount),
            () => input.PartsCount.toString(),
        ],
        "x-amz-fwd-header-x-amz-replication-status": input.ReplicationStatus,
        "x-amz-fwd-header-x-amz-request-charged": input.RequestCharged,
        "x-amz-fwd-header-x-amz-restore": input.Restore,
        "x-amz-fwd-header-x-amz-server-side-encryption": input.ServerSideEncryption,
        "x-amz-fwd-header-x-amz-server-side-encryption-customer-algorithm": input.SSECustomerAlgorithm,
        "x-amz-fwd-header-x-amz-server-side-encryption-aws-kms-key-id": input.SSEKMSKeyId,
        "x-amz-fwd-header-x-amz-server-side-encryption-customer-key-md5": input.SSECustomerKeyMD5,
        "x-amz-fwd-header-x-amz-storage-class": input.StorageClass,
        "x-amz-fwd-header-x-amz-tagging-count": [
            () => isSerializableHeaderValue(input.TagCount),
            () => input.TagCount.toString(),
        ],
        "x-amz-fwd-header-x-amz-version-id": input.VersionId,
        "x-amz-fwd-header-x-amz-server-side-encryption-bucket-key-enabled": [
            () => isSerializableHeaderValue(input.BucketKeyEnabled),
            () => input.BucketKeyEnabled.toString(),
        ],
        ...(input.Metadata !== undefined &&
            Object.keys(input.Metadata).reduce((acc, suffix) => {
                acc[`x-amz-meta-${suffix.toLowerCase()}`] = input.Metadata[suffix];
                return acc;
            }, {})),
    });
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/WriteGetObjectResponse";
    const query = map({
        "x-id": [, "WriteGetObjectResponse"],
    });
    let body;
    if (input.Body !== undefined) {
        body = input.Body;
    }
    let contents;
    if (input.Body !== undefined) {
        contents = input.Body;
        body = contents;
    }
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "{RequestRoute}." + resolvedHostname;
        if (input.RequestRoute === undefined) {
            throw new Error("Empty value provided for input host prefix: RequestRoute.");
        }
        resolvedHostname = resolvedHostname.replace("{RequestRoute}", input.RequestRoute);
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname: resolvedHostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restXmlWriteGetObjectResponseCommand = serializeAws_restXmlWriteGetObjectResponseCommand;
const deserializeAws_restXmlAbortMultipartUploadCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restXmlAbortMultipartUploadCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        RequestCharged: [, output.headers["x-amz-request-charged"]],
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlAbortMultipartUploadCommand = deserializeAws_restXmlAbortMultipartUploadCommand;
const deserializeAws_restXmlAbortMultipartUploadCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchUpload":
        case "com.amazonaws.s3#NoSuchUpload":
            throw await deserializeAws_restXmlNoSuchUploadResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: S3ServiceException_1.S3ServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restXmlCompleteMultipartUploadCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlCompleteMultipartUploadCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        Expiration: [, output.headers["x-amz-expiration"]],
        ServerSideEncryption: [, output.headers["x-amz-server-side-encryption"]],
        VersionId: [, output.headers["x-amz-version-id"]],
        SSEKMSKeyId: [, output.headers["x-amz-server-side-encryption-aws-kms-key-id"]],
        BucketKeyEnabled: [
            () => void 0 !== output.headers["x-amz-server-side-encryption-bucket-key-enabled"],
            () => (0, smithy_client_1.parseBoolean)(output.headers["x-amz-server-side-encryption-bucket-key-enabled"]),
        ],
        RequestCharged: [, output.headers["x-amz-request-charged"]],
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data["Bucket"] !== undefined) {
        contents.Bucket = (0, smithy_client_1.expectString)(data["Bucket"]);
    }
    if (data["ChecksumCRC32"] !== undefined) {
        contents.ChecksumCRC32 = (0, smithy_client_1.expectString)(data["ChecksumCRC32"]);
    }
    if (data["ChecksumCRC32C"] !== undefined) {
        contents.ChecksumCRC32C = (0, smithy_client_1.expectString)(data["ChecksumCRC32C"]);
    }
    if (data["ChecksumSHA1"] !== undefined) {
        contents.ChecksumSHA1 = (0, smithy_client_1.expectString)(data["ChecksumSHA1"]);
    }
    if (data["ChecksumSHA256"] !== undefined) {
        contents.ChecksumSHA256 = (0, smithy_client_1.expectString)(data["ChecksumSHA256"]);
    }
    if (data["ETag"] !== undefined) {
        contents.ETag = (0, smithy_client_1.expectString)(data["ETag"]);
    }
    if (data["Key"] !== undefined) {
        contents.Key = (0, smithy_client_1.expectString)(data["Key"]);
    }
    if (data["Location"] !== undefined) {
        contents.Location = (0, smithy_client_1.expectString)(data["Location"]);
    }
    return contents;
};
exports.deserializeAws_restXmlCompleteMultipartUploadCommand = deserializeAws_restXmlCompleteMultipartUploadCommand;
const deserializeAws_restXmlCompleteMultipartUploadCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlCopyObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlCopyObjectCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        Expiration: [, output.headers["x-amz-expiration"]],
        CopySourceVersionId: [, output.headers["x-amz-copy-source-version-id"]],
        VersionId: [, output.headers["x-amz-version-id"]],
        ServerSideEncryption: [, output.headers["x-amz-server-side-encryption"]],
        SSECustomerAlgorithm: [, output.headers["x-amz-server-side-encryption-customer-algorithm"]],
        SSECustomerKeyMD5: [, output.headers["x-amz-server-side-encryption-customer-key-md5"]],
        SSEKMSKeyId: [, output.headers["x-amz-server-side-encryption-aws-kms-key-id"]],
        SSEKMSEncryptionContext: [, output.headers["x-amz-server-side-encryption-context"]],
        BucketKeyEnabled: [
            () => void 0 !== output.headers["x-amz-server-side-encryption-bucket-key-enabled"],
            () => (0, smithy_client_1.parseBoolean)(output.headers["x-amz-server-side-encryption-bucket-key-enabled"]),
        ],
        RequestCharged: [, output.headers["x-amz-request-charged"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.CopyObjectResult = deserializeAws_restXmlCopyObjectResult(data, context);
    return contents;
};
exports.deserializeAws_restXmlCopyObjectCommand = deserializeAws_restXmlCopyObjectCommand;
const deserializeAws_restXmlCopyObjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ObjectNotInActiveTierError":
        case "com.amazonaws.s3#ObjectNotInActiveTierError":
            throw await deserializeAws_restXmlObjectNotInActiveTierErrorResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: S3ServiceException_1.S3ServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restXmlCreateBucketCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlCreateBucketCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        Location: [, output.headers["location"]],
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlCreateBucketCommand = deserializeAws_restXmlCreateBucketCommand;
const deserializeAws_restXmlCreateBucketCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BucketAlreadyExists":
        case "com.amazonaws.s3#BucketAlreadyExists":
            throw await deserializeAws_restXmlBucketAlreadyExistsResponse(parsedOutput, context);
        case "BucketAlreadyOwnedByYou":
        case "com.amazonaws.s3#BucketAlreadyOwnedByYou":
            throw await deserializeAws_restXmlBucketAlreadyOwnedByYouResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: S3ServiceException_1.S3ServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restXmlCreateMultipartUploadCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlCreateMultipartUploadCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        AbortDate: [
            () => void 0 !== output.headers["x-amz-abort-date"],
            () => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc7231DateTime)(output.headers["x-amz-abort-date"])),
        ],
        AbortRuleId: [, output.headers["x-amz-abort-rule-id"]],
        ServerSideEncryption: [, output.headers["x-amz-server-side-encryption"]],
        SSECustomerAlgorithm: [, output.headers["x-amz-server-side-encryption-customer-algorithm"]],
        SSECustomerKeyMD5: [, output.headers["x-amz-server-side-encryption-customer-key-md5"]],
        SSEKMSKeyId: [, output.headers["x-amz-server-side-encryption-aws-kms-key-id"]],
        SSEKMSEncryptionContext: [, output.headers["x-amz-server-side-encryption-context"]],
        BucketKeyEnabled: [
            () => void 0 !== output.headers["x-amz-server-side-encryption-bucket-key-enabled"],
            () => (0, smithy_client_1.parseBoolean)(output.headers["x-amz-server-side-encryption-bucket-key-enabled"]),
        ],
        RequestCharged: [, output.headers["x-amz-request-charged"]],
        ChecksumAlgorithm: [, output.headers["x-amz-checksum-algorithm"]],
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data["Bucket"] !== undefined) {
        contents.Bucket = (0, smithy_client_1.expectString)(data["Bucket"]);
    }
    if (data["Key"] !== undefined) {
        contents.Key = (0, smithy_client_1.expectString)(data["Key"]);
    }
    if (data["UploadId"] !== undefined) {
        contents.UploadId = (0, smithy_client_1.expectString)(data["UploadId"]);
    }
    return contents;
};
exports.deserializeAws_restXmlCreateMultipartUploadCommand = deserializeAws_restXmlCreateMultipartUploadCommand;
const deserializeAws_restXmlCreateMultipartUploadCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlDeleteBucketCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteBucketCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlDeleteBucketCommand = deserializeAws_restXmlDeleteBucketCommand;
const deserializeAws_restXmlDeleteBucketCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteBucketAnalyticsConfigurationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand = deserializeAws_restXmlDeleteBucketAnalyticsConfigurationCommand;
const deserializeAws_restXmlDeleteBucketAnalyticsConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlDeleteBucketCorsCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteBucketCorsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlDeleteBucketCorsCommand = deserializeAws_restXmlDeleteBucketCorsCommand;
const deserializeAws_restXmlDeleteBucketCorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlDeleteBucketEncryptionCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteBucketEncryptionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlDeleteBucketEncryptionCommand = deserializeAws_restXmlDeleteBucketEncryptionCommand;
const deserializeAws_restXmlDeleteBucketEncryptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommand = deserializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommand;
const deserializeAws_restXmlDeleteBucketIntelligentTieringConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlDeleteBucketInventoryConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteBucketInventoryConfigurationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlDeleteBucketInventoryConfigurationCommand = deserializeAws_restXmlDeleteBucketInventoryConfigurationCommand;
const deserializeAws_restXmlDeleteBucketInventoryConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlDeleteBucketLifecycleCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteBucketLifecycleCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlDeleteBucketLifecycleCommand = deserializeAws_restXmlDeleteBucketLifecycleCommand;
const deserializeAws_restXmlDeleteBucketLifecycleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlDeleteBucketMetricsConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteBucketMetricsConfigurationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlDeleteBucketMetricsConfigurationCommand = deserializeAws_restXmlDeleteBucketMetricsConfigurationCommand;
const deserializeAws_restXmlDeleteBucketMetricsConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlDeleteBucketOwnershipControlsCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteBucketOwnershipControlsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlDeleteBucketOwnershipControlsCommand = deserializeAws_restXmlDeleteBucketOwnershipControlsCommand;
const deserializeAws_restXmlDeleteBucketOwnershipControlsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlDeleteBucketPolicyCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteBucketPolicyCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlDeleteBucketPolicyCommand = deserializeAws_restXmlDeleteBucketPolicyCommand;
const deserializeAws_restXmlDeleteBucketPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlDeleteBucketReplicationCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteBucketReplicationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlDeleteBucketReplicationCommand = deserializeAws_restXmlDeleteBucketReplicationCommand;
const deserializeAws_restXmlDeleteBucketReplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlDeleteBucketTaggingCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteBucketTaggingCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlDeleteBucketTaggingCommand = deserializeAws_restXmlDeleteBucketTaggingCommand;
const deserializeAws_restXmlDeleteBucketTaggingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlDeleteBucketWebsiteCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteBucketWebsiteCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlDeleteBucketWebsiteCommand = deserializeAws_restXmlDeleteBucketWebsiteCommand;
const deserializeAws_restXmlDeleteBucketWebsiteCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlDeleteObjectCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteObjectCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        DeleteMarker: [
            () => void 0 !== output.headers["x-amz-delete-marker"],
            () => (0, smithy_client_1.parseBoolean)(output.headers["x-amz-delete-marker"]),
        ],
        VersionId: [, output.headers["x-amz-version-id"]],
        RequestCharged: [, output.headers["x-amz-request-charged"]],
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlDeleteObjectCommand = deserializeAws_restXmlDeleteObjectCommand;
const deserializeAws_restXmlDeleteObjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlDeleteObjectsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteObjectsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        RequestCharged: [, output.headers["x-amz-request-charged"]],
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.Deleted === "") {
        contents.Deleted = [];
    }
    else if (data["Deleted"] !== undefined) {
        contents.Deleted = deserializeAws_restXmlDeletedObjects((0, smithy_client_1.getArrayIfSingleItem)(data["Deleted"]), context);
    }
    if (data.Error === "") {
        contents.Errors = [];
    }
    else if (data["Error"] !== undefined) {
        contents.Errors = deserializeAws_restXmlErrors((0, smithy_client_1.getArrayIfSingleItem)(data["Error"]), context);
    }
    return contents;
};
exports.deserializeAws_restXmlDeleteObjectsCommand = deserializeAws_restXmlDeleteObjectsCommand;
const deserializeAws_restXmlDeleteObjectsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlDeleteObjectTaggingCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeleteObjectTaggingCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        VersionId: [, output.headers["x-amz-version-id"]],
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlDeleteObjectTaggingCommand = deserializeAws_restXmlDeleteObjectTaggingCommand;
const deserializeAws_restXmlDeleteObjectTaggingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlDeletePublicAccessBlockCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restXmlDeletePublicAccessBlockCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlDeletePublicAccessBlockCommand = deserializeAws_restXmlDeletePublicAccessBlockCommand;
const deserializeAws_restXmlDeletePublicAccessBlockCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetBucketAccelerateConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetBucketAccelerateConfigurationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data["Status"] !== undefined) {
        contents.Status = (0, smithy_client_1.expectString)(data["Status"]);
    }
    return contents;
};
exports.deserializeAws_restXmlGetBucketAccelerateConfigurationCommand = deserializeAws_restXmlGetBucketAccelerateConfigurationCommand;
const deserializeAws_restXmlGetBucketAccelerateConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetBucketAclCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetBucketAclCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.AccessControlList === "") {
        contents.Grants = [];
    }
    else if (data["AccessControlList"] !== undefined && data["AccessControlList"]["Grant"] !== undefined) {
        contents.Grants = deserializeAws_restXmlGrants((0, smithy_client_1.getArrayIfSingleItem)(data["AccessControlList"]["Grant"]), context);
    }
    if (data["Owner"] !== undefined) {
        contents.Owner = deserializeAws_restXmlOwner(data["Owner"], context);
    }
    return contents;
};
exports.deserializeAws_restXmlGetBucketAclCommand = deserializeAws_restXmlGetBucketAclCommand;
const deserializeAws_restXmlGetBucketAclCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetBucketAnalyticsConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetBucketAnalyticsConfigurationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.AnalyticsConfiguration = deserializeAws_restXmlAnalyticsConfiguration(data, context);
    return contents;
};
exports.deserializeAws_restXmlGetBucketAnalyticsConfigurationCommand = deserializeAws_restXmlGetBucketAnalyticsConfigurationCommand;
const deserializeAws_restXmlGetBucketAnalyticsConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetBucketCorsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetBucketCorsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.CORSRule === "") {
        contents.CORSRules = [];
    }
    else if (data["CORSRule"] !== undefined) {
        contents.CORSRules = deserializeAws_restXmlCORSRules((0, smithy_client_1.getArrayIfSingleItem)(data["CORSRule"]), context);
    }
    return contents;
};
exports.deserializeAws_restXmlGetBucketCorsCommand = deserializeAws_restXmlGetBucketCorsCommand;
const deserializeAws_restXmlGetBucketCorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetBucketEncryptionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetBucketEncryptionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.ServerSideEncryptionConfiguration = deserializeAws_restXmlServerSideEncryptionConfiguration(data, context);
    return contents;
};
exports.deserializeAws_restXmlGetBucketEncryptionCommand = deserializeAws_restXmlGetBucketEncryptionCommand;
const deserializeAws_restXmlGetBucketEncryptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetBucketIntelligentTieringConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetBucketIntelligentTieringConfigurationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.IntelligentTieringConfiguration = deserializeAws_restXmlIntelligentTieringConfiguration(data, context);
    return contents;
};
exports.deserializeAws_restXmlGetBucketIntelligentTieringConfigurationCommand = deserializeAws_restXmlGetBucketIntelligentTieringConfigurationCommand;
const deserializeAws_restXmlGetBucketIntelligentTieringConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetBucketInventoryConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetBucketInventoryConfigurationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.InventoryConfiguration = deserializeAws_restXmlInventoryConfiguration(data, context);
    return contents;
};
exports.deserializeAws_restXmlGetBucketInventoryConfigurationCommand = deserializeAws_restXmlGetBucketInventoryConfigurationCommand;
const deserializeAws_restXmlGetBucketInventoryConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetBucketLifecycleConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetBucketLifecycleConfigurationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.Rule === "") {
        contents.Rules = [];
    }
    else if (data["Rule"] !== undefined) {
        contents.Rules = deserializeAws_restXmlLifecycleRules((0, smithy_client_1.getArrayIfSingleItem)(data["Rule"]), context);
    }
    return contents;
};
exports.deserializeAws_restXmlGetBucketLifecycleConfigurationCommand = deserializeAws_restXmlGetBucketLifecycleConfigurationCommand;
const deserializeAws_restXmlGetBucketLifecycleConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetBucketLocationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetBucketLocationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data["LocationConstraint"] !== undefined) {
        contents.LocationConstraint = (0, smithy_client_1.expectString)(data["LocationConstraint"]);
    }
    return contents;
};
exports.deserializeAws_restXmlGetBucketLocationCommand = deserializeAws_restXmlGetBucketLocationCommand;
const deserializeAws_restXmlGetBucketLocationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetBucketLoggingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetBucketLoggingCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data["LoggingEnabled"] !== undefined) {
        contents.LoggingEnabled = deserializeAws_restXmlLoggingEnabled(data["LoggingEnabled"], context);
    }
    return contents;
};
exports.deserializeAws_restXmlGetBucketLoggingCommand = deserializeAws_restXmlGetBucketLoggingCommand;
const deserializeAws_restXmlGetBucketLoggingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetBucketMetricsConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetBucketMetricsConfigurationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.MetricsConfiguration = deserializeAws_restXmlMetricsConfiguration(data, context);
    return contents;
};
exports.deserializeAws_restXmlGetBucketMetricsConfigurationCommand = deserializeAws_restXmlGetBucketMetricsConfigurationCommand;
const deserializeAws_restXmlGetBucketMetricsConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetBucketNotificationConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetBucketNotificationConfigurationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data["EventBridgeConfiguration"] !== undefined) {
        contents.EventBridgeConfiguration = deserializeAws_restXmlEventBridgeConfiguration(data["EventBridgeConfiguration"], context);
    }
    if (data.CloudFunctionConfiguration === "") {
        contents.LambdaFunctionConfigurations = [];
    }
    else if (data["CloudFunctionConfiguration"] !== undefined) {
        contents.LambdaFunctionConfigurations = deserializeAws_restXmlLambdaFunctionConfigurationList((0, smithy_client_1.getArrayIfSingleItem)(data["CloudFunctionConfiguration"]), context);
    }
    if (data.QueueConfiguration === "") {
        contents.QueueConfigurations = [];
    }
    else if (data["QueueConfiguration"] !== undefined) {
        contents.QueueConfigurations = deserializeAws_restXmlQueueConfigurationList((0, smithy_client_1.getArrayIfSingleItem)(data["QueueConfiguration"]), context);
    }
    if (data.TopicConfiguration === "") {
        contents.TopicConfigurations = [];
    }
    else if (data["TopicConfiguration"] !== undefined) {
        contents.TopicConfigurations = deserializeAws_restXmlTopicConfigurationList((0, smithy_client_1.getArrayIfSingleItem)(data["TopicConfiguration"]), context);
    }
    return contents;
};
exports.deserializeAws_restXmlGetBucketNotificationConfigurationCommand = deserializeAws_restXmlGetBucketNotificationConfigurationCommand;
const deserializeAws_restXmlGetBucketNotificationConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetBucketOwnershipControlsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetBucketOwnershipControlsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.OwnershipControls = deserializeAws_restXmlOwnershipControls(data, context);
    return contents;
};
exports.deserializeAws_restXmlGetBucketOwnershipControlsCommand = deserializeAws_restXmlGetBucketOwnershipControlsCommand;
const deserializeAws_restXmlGetBucketOwnershipControlsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetBucketPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetBucketPolicyCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = await collectBodyString(output.body, context);
    contents.Policy = (0, smithy_client_1.expectString)(data);
    return contents;
};
exports.deserializeAws_restXmlGetBucketPolicyCommand = deserializeAws_restXmlGetBucketPolicyCommand;
const deserializeAws_restXmlGetBucketPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetBucketPolicyStatusCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetBucketPolicyStatusCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.PolicyStatus = deserializeAws_restXmlPolicyStatus(data, context);
    return contents;
};
exports.deserializeAws_restXmlGetBucketPolicyStatusCommand = deserializeAws_restXmlGetBucketPolicyStatusCommand;
const deserializeAws_restXmlGetBucketPolicyStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetBucketReplicationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetBucketReplicationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.ReplicationConfiguration = deserializeAws_restXmlReplicationConfiguration(data, context);
    return contents;
};
exports.deserializeAws_restXmlGetBucketReplicationCommand = deserializeAws_restXmlGetBucketReplicationCommand;
const deserializeAws_restXmlGetBucketReplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetBucketRequestPaymentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetBucketRequestPaymentCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data["Payer"] !== undefined) {
        contents.Payer = (0, smithy_client_1.expectString)(data["Payer"]);
    }
    return contents;
};
exports.deserializeAws_restXmlGetBucketRequestPaymentCommand = deserializeAws_restXmlGetBucketRequestPaymentCommand;
const deserializeAws_restXmlGetBucketRequestPaymentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetBucketTaggingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetBucketTaggingCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.TagSet === "") {
        contents.TagSet = [];
    }
    else if (data["TagSet"] !== undefined && data["TagSet"]["Tag"] !== undefined) {
        contents.TagSet = deserializeAws_restXmlTagSet((0, smithy_client_1.getArrayIfSingleItem)(data["TagSet"]["Tag"]), context);
    }
    return contents;
};
exports.deserializeAws_restXmlGetBucketTaggingCommand = deserializeAws_restXmlGetBucketTaggingCommand;
const deserializeAws_restXmlGetBucketTaggingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetBucketVersioningCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetBucketVersioningCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data["MfaDelete"] !== undefined) {
        contents.MFADelete = (0, smithy_client_1.expectString)(data["MfaDelete"]);
    }
    if (data["Status"] !== undefined) {
        contents.Status = (0, smithy_client_1.expectString)(data["Status"]);
    }
    return contents;
};
exports.deserializeAws_restXmlGetBucketVersioningCommand = deserializeAws_restXmlGetBucketVersioningCommand;
const deserializeAws_restXmlGetBucketVersioningCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetBucketWebsiteCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetBucketWebsiteCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data["ErrorDocument"] !== undefined) {
        contents.ErrorDocument = deserializeAws_restXmlErrorDocument(data["ErrorDocument"], context);
    }
    if (data["IndexDocument"] !== undefined) {
        contents.IndexDocument = deserializeAws_restXmlIndexDocument(data["IndexDocument"], context);
    }
    if (data["RedirectAllRequestsTo"] !== undefined) {
        contents.RedirectAllRequestsTo = deserializeAws_restXmlRedirectAllRequestsTo(data["RedirectAllRequestsTo"], context);
    }
    if (data.RoutingRules === "") {
        contents.RoutingRules = [];
    }
    else if (data["RoutingRules"] !== undefined && data["RoutingRules"]["RoutingRule"] !== undefined) {
        contents.RoutingRules = deserializeAws_restXmlRoutingRules((0, smithy_client_1.getArrayIfSingleItem)(data["RoutingRules"]["RoutingRule"]), context);
    }
    return contents;
};
exports.deserializeAws_restXmlGetBucketWebsiteCommand = deserializeAws_restXmlGetBucketWebsiteCommand;
const deserializeAws_restXmlGetBucketWebsiteCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetObjectCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        DeleteMarker: [
            () => void 0 !== output.headers["x-amz-delete-marker"],
            () => (0, smithy_client_1.parseBoolean)(output.headers["x-amz-delete-marker"]),
        ],
        AcceptRanges: [, output.headers["accept-ranges"]],
        Expiration: [, output.headers["x-amz-expiration"]],
        Restore: [, output.headers["x-amz-restore"]],
        LastModified: [
            () => void 0 !== output.headers["last-modified"],
            () => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc7231DateTime)(output.headers["last-modified"])),
        ],
        ContentLength: [
            () => void 0 !== output.headers["content-length"],
            () => (0, smithy_client_1.strictParseLong)(output.headers["content-length"]),
        ],
        ETag: [, output.headers["etag"]],
        ChecksumCRC32: [, output.headers["x-amz-checksum-crc32"]],
        ChecksumCRC32C: [, output.headers["x-amz-checksum-crc32c"]],
        ChecksumSHA1: [, output.headers["x-amz-checksum-sha1"]],
        ChecksumSHA256: [, output.headers["x-amz-checksum-sha256"]],
        MissingMeta: [
            () => void 0 !== output.headers["x-amz-missing-meta"],
            () => (0, smithy_client_1.strictParseInt32)(output.headers["x-amz-missing-meta"]),
        ],
        VersionId: [, output.headers["x-amz-version-id"]],
        CacheControl: [, output.headers["cache-control"]],
        ContentDisposition: [, output.headers["content-disposition"]],
        ContentEncoding: [, output.headers["content-encoding"]],
        ContentLanguage: [, output.headers["content-language"]],
        ContentRange: [, output.headers["content-range"]],
        ContentType: [, output.headers["content-type"]],
        Expires: [
            () => void 0 !== output.headers["expires"],
            () => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc7231DateTime)(output.headers["expires"])),
        ],
        WebsiteRedirectLocation: [, output.headers["x-amz-website-redirect-location"]],
        ServerSideEncryption: [, output.headers["x-amz-server-side-encryption"]],
        SSECustomerAlgorithm: [, output.headers["x-amz-server-side-encryption-customer-algorithm"]],
        SSECustomerKeyMD5: [, output.headers["x-amz-server-side-encryption-customer-key-md5"]],
        SSEKMSKeyId: [, output.headers["x-amz-server-side-encryption-aws-kms-key-id"]],
        BucketKeyEnabled: [
            () => void 0 !== output.headers["x-amz-server-side-encryption-bucket-key-enabled"],
            () => (0, smithy_client_1.parseBoolean)(output.headers["x-amz-server-side-encryption-bucket-key-enabled"]),
        ],
        StorageClass: [, output.headers["x-amz-storage-class"]],
        RequestCharged: [, output.headers["x-amz-request-charged"]],
        ReplicationStatus: [, output.headers["x-amz-replication-status"]],
        PartsCount: [
            () => void 0 !== output.headers["x-amz-mp-parts-count"],
            () => (0, smithy_client_1.strictParseInt32)(output.headers["x-amz-mp-parts-count"]),
        ],
        TagCount: [
            () => void 0 !== output.headers["x-amz-tagging-count"],
            () => (0, smithy_client_1.strictParseInt32)(output.headers["x-amz-tagging-count"]),
        ],
        ObjectLockMode: [, output.headers["x-amz-object-lock-mode"]],
        ObjectLockRetainUntilDate: [
            () => void 0 !== output.headers["x-amz-object-lock-retain-until-date"],
            () => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output.headers["x-amz-object-lock-retain-until-date"])),
        ],
        ObjectLockLegalHoldStatus: [, output.headers["x-amz-object-lock-legal-hold"]],
        Metadata: [
            ,
            Object.keys(output.headers)
                .filter((header) => header.startsWith("x-amz-meta-"))
                .reduce((acc, header) => {
                acc[header.substring(11)] = output.headers[header];
                return acc;
            }, {}),
        ],
    });
    const data = output.body;
    context.sdkStreamMixin(data);
    contents.Body = data;
    return contents;
};
exports.deserializeAws_restXmlGetObjectCommand = deserializeAws_restXmlGetObjectCommand;
const deserializeAws_restXmlGetObjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidObjectState":
        case "com.amazonaws.s3#InvalidObjectState":
            throw await deserializeAws_restXmlInvalidObjectStateResponse(parsedOutput, context);
        case "NoSuchKey":
        case "com.amazonaws.s3#NoSuchKey":
            throw await deserializeAws_restXmlNoSuchKeyResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: S3ServiceException_1.S3ServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restXmlGetObjectAclCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetObjectAclCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        RequestCharged: [, output.headers["x-amz-request-charged"]],
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.AccessControlList === "") {
        contents.Grants = [];
    }
    else if (data["AccessControlList"] !== undefined && data["AccessControlList"]["Grant"] !== undefined) {
        contents.Grants = deserializeAws_restXmlGrants((0, smithy_client_1.getArrayIfSingleItem)(data["AccessControlList"]["Grant"]), context);
    }
    if (data["Owner"] !== undefined) {
        contents.Owner = deserializeAws_restXmlOwner(data["Owner"], context);
    }
    return contents;
};
exports.deserializeAws_restXmlGetObjectAclCommand = deserializeAws_restXmlGetObjectAclCommand;
const deserializeAws_restXmlGetObjectAclCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchKey":
        case "com.amazonaws.s3#NoSuchKey":
            throw await deserializeAws_restXmlNoSuchKeyResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: S3ServiceException_1.S3ServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restXmlGetObjectAttributesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetObjectAttributesCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        DeleteMarker: [
            () => void 0 !== output.headers["x-amz-delete-marker"],
            () => (0, smithy_client_1.parseBoolean)(output.headers["x-amz-delete-marker"]),
        ],
        LastModified: [
            () => void 0 !== output.headers["last-modified"],
            () => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc7231DateTime)(output.headers["last-modified"])),
        ],
        VersionId: [, output.headers["x-amz-version-id"]],
        RequestCharged: [, output.headers["x-amz-request-charged"]],
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data["Checksum"] !== undefined) {
        contents.Checksum = deserializeAws_restXmlChecksum(data["Checksum"], context);
    }
    if (data["ETag"] !== undefined) {
        contents.ETag = (0, smithy_client_1.expectString)(data["ETag"]);
    }
    if (data["ObjectParts"] !== undefined) {
        contents.ObjectParts = deserializeAws_restXmlGetObjectAttributesParts(data["ObjectParts"], context);
    }
    if (data["ObjectSize"] !== undefined) {
        contents.ObjectSize = (0, smithy_client_1.strictParseLong)(data["ObjectSize"]);
    }
    if (data["StorageClass"] !== undefined) {
        contents.StorageClass = (0, smithy_client_1.expectString)(data["StorageClass"]);
    }
    return contents;
};
exports.deserializeAws_restXmlGetObjectAttributesCommand = deserializeAws_restXmlGetObjectAttributesCommand;
const deserializeAws_restXmlGetObjectAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchKey":
        case "com.amazonaws.s3#NoSuchKey":
            throw await deserializeAws_restXmlNoSuchKeyResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: S3ServiceException_1.S3ServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restXmlGetObjectLegalHoldCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetObjectLegalHoldCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.LegalHold = deserializeAws_restXmlObjectLockLegalHold(data, context);
    return contents;
};
exports.deserializeAws_restXmlGetObjectLegalHoldCommand = deserializeAws_restXmlGetObjectLegalHoldCommand;
const deserializeAws_restXmlGetObjectLegalHoldCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetObjectLockConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetObjectLockConfigurationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.ObjectLockConfiguration = deserializeAws_restXmlObjectLockConfiguration(data, context);
    return contents;
};
exports.deserializeAws_restXmlGetObjectLockConfigurationCommand = deserializeAws_restXmlGetObjectLockConfigurationCommand;
const deserializeAws_restXmlGetObjectLockConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetObjectRetentionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetObjectRetentionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.Retention = deserializeAws_restXmlObjectLockRetention(data, context);
    return contents;
};
exports.deserializeAws_restXmlGetObjectRetentionCommand = deserializeAws_restXmlGetObjectRetentionCommand;
const deserializeAws_restXmlGetObjectRetentionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetObjectTaggingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetObjectTaggingCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        VersionId: [, output.headers["x-amz-version-id"]],
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.TagSet === "") {
        contents.TagSet = [];
    }
    else if (data["TagSet"] !== undefined && data["TagSet"]["Tag"] !== undefined) {
        contents.TagSet = deserializeAws_restXmlTagSet((0, smithy_client_1.getArrayIfSingleItem)(data["TagSet"]["Tag"]), context);
    }
    return contents;
};
exports.deserializeAws_restXmlGetObjectTaggingCommand = deserializeAws_restXmlGetObjectTaggingCommand;
const deserializeAws_restXmlGetObjectTaggingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetObjectTorrentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetObjectTorrentCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        RequestCharged: [, output.headers["x-amz-request-charged"]],
    });
    const data = output.body;
    context.sdkStreamMixin(data);
    contents.Body = data;
    return contents;
};
exports.deserializeAws_restXmlGetObjectTorrentCommand = deserializeAws_restXmlGetObjectTorrentCommand;
const deserializeAws_restXmlGetObjectTorrentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlGetPublicAccessBlockCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlGetPublicAccessBlockCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.PublicAccessBlockConfiguration = deserializeAws_restXmlPublicAccessBlockConfiguration(data, context);
    return contents;
};
exports.deserializeAws_restXmlGetPublicAccessBlockCommand = deserializeAws_restXmlGetPublicAccessBlockCommand;
const deserializeAws_restXmlGetPublicAccessBlockCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlHeadBucketCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlHeadBucketCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlHeadBucketCommand = deserializeAws_restXmlHeadBucketCommand;
const deserializeAws_restXmlHeadBucketCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NotFound":
        case "com.amazonaws.s3#NotFound":
            throw await deserializeAws_restXmlNotFoundResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: S3ServiceException_1.S3ServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restXmlHeadObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlHeadObjectCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        DeleteMarker: [
            () => void 0 !== output.headers["x-amz-delete-marker"],
            () => (0, smithy_client_1.parseBoolean)(output.headers["x-amz-delete-marker"]),
        ],
        AcceptRanges: [, output.headers["accept-ranges"]],
        Expiration: [, output.headers["x-amz-expiration"]],
        Restore: [, output.headers["x-amz-restore"]],
        ArchiveStatus: [, output.headers["x-amz-archive-status"]],
        LastModified: [
            () => void 0 !== output.headers["last-modified"],
            () => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc7231DateTime)(output.headers["last-modified"])),
        ],
        ContentLength: [
            () => void 0 !== output.headers["content-length"],
            () => (0, smithy_client_1.strictParseLong)(output.headers["content-length"]),
        ],
        ChecksumCRC32: [, output.headers["x-amz-checksum-crc32"]],
        ChecksumCRC32C: [, output.headers["x-amz-checksum-crc32c"]],
        ChecksumSHA1: [, output.headers["x-amz-checksum-sha1"]],
        ChecksumSHA256: [, output.headers["x-amz-checksum-sha256"]],
        ETag: [, output.headers["etag"]],
        MissingMeta: [
            () => void 0 !== output.headers["x-amz-missing-meta"],
            () => (0, smithy_client_1.strictParseInt32)(output.headers["x-amz-missing-meta"]),
        ],
        VersionId: [, output.headers["x-amz-version-id"]],
        CacheControl: [, output.headers["cache-control"]],
        ContentDisposition: [, output.headers["content-disposition"]],
        ContentEncoding: [, output.headers["content-encoding"]],
        ContentLanguage: [, output.headers["content-language"]],
        ContentType: [, output.headers["content-type"]],
        Expires: [
            () => void 0 !== output.headers["expires"],
            () => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc7231DateTime)(output.headers["expires"])),
        ],
        WebsiteRedirectLocation: [, output.headers["x-amz-website-redirect-location"]],
        ServerSideEncryption: [, output.headers["x-amz-server-side-encryption"]],
        SSECustomerAlgorithm: [, output.headers["x-amz-server-side-encryption-customer-algorithm"]],
        SSECustomerKeyMD5: [, output.headers["x-amz-server-side-encryption-customer-key-md5"]],
        SSEKMSKeyId: [, output.headers["x-amz-server-side-encryption-aws-kms-key-id"]],
        BucketKeyEnabled: [
            () => void 0 !== output.headers["x-amz-server-side-encryption-bucket-key-enabled"],
            () => (0, smithy_client_1.parseBoolean)(output.headers["x-amz-server-side-encryption-bucket-key-enabled"]),
        ],
        StorageClass: [, output.headers["x-amz-storage-class"]],
        RequestCharged: [, output.headers["x-amz-request-charged"]],
        ReplicationStatus: [, output.headers["x-amz-replication-status"]],
        PartsCount: [
            () => void 0 !== output.headers["x-amz-mp-parts-count"],
            () => (0, smithy_client_1.strictParseInt32)(output.headers["x-amz-mp-parts-count"]),
        ],
        ObjectLockMode: [, output.headers["x-amz-object-lock-mode"]],
        ObjectLockRetainUntilDate: [
            () => void 0 !== output.headers["x-amz-object-lock-retain-until-date"],
            () => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output.headers["x-amz-object-lock-retain-until-date"])),
        ],
        ObjectLockLegalHoldStatus: [, output.headers["x-amz-object-lock-legal-hold"]],
        Metadata: [
            ,
            Object.keys(output.headers)
                .filter((header) => header.startsWith("x-amz-meta-"))
                .reduce((acc, header) => {
                acc[header.substring(11)] = output.headers[header];
                return acc;
            }, {}),
        ],
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlHeadObjectCommand = deserializeAws_restXmlHeadObjectCommand;
const deserializeAws_restXmlHeadObjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NotFound":
        case "com.amazonaws.s3#NotFound":
            throw await deserializeAws_restXmlNotFoundResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: S3ServiceException_1.S3ServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restXmlListBucketAnalyticsConfigurationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListBucketAnalyticsConfigurationsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.AnalyticsConfiguration === "") {
        contents.AnalyticsConfigurationList = [];
    }
    else if (data["AnalyticsConfiguration"] !== undefined) {
        contents.AnalyticsConfigurationList = deserializeAws_restXmlAnalyticsConfigurationList((0, smithy_client_1.getArrayIfSingleItem)(data["AnalyticsConfiguration"]), context);
    }
    if (data["ContinuationToken"] !== undefined) {
        contents.ContinuationToken = (0, smithy_client_1.expectString)(data["ContinuationToken"]);
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = (0, smithy_client_1.parseBoolean)(data["IsTruncated"]);
    }
    if (data["NextContinuationToken"] !== undefined) {
        contents.NextContinuationToken = (0, smithy_client_1.expectString)(data["NextContinuationToken"]);
    }
    return contents;
};
exports.deserializeAws_restXmlListBucketAnalyticsConfigurationsCommand = deserializeAws_restXmlListBucketAnalyticsConfigurationsCommand;
const deserializeAws_restXmlListBucketAnalyticsConfigurationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlListBucketIntelligentTieringConfigurationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListBucketIntelligentTieringConfigurationsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data["ContinuationToken"] !== undefined) {
        contents.ContinuationToken = (0, smithy_client_1.expectString)(data["ContinuationToken"]);
    }
    if (data.IntelligentTieringConfiguration === "") {
        contents.IntelligentTieringConfigurationList = [];
    }
    else if (data["IntelligentTieringConfiguration"] !== undefined) {
        contents.IntelligentTieringConfigurationList = deserializeAws_restXmlIntelligentTieringConfigurationList((0, smithy_client_1.getArrayIfSingleItem)(data["IntelligentTieringConfiguration"]), context);
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = (0, smithy_client_1.parseBoolean)(data["IsTruncated"]);
    }
    if (data["NextContinuationToken"] !== undefined) {
        contents.NextContinuationToken = (0, smithy_client_1.expectString)(data["NextContinuationToken"]);
    }
    return contents;
};
exports.deserializeAws_restXmlListBucketIntelligentTieringConfigurationsCommand = deserializeAws_restXmlListBucketIntelligentTieringConfigurationsCommand;
const deserializeAws_restXmlListBucketIntelligentTieringConfigurationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlListBucketInventoryConfigurationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListBucketInventoryConfigurationsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data["ContinuationToken"] !== undefined) {
        contents.ContinuationToken = (0, smithy_client_1.expectString)(data["ContinuationToken"]);
    }
    if (data.InventoryConfiguration === "") {
        contents.InventoryConfigurationList = [];
    }
    else if (data["InventoryConfiguration"] !== undefined) {
        contents.InventoryConfigurationList = deserializeAws_restXmlInventoryConfigurationList((0, smithy_client_1.getArrayIfSingleItem)(data["InventoryConfiguration"]), context);
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = (0, smithy_client_1.parseBoolean)(data["IsTruncated"]);
    }
    if (data["NextContinuationToken"] !== undefined) {
        contents.NextContinuationToken = (0, smithy_client_1.expectString)(data["NextContinuationToken"]);
    }
    return contents;
};
exports.deserializeAws_restXmlListBucketInventoryConfigurationsCommand = deserializeAws_restXmlListBucketInventoryConfigurationsCommand;
const deserializeAws_restXmlListBucketInventoryConfigurationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlListBucketMetricsConfigurationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListBucketMetricsConfigurationsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data["ContinuationToken"] !== undefined) {
        contents.ContinuationToken = (0, smithy_client_1.expectString)(data["ContinuationToken"]);
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = (0, smithy_client_1.parseBoolean)(data["IsTruncated"]);
    }
    if (data.MetricsConfiguration === "") {
        contents.MetricsConfigurationList = [];
    }
    else if (data["MetricsConfiguration"] !== undefined) {
        contents.MetricsConfigurationList = deserializeAws_restXmlMetricsConfigurationList((0, smithy_client_1.getArrayIfSingleItem)(data["MetricsConfiguration"]), context);
    }
    if (data["NextContinuationToken"] !== undefined) {
        contents.NextContinuationToken = (0, smithy_client_1.expectString)(data["NextContinuationToken"]);
    }
    return contents;
};
exports.deserializeAws_restXmlListBucketMetricsConfigurationsCommand = deserializeAws_restXmlListBucketMetricsConfigurationsCommand;
const deserializeAws_restXmlListBucketMetricsConfigurationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlListBucketsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListBucketsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.Buckets === "") {
        contents.Buckets = [];
    }
    else if (data["Buckets"] !== undefined && data["Buckets"]["Bucket"] !== undefined) {
        contents.Buckets = deserializeAws_restXmlBuckets((0, smithy_client_1.getArrayIfSingleItem)(data["Buckets"]["Bucket"]), context);
    }
    if (data["Owner"] !== undefined) {
        contents.Owner = deserializeAws_restXmlOwner(data["Owner"], context);
    }
    return contents;
};
exports.deserializeAws_restXmlListBucketsCommand = deserializeAws_restXmlListBucketsCommand;
const deserializeAws_restXmlListBucketsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlListMultipartUploadsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListMultipartUploadsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data["Bucket"] !== undefined) {
        contents.Bucket = (0, smithy_client_1.expectString)(data["Bucket"]);
    }
    if (data.CommonPrefixes === "") {
        contents.CommonPrefixes = [];
    }
    else if (data["CommonPrefixes"] !== undefined) {
        contents.CommonPrefixes = deserializeAws_restXmlCommonPrefixList((0, smithy_client_1.getArrayIfSingleItem)(data["CommonPrefixes"]), context);
    }
    if (data["Delimiter"] !== undefined) {
        contents.Delimiter = (0, smithy_client_1.expectString)(data["Delimiter"]);
    }
    if (data["EncodingType"] !== undefined) {
        contents.EncodingType = (0, smithy_client_1.expectString)(data["EncodingType"]);
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = (0, smithy_client_1.parseBoolean)(data["IsTruncated"]);
    }
    if (data["KeyMarker"] !== undefined) {
        contents.KeyMarker = (0, smithy_client_1.expectString)(data["KeyMarker"]);
    }
    if (data["MaxUploads"] !== undefined) {
        contents.MaxUploads = (0, smithy_client_1.strictParseInt32)(data["MaxUploads"]);
    }
    if (data["NextKeyMarker"] !== undefined) {
        contents.NextKeyMarker = (0, smithy_client_1.expectString)(data["NextKeyMarker"]);
    }
    if (data["NextUploadIdMarker"] !== undefined) {
        contents.NextUploadIdMarker = (0, smithy_client_1.expectString)(data["NextUploadIdMarker"]);
    }
    if (data["Prefix"] !== undefined) {
        contents.Prefix = (0, smithy_client_1.expectString)(data["Prefix"]);
    }
    if (data["UploadIdMarker"] !== undefined) {
        contents.UploadIdMarker = (0, smithy_client_1.expectString)(data["UploadIdMarker"]);
    }
    if (data.Upload === "") {
        contents.Uploads = [];
    }
    else if (data["Upload"] !== undefined) {
        contents.Uploads = deserializeAws_restXmlMultipartUploadList((0, smithy_client_1.getArrayIfSingleItem)(data["Upload"]), context);
    }
    return contents;
};
exports.deserializeAws_restXmlListMultipartUploadsCommand = deserializeAws_restXmlListMultipartUploadsCommand;
const deserializeAws_restXmlListMultipartUploadsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlListObjectsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListObjectsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.CommonPrefixes === "") {
        contents.CommonPrefixes = [];
    }
    else if (data["CommonPrefixes"] !== undefined) {
        contents.CommonPrefixes = deserializeAws_restXmlCommonPrefixList((0, smithy_client_1.getArrayIfSingleItem)(data["CommonPrefixes"]), context);
    }
    if (data.Contents === "") {
        contents.Contents = [];
    }
    else if (data["Contents"] !== undefined) {
        contents.Contents = deserializeAws_restXmlObjectList((0, smithy_client_1.getArrayIfSingleItem)(data["Contents"]), context);
    }
    if (data["Delimiter"] !== undefined) {
        contents.Delimiter = (0, smithy_client_1.expectString)(data["Delimiter"]);
    }
    if (data["EncodingType"] !== undefined) {
        contents.EncodingType = (0, smithy_client_1.expectString)(data["EncodingType"]);
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = (0, smithy_client_1.parseBoolean)(data["IsTruncated"]);
    }
    if (data["Marker"] !== undefined) {
        contents.Marker = (0, smithy_client_1.expectString)(data["Marker"]);
    }
    if (data["MaxKeys"] !== undefined) {
        contents.MaxKeys = (0, smithy_client_1.strictParseInt32)(data["MaxKeys"]);
    }
    if (data["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(data["Name"]);
    }
    if (data["NextMarker"] !== undefined) {
        contents.NextMarker = (0, smithy_client_1.expectString)(data["NextMarker"]);
    }
    if (data["Prefix"] !== undefined) {
        contents.Prefix = (0, smithy_client_1.expectString)(data["Prefix"]);
    }
    return contents;
};
exports.deserializeAws_restXmlListObjectsCommand = deserializeAws_restXmlListObjectsCommand;
const deserializeAws_restXmlListObjectsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchBucket":
        case "com.amazonaws.s3#NoSuchBucket":
            throw await deserializeAws_restXmlNoSuchBucketResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: S3ServiceException_1.S3ServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restXmlListObjectsV2Command = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListObjectsV2CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.CommonPrefixes === "") {
        contents.CommonPrefixes = [];
    }
    else if (data["CommonPrefixes"] !== undefined) {
        contents.CommonPrefixes = deserializeAws_restXmlCommonPrefixList((0, smithy_client_1.getArrayIfSingleItem)(data["CommonPrefixes"]), context);
    }
    if (data.Contents === "") {
        contents.Contents = [];
    }
    else if (data["Contents"] !== undefined) {
        contents.Contents = deserializeAws_restXmlObjectList((0, smithy_client_1.getArrayIfSingleItem)(data["Contents"]), context);
    }
    if (data["ContinuationToken"] !== undefined) {
        contents.ContinuationToken = (0, smithy_client_1.expectString)(data["ContinuationToken"]);
    }
    if (data["Delimiter"] !== undefined) {
        contents.Delimiter = (0, smithy_client_1.expectString)(data["Delimiter"]);
    }
    if (data["EncodingType"] !== undefined) {
        contents.EncodingType = (0, smithy_client_1.expectString)(data["EncodingType"]);
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = (0, smithy_client_1.parseBoolean)(data["IsTruncated"]);
    }
    if (data["KeyCount"] !== undefined) {
        contents.KeyCount = (0, smithy_client_1.strictParseInt32)(data["KeyCount"]);
    }
    if (data["MaxKeys"] !== undefined) {
        contents.MaxKeys = (0, smithy_client_1.strictParseInt32)(data["MaxKeys"]);
    }
    if (data["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(data["Name"]);
    }
    if (data["NextContinuationToken"] !== undefined) {
        contents.NextContinuationToken = (0, smithy_client_1.expectString)(data["NextContinuationToken"]);
    }
    if (data["Prefix"] !== undefined) {
        contents.Prefix = (0, smithy_client_1.expectString)(data["Prefix"]);
    }
    if (data["StartAfter"] !== undefined) {
        contents.StartAfter = (0, smithy_client_1.expectString)(data["StartAfter"]);
    }
    return contents;
};
exports.deserializeAws_restXmlListObjectsV2Command = deserializeAws_restXmlListObjectsV2Command;
const deserializeAws_restXmlListObjectsV2CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchBucket":
        case "com.amazonaws.s3#NoSuchBucket":
            throw await deserializeAws_restXmlNoSuchBucketResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: S3ServiceException_1.S3ServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restXmlListObjectVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListObjectVersionsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data.CommonPrefixes === "") {
        contents.CommonPrefixes = [];
    }
    else if (data["CommonPrefixes"] !== undefined) {
        contents.CommonPrefixes = deserializeAws_restXmlCommonPrefixList((0, smithy_client_1.getArrayIfSingleItem)(data["CommonPrefixes"]), context);
    }
    if (data.DeleteMarker === "") {
        contents.DeleteMarkers = [];
    }
    else if (data["DeleteMarker"] !== undefined) {
        contents.DeleteMarkers = deserializeAws_restXmlDeleteMarkers((0, smithy_client_1.getArrayIfSingleItem)(data["DeleteMarker"]), context);
    }
    if (data["Delimiter"] !== undefined) {
        contents.Delimiter = (0, smithy_client_1.expectString)(data["Delimiter"]);
    }
    if (data["EncodingType"] !== undefined) {
        contents.EncodingType = (0, smithy_client_1.expectString)(data["EncodingType"]);
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = (0, smithy_client_1.parseBoolean)(data["IsTruncated"]);
    }
    if (data["KeyMarker"] !== undefined) {
        contents.KeyMarker = (0, smithy_client_1.expectString)(data["KeyMarker"]);
    }
    if (data["MaxKeys"] !== undefined) {
        contents.MaxKeys = (0, smithy_client_1.strictParseInt32)(data["MaxKeys"]);
    }
    if (data["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(data["Name"]);
    }
    if (data["NextKeyMarker"] !== undefined) {
        contents.NextKeyMarker = (0, smithy_client_1.expectString)(data["NextKeyMarker"]);
    }
    if (data["NextVersionIdMarker"] !== undefined) {
        contents.NextVersionIdMarker = (0, smithy_client_1.expectString)(data["NextVersionIdMarker"]);
    }
    if (data["Prefix"] !== undefined) {
        contents.Prefix = (0, smithy_client_1.expectString)(data["Prefix"]);
    }
    if (data["VersionIdMarker"] !== undefined) {
        contents.VersionIdMarker = (0, smithy_client_1.expectString)(data["VersionIdMarker"]);
    }
    if (data.Version === "") {
        contents.Versions = [];
    }
    else if (data["Version"] !== undefined) {
        contents.Versions = deserializeAws_restXmlObjectVersionList((0, smithy_client_1.getArrayIfSingleItem)(data["Version"]), context);
    }
    return contents;
};
exports.deserializeAws_restXmlListObjectVersionsCommand = deserializeAws_restXmlListObjectVersionsCommand;
const deserializeAws_restXmlListObjectVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlListPartsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlListPartsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        AbortDate: [
            () => void 0 !== output.headers["x-amz-abort-date"],
            () => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc7231DateTime)(output.headers["x-amz-abort-date"])),
        ],
        AbortRuleId: [, output.headers["x-amz-abort-rule-id"]],
        RequestCharged: [, output.headers["x-amz-request-charged"]],
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    if (data["Bucket"] !== undefined) {
        contents.Bucket = (0, smithy_client_1.expectString)(data["Bucket"]);
    }
    if (data["ChecksumAlgorithm"] !== undefined) {
        contents.ChecksumAlgorithm = (0, smithy_client_1.expectString)(data["ChecksumAlgorithm"]);
    }
    if (data["Initiator"] !== undefined) {
        contents.Initiator = deserializeAws_restXmlInitiator(data["Initiator"], context);
    }
    if (data["IsTruncated"] !== undefined) {
        contents.IsTruncated = (0, smithy_client_1.parseBoolean)(data["IsTruncated"]);
    }
    if (data["Key"] !== undefined) {
        contents.Key = (0, smithy_client_1.expectString)(data["Key"]);
    }
    if (data["MaxParts"] !== undefined) {
        contents.MaxParts = (0, smithy_client_1.strictParseInt32)(data["MaxParts"]);
    }
    if (data["NextPartNumberMarker"] !== undefined) {
        contents.NextPartNumberMarker = (0, smithy_client_1.expectString)(data["NextPartNumberMarker"]);
    }
    if (data["Owner"] !== undefined) {
        contents.Owner = deserializeAws_restXmlOwner(data["Owner"], context);
    }
    if (data["PartNumberMarker"] !== undefined) {
        contents.PartNumberMarker = (0, smithy_client_1.expectString)(data["PartNumberMarker"]);
    }
    if (data.Part === "") {
        contents.Parts = [];
    }
    else if (data["Part"] !== undefined) {
        contents.Parts = deserializeAws_restXmlParts((0, smithy_client_1.getArrayIfSingleItem)(data["Part"]), context);
    }
    if (data["StorageClass"] !== undefined) {
        contents.StorageClass = (0, smithy_client_1.expectString)(data["StorageClass"]);
    }
    if (data["UploadId"] !== undefined) {
        contents.UploadId = (0, smithy_client_1.expectString)(data["UploadId"]);
    }
    return contents;
};
exports.deserializeAws_restXmlListPartsCommand = deserializeAws_restXmlListPartsCommand;
const deserializeAws_restXmlListPartsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlPutBucketAccelerateConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutBucketAccelerateConfigurationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutBucketAccelerateConfigurationCommand = deserializeAws_restXmlPutBucketAccelerateConfigurationCommand;
const deserializeAws_restXmlPutBucketAccelerateConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlPutBucketAclCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutBucketAclCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutBucketAclCommand = deserializeAws_restXmlPutBucketAclCommand;
const deserializeAws_restXmlPutBucketAclCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlPutBucketAnalyticsConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutBucketAnalyticsConfigurationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutBucketAnalyticsConfigurationCommand = deserializeAws_restXmlPutBucketAnalyticsConfigurationCommand;
const deserializeAws_restXmlPutBucketAnalyticsConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlPutBucketCorsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutBucketCorsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutBucketCorsCommand = deserializeAws_restXmlPutBucketCorsCommand;
const deserializeAws_restXmlPutBucketCorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlPutBucketEncryptionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutBucketEncryptionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutBucketEncryptionCommand = deserializeAws_restXmlPutBucketEncryptionCommand;
const deserializeAws_restXmlPutBucketEncryptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlPutBucketIntelligentTieringConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutBucketIntelligentTieringConfigurationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutBucketIntelligentTieringConfigurationCommand = deserializeAws_restXmlPutBucketIntelligentTieringConfigurationCommand;
const deserializeAws_restXmlPutBucketIntelligentTieringConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlPutBucketInventoryConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutBucketInventoryConfigurationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutBucketInventoryConfigurationCommand = deserializeAws_restXmlPutBucketInventoryConfigurationCommand;
const deserializeAws_restXmlPutBucketInventoryConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlPutBucketLifecycleConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutBucketLifecycleConfigurationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutBucketLifecycleConfigurationCommand = deserializeAws_restXmlPutBucketLifecycleConfigurationCommand;
const deserializeAws_restXmlPutBucketLifecycleConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlPutBucketLoggingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutBucketLoggingCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutBucketLoggingCommand = deserializeAws_restXmlPutBucketLoggingCommand;
const deserializeAws_restXmlPutBucketLoggingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlPutBucketMetricsConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutBucketMetricsConfigurationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutBucketMetricsConfigurationCommand = deserializeAws_restXmlPutBucketMetricsConfigurationCommand;
const deserializeAws_restXmlPutBucketMetricsConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlPutBucketNotificationConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutBucketNotificationConfigurationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutBucketNotificationConfigurationCommand = deserializeAws_restXmlPutBucketNotificationConfigurationCommand;
const deserializeAws_restXmlPutBucketNotificationConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlPutBucketOwnershipControlsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutBucketOwnershipControlsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutBucketOwnershipControlsCommand = deserializeAws_restXmlPutBucketOwnershipControlsCommand;
const deserializeAws_restXmlPutBucketOwnershipControlsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlPutBucketPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutBucketPolicyCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutBucketPolicyCommand = deserializeAws_restXmlPutBucketPolicyCommand;
const deserializeAws_restXmlPutBucketPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlPutBucketReplicationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutBucketReplicationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutBucketReplicationCommand = deserializeAws_restXmlPutBucketReplicationCommand;
const deserializeAws_restXmlPutBucketReplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlPutBucketRequestPaymentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutBucketRequestPaymentCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutBucketRequestPaymentCommand = deserializeAws_restXmlPutBucketRequestPaymentCommand;
const deserializeAws_restXmlPutBucketRequestPaymentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlPutBucketTaggingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutBucketTaggingCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutBucketTaggingCommand = deserializeAws_restXmlPutBucketTaggingCommand;
const deserializeAws_restXmlPutBucketTaggingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlPutBucketVersioningCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutBucketVersioningCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutBucketVersioningCommand = deserializeAws_restXmlPutBucketVersioningCommand;
const deserializeAws_restXmlPutBucketVersioningCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlPutBucketWebsiteCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutBucketWebsiteCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutBucketWebsiteCommand = deserializeAws_restXmlPutBucketWebsiteCommand;
const deserializeAws_restXmlPutBucketWebsiteCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlPutObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutObjectCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        Expiration: [, output.headers["x-amz-expiration"]],
        ETag: [, output.headers["etag"]],
        ChecksumCRC32: [, output.headers["x-amz-checksum-crc32"]],
        ChecksumCRC32C: [, output.headers["x-amz-checksum-crc32c"]],
        ChecksumSHA1: [, output.headers["x-amz-checksum-sha1"]],
        ChecksumSHA256: [, output.headers["x-amz-checksum-sha256"]],
        ServerSideEncryption: [, output.headers["x-amz-server-side-encryption"]],
        VersionId: [, output.headers["x-amz-version-id"]],
        SSECustomerAlgorithm: [, output.headers["x-amz-server-side-encryption-customer-algorithm"]],
        SSECustomerKeyMD5: [, output.headers["x-amz-server-side-encryption-customer-key-md5"]],
        SSEKMSKeyId: [, output.headers["x-amz-server-side-encryption-aws-kms-key-id"]],
        SSEKMSEncryptionContext: [, output.headers["x-amz-server-side-encryption-context"]],
        BucketKeyEnabled: [
            () => void 0 !== output.headers["x-amz-server-side-encryption-bucket-key-enabled"],
            () => (0, smithy_client_1.parseBoolean)(output.headers["x-amz-server-side-encryption-bucket-key-enabled"]),
        ],
        RequestCharged: [, output.headers["x-amz-request-charged"]],
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutObjectCommand = deserializeAws_restXmlPutObjectCommand;
const deserializeAws_restXmlPutObjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlPutObjectAclCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutObjectAclCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        RequestCharged: [, output.headers["x-amz-request-charged"]],
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutObjectAclCommand = deserializeAws_restXmlPutObjectAclCommand;
const deserializeAws_restXmlPutObjectAclCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "NoSuchKey":
        case "com.amazonaws.s3#NoSuchKey":
            throw await deserializeAws_restXmlNoSuchKeyResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: S3ServiceException_1.S3ServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restXmlPutObjectLegalHoldCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutObjectLegalHoldCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        RequestCharged: [, output.headers["x-amz-request-charged"]],
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutObjectLegalHoldCommand = deserializeAws_restXmlPutObjectLegalHoldCommand;
const deserializeAws_restXmlPutObjectLegalHoldCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlPutObjectLockConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutObjectLockConfigurationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        RequestCharged: [, output.headers["x-amz-request-charged"]],
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutObjectLockConfigurationCommand = deserializeAws_restXmlPutObjectLockConfigurationCommand;
const deserializeAws_restXmlPutObjectLockConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlPutObjectRetentionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutObjectRetentionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        RequestCharged: [, output.headers["x-amz-request-charged"]],
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutObjectRetentionCommand = deserializeAws_restXmlPutObjectRetentionCommand;
const deserializeAws_restXmlPutObjectRetentionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlPutObjectTaggingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutObjectTaggingCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        VersionId: [, output.headers["x-amz-version-id"]],
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutObjectTaggingCommand = deserializeAws_restXmlPutObjectTaggingCommand;
const deserializeAws_restXmlPutObjectTaggingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlPutPublicAccessBlockCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlPutPublicAccessBlockCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlPutPublicAccessBlockCommand = deserializeAws_restXmlPutPublicAccessBlockCommand;
const deserializeAws_restXmlPutPublicAccessBlockCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlRestoreObjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlRestoreObjectCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        RequestCharged: [, output.headers["x-amz-request-charged"]],
        RestoreOutputPath: [, output.headers["x-amz-restore-output-path"]],
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlRestoreObjectCommand = deserializeAws_restXmlRestoreObjectCommand;
const deserializeAws_restXmlRestoreObjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ObjectAlreadyInActiveTierError":
        case "com.amazonaws.s3#ObjectAlreadyInActiveTierError":
            throw await deserializeAws_restXmlObjectAlreadyInActiveTierErrorResponse(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            (0, smithy_client_1.throwDefaultError)({
                output,
                parsedBody,
                exceptionCtor: S3ServiceException_1.S3ServiceException,
                errorCode,
            });
    }
};
const deserializeAws_restXmlSelectObjectContentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlSelectObjectContentCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = output.body;
    contents.Payload = deserializeAws_restXmlSelectObjectContentEventStream(data, context);
    return contents;
};
exports.deserializeAws_restXmlSelectObjectContentCommand = deserializeAws_restXmlSelectObjectContentCommand;
const deserializeAws_restXmlSelectObjectContentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlUploadPartCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlUploadPartCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        ServerSideEncryption: [, output.headers["x-amz-server-side-encryption"]],
        ETag: [, output.headers["etag"]],
        ChecksumCRC32: [, output.headers["x-amz-checksum-crc32"]],
        ChecksumCRC32C: [, output.headers["x-amz-checksum-crc32c"]],
        ChecksumSHA1: [, output.headers["x-amz-checksum-sha1"]],
        ChecksumSHA256: [, output.headers["x-amz-checksum-sha256"]],
        SSECustomerAlgorithm: [, output.headers["x-amz-server-side-encryption-customer-algorithm"]],
        SSECustomerKeyMD5: [, output.headers["x-amz-server-side-encryption-customer-key-md5"]],
        SSEKMSKeyId: [, output.headers["x-amz-server-side-encryption-aws-kms-key-id"]],
        BucketKeyEnabled: [
            () => void 0 !== output.headers["x-amz-server-side-encryption-bucket-key-enabled"],
            () => (0, smithy_client_1.parseBoolean)(output.headers["x-amz-server-side-encryption-bucket-key-enabled"]),
        ],
        RequestCharged: [, output.headers["x-amz-request-charged"]],
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlUploadPartCommand = deserializeAws_restXmlUploadPartCommand;
const deserializeAws_restXmlUploadPartCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlUploadPartCopyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlUploadPartCopyCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        CopySourceVersionId: [, output.headers["x-amz-copy-source-version-id"]],
        ServerSideEncryption: [, output.headers["x-amz-server-side-encryption"]],
        SSECustomerAlgorithm: [, output.headers["x-amz-server-side-encryption-customer-algorithm"]],
        SSECustomerKeyMD5: [, output.headers["x-amz-server-side-encryption-customer-key-md5"]],
        SSEKMSKeyId: [, output.headers["x-amz-server-side-encryption-aws-kms-key-id"]],
        BucketKeyEnabled: [
            () => void 0 !== output.headers["x-amz-server-side-encryption-bucket-key-enabled"],
            () => (0, smithy_client_1.parseBoolean)(output.headers["x-amz-server-side-encryption-bucket-key-enabled"]),
        ],
        RequestCharged: [, output.headers["x-amz-request-charged"]],
    });
    const data = (0, smithy_client_1.expectObject)(await parseBody(output.body, context));
    contents.CopyPartResult = deserializeAws_restXmlCopyPartResult(data, context);
    return contents;
};
exports.deserializeAws_restXmlUploadPartCopyCommand = deserializeAws_restXmlUploadPartCopyCommand;
const deserializeAws_restXmlUploadPartCopyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const deserializeAws_restXmlWriteGetObjectResponseCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restXmlWriteGetObjectResponseCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
exports.deserializeAws_restXmlWriteGetObjectResponseCommand = deserializeAws_restXmlWriteGetObjectResponseCommand;
const deserializeAws_restXmlWriteGetObjectResponseCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    (0, smithy_client_1.throwDefaultError)({
        output,
        parsedBody,
        exceptionCtor: S3ServiceException_1.S3ServiceException,
        errorCode,
    });
};
const map = smithy_client_1.map;
const deserializeAws_restXmlBucketAlreadyExistsResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const exception = new models_0_1.BucketAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restXmlBucketAlreadyOwnedByYouResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const exception = new models_0_1.BucketAlreadyOwnedByYou({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restXmlInvalidObjectStateResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    if (data["AccessTier"] !== undefined) {
        contents.AccessTier = (0, smithy_client_1.expectString)(data["AccessTier"]);
    }
    if (data["StorageClass"] !== undefined) {
        contents.StorageClass = (0, smithy_client_1.expectString)(data["StorageClass"]);
    }
    const exception = new models_0_1.InvalidObjectState({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restXmlNoSuchBucketResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const exception = new models_0_1.NoSuchBucket({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restXmlNoSuchKeyResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const exception = new models_0_1.NoSuchKey({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restXmlNoSuchUploadResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const exception = new models_0_1.NoSuchUpload({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restXmlNotFoundResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const exception = new models_0_1.NotFound({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restXmlObjectAlreadyInActiveTierErrorResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const exception = new models_1_1.ObjectAlreadyInActiveTierError({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restXmlObjectNotInActiveTierErrorResponse = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const exception = new models_0_1.ObjectNotInActiveTierError({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const deserializeAws_restXmlSelectObjectContentEventStream = (output, context) => {
    return context.eventStreamMarshaller.deserialize(output, async (event) => {
        if (event["Records"] != null) {
            return {
                Records: await deserializeAws_restXmlRecordsEvent_event(event["Records"], context),
            };
        }
        if (event["Stats"] != null) {
            return {
                Stats: await deserializeAws_restXmlStatsEvent_event(event["Stats"], context),
            };
        }
        if (event["Progress"] != null) {
            return {
                Progress: await deserializeAws_restXmlProgressEvent_event(event["Progress"], context),
            };
        }
        if (event["Cont"] != null) {
            return {
                Cont: await deserializeAws_restXmlContinuationEvent_event(event["Cont"], context),
            };
        }
        if (event["End"] != null) {
            return {
                End: await deserializeAws_restXmlEndEvent_event(event["End"], context),
            };
        }
        return { $unknown: output };
    });
};
const deserializeAws_restXmlContinuationEvent_event = async (output, context) => {
    const contents = {};
    const data = await parseBody(output.body, context);
    Object.assign(contents, deserializeAws_restXmlContinuationEvent(data, context));
    return contents;
};
const deserializeAws_restXmlEndEvent_event = async (output, context) => {
    const contents = {};
    const data = await parseBody(output.body, context);
    Object.assign(contents, deserializeAws_restXmlEndEvent(data, context));
    return contents;
};
const deserializeAws_restXmlProgressEvent_event = async (output, context) => {
    const contents = {};
    const data = await parseBody(output.body, context);
    contents.Details = deserializeAws_restXmlProgress(data, context);
    return contents;
};
const deserializeAws_restXmlRecordsEvent_event = async (output, context) => {
    const contents = {};
    contents.Payload = output.body;
    return contents;
};
const deserializeAws_restXmlStatsEvent_event = async (output, context) => {
    const contents = {};
    const data = await parseBody(output.body, context);
    contents.Details = deserializeAws_restXmlStats(data, context);
    return contents;
};
const serializeAws_restXmlAbortIncompleteMultipartUpload = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AbortIncompleteMultipartUpload");
    if (input.DaysAfterInitiation != null) {
        const node = xml_builder_1.XmlNode.of("DaysAfterInitiation", String(input.DaysAfterInitiation)).withName("DaysAfterInitiation");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlAccelerateConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AccelerateConfiguration");
    if (input.Status != null) {
        const node = xml_builder_1.XmlNode.of("BucketAccelerateStatus", input.Status).withName("Status");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlAccessControlPolicy = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AccessControlPolicy");
    if (input.Grants != null) {
        const nodes = serializeAws_restXmlGrants(input.Grants, context);
        const containerNode = new xml_builder_1.XmlNode("AccessControlList");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Owner != null) {
        const node = serializeAws_restXmlOwner(input.Owner, context).withName("Owner");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlAccessControlTranslation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AccessControlTranslation");
    if (input.Owner != null) {
        const node = xml_builder_1.XmlNode.of("OwnerOverride", input.Owner).withName("Owner");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlAllowedHeaders = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("AllowedHeader", entry);
        return node.withName("member");
    });
};
const serializeAws_restXmlAllowedMethods = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("AllowedMethod", entry);
        return node.withName("member");
    });
};
const serializeAws_restXmlAllowedOrigins = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("AllowedOrigin", entry);
        return node.withName("member");
    });
};
const serializeAws_restXmlAnalyticsAndOperator = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AnalyticsAndOperator");
    if (input.Prefix != null) {
        const node = xml_builder_1.XmlNode.of("Prefix", input.Prefix).withName("Prefix");
        bodyNode.addChildNode(node);
    }
    if (input.Tags != null) {
        const nodes = serializeAws_restXmlTagSet(input.Tags, context);
        nodes.map((node) => {
            node = node.withName("Tag");
            bodyNode.addChildNode(node);
        });
    }
    return bodyNode;
};
const serializeAws_restXmlAnalyticsConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AnalyticsConfiguration");
    if (input.Id != null) {
        const node = xml_builder_1.XmlNode.of("AnalyticsId", input.Id).withName("Id");
        bodyNode.addChildNode(node);
    }
    if (input.Filter != null) {
        const node = serializeAws_restXmlAnalyticsFilter(input.Filter, context).withName("Filter");
        bodyNode.addChildNode(node);
    }
    if (input.StorageClassAnalysis != null) {
        const node = serializeAws_restXmlStorageClassAnalysis(input.StorageClassAnalysis, context).withName("StorageClassAnalysis");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlAnalyticsExportDestination = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AnalyticsExportDestination");
    if (input.S3BucketDestination != null) {
        const node = serializeAws_restXmlAnalyticsS3BucketDestination(input.S3BucketDestination, context).withName("S3BucketDestination");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlAnalyticsFilter = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AnalyticsFilter");
    models_0_1.AnalyticsFilter.visit(input, {
        Prefix: (value) => {
            const node = xml_builder_1.XmlNode.of("Prefix", value).withName("Prefix");
            bodyNode.addChildNode(node);
        },
        Tag: (value) => {
            const node = serializeAws_restXmlTag(value, context).withName("Tag");
            bodyNode.addChildNode(node);
        },
        And: (value) => {
            const node = serializeAws_restXmlAnalyticsAndOperator(value, context).withName("And");
            bodyNode.addChildNode(node);
        },
        _: (name, value) => {
            if (!(value instanceof xml_builder_1.XmlNode || value instanceof xml_builder_1.XmlText)) {
                throw new Error("Unable to serialize unknown union members in XML.");
            }
            bodyNode.addChildNode(new xml_builder_1.XmlNode(name).addChildNode(value));
        },
    });
    return bodyNode;
};
const serializeAws_restXmlAnalyticsS3BucketDestination = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("AnalyticsS3BucketDestination");
    if (input.Format != null) {
        const node = xml_builder_1.XmlNode.of("AnalyticsS3ExportFileFormat", input.Format).withName("Format");
        bodyNode.addChildNode(node);
    }
    if (input.BucketAccountId != null) {
        const node = xml_builder_1.XmlNode.of("AccountId", input.BucketAccountId).withName("BucketAccountId");
        bodyNode.addChildNode(node);
    }
    if (input.Bucket != null) {
        const node = xml_builder_1.XmlNode.of("BucketName", input.Bucket).withName("Bucket");
        bodyNode.addChildNode(node);
    }
    if (input.Prefix != null) {
        const node = xml_builder_1.XmlNode.of("Prefix", input.Prefix).withName("Prefix");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlBucketLifecycleConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("BucketLifecycleConfiguration");
    if (input.Rules != null) {
        const nodes = serializeAws_restXmlLifecycleRules(input.Rules, context);
        nodes.map((node) => {
            node = node.withName("Rule");
            bodyNode.addChildNode(node);
        });
    }
    return bodyNode;
};
const serializeAws_restXmlBucketLoggingStatus = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("BucketLoggingStatus");
    if (input.LoggingEnabled != null) {
        const node = serializeAws_restXmlLoggingEnabled(input.LoggingEnabled, context).withName("LoggingEnabled");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlCompletedMultipartUpload = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CompletedMultipartUpload");
    if (input.Parts != null) {
        const nodes = serializeAws_restXmlCompletedPartList(input.Parts, context);
        nodes.map((node) => {
            node = node.withName("Part");
            bodyNode.addChildNode(node);
        });
    }
    return bodyNode;
};
const serializeAws_restXmlCompletedPart = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CompletedPart");
    if (input.ETag != null) {
        const node = xml_builder_1.XmlNode.of("ETag", input.ETag).withName("ETag");
        bodyNode.addChildNode(node);
    }
    if (input.ChecksumCRC32 != null) {
        const node = xml_builder_1.XmlNode.of("ChecksumCRC32", input.ChecksumCRC32).withName("ChecksumCRC32");
        bodyNode.addChildNode(node);
    }
    if (input.ChecksumCRC32C != null) {
        const node = xml_builder_1.XmlNode.of("ChecksumCRC32C", input.ChecksumCRC32C).withName("ChecksumCRC32C");
        bodyNode.addChildNode(node);
    }
    if (input.ChecksumSHA1 != null) {
        const node = xml_builder_1.XmlNode.of("ChecksumSHA1", input.ChecksumSHA1).withName("ChecksumSHA1");
        bodyNode.addChildNode(node);
    }
    if (input.ChecksumSHA256 != null) {
        const node = xml_builder_1.XmlNode.of("ChecksumSHA256", input.ChecksumSHA256).withName("ChecksumSHA256");
        bodyNode.addChildNode(node);
    }
    if (input.PartNumber != null) {
        const node = xml_builder_1.XmlNode.of("PartNumber", String(input.PartNumber)).withName("PartNumber");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlCompletedPartList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = serializeAws_restXmlCompletedPart(entry, context);
        return node.withName("member");
    });
};
const serializeAws_restXmlCondition = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Condition");
    if (input.HttpErrorCodeReturnedEquals != null) {
        const node = xml_builder_1.XmlNode
            .of("HttpErrorCodeReturnedEquals", input.HttpErrorCodeReturnedEquals)
            .withName("HttpErrorCodeReturnedEquals");
        bodyNode.addChildNode(node);
    }
    if (input.KeyPrefixEquals != null) {
        const node = xml_builder_1.XmlNode.of("KeyPrefixEquals", input.KeyPrefixEquals).withName("KeyPrefixEquals");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlCORSConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CORSConfiguration");
    if (input.CORSRules != null) {
        const nodes = serializeAws_restXmlCORSRules(input.CORSRules, context);
        nodes.map((node) => {
            node = node.withName("CORSRule");
            bodyNode.addChildNode(node);
        });
    }
    return bodyNode;
};
const serializeAws_restXmlCORSRule = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CORSRule");
    if (input.ID != null) {
        const node = xml_builder_1.XmlNode.of("ID", input.ID).withName("ID");
        bodyNode.addChildNode(node);
    }
    if (input.AllowedHeaders != null) {
        const nodes = serializeAws_restXmlAllowedHeaders(input.AllowedHeaders, context);
        nodes.map((node) => {
            node = node.withName("AllowedHeader");
            bodyNode.addChildNode(node);
        });
    }
    if (input.AllowedMethods != null) {
        const nodes = serializeAws_restXmlAllowedMethods(input.AllowedMethods, context);
        nodes.map((node) => {
            node = node.withName("AllowedMethod");
            bodyNode.addChildNode(node);
        });
    }
    if (input.AllowedOrigins != null) {
        const nodes = serializeAws_restXmlAllowedOrigins(input.AllowedOrigins, context);
        nodes.map((node) => {
            node = node.withName("AllowedOrigin");
            bodyNode.addChildNode(node);
        });
    }
    if (input.ExposeHeaders != null) {
        const nodes = serializeAws_restXmlExposeHeaders(input.ExposeHeaders, context);
        nodes.map((node) => {
            node = node.withName("ExposeHeader");
            bodyNode.addChildNode(node);
        });
    }
    if (input.MaxAgeSeconds != null) {
        const node = xml_builder_1.XmlNode.of("MaxAgeSeconds", String(input.MaxAgeSeconds)).withName("MaxAgeSeconds");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlCORSRules = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = serializeAws_restXmlCORSRule(entry, context);
        return node.withName("member");
    });
};
const serializeAws_restXmlCreateBucketConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CreateBucketConfiguration");
    if (input.LocationConstraint != null) {
        const node = xml_builder_1.XmlNode.of("BucketLocationConstraint", input.LocationConstraint).withName("LocationConstraint");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlCSVInput = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CSVInput");
    if (input.FileHeaderInfo != null) {
        const node = xml_builder_1.XmlNode.of("FileHeaderInfo", input.FileHeaderInfo).withName("FileHeaderInfo");
        bodyNode.addChildNode(node);
    }
    if (input.Comments != null) {
        const node = xml_builder_1.XmlNode.of("Comments", input.Comments).withName("Comments");
        bodyNode.addChildNode(node);
    }
    if (input.QuoteEscapeCharacter != null) {
        const node = xml_builder_1.XmlNode.of("QuoteEscapeCharacter", input.QuoteEscapeCharacter).withName("QuoteEscapeCharacter");
        bodyNode.addChildNode(node);
    }
    if (input.RecordDelimiter != null) {
        const node = xml_builder_1.XmlNode.of("RecordDelimiter", input.RecordDelimiter).withName("RecordDelimiter");
        bodyNode.addChildNode(node);
    }
    if (input.FieldDelimiter != null) {
        const node = xml_builder_1.XmlNode.of("FieldDelimiter", input.FieldDelimiter).withName("FieldDelimiter");
        bodyNode.addChildNode(node);
    }
    if (input.QuoteCharacter != null) {
        const node = xml_builder_1.XmlNode.of("QuoteCharacter", input.QuoteCharacter).withName("QuoteCharacter");
        bodyNode.addChildNode(node);
    }
    if (input.AllowQuotedRecordDelimiter != null) {
        const node = xml_builder_1.XmlNode
            .of("AllowQuotedRecordDelimiter", String(input.AllowQuotedRecordDelimiter))
            .withName("AllowQuotedRecordDelimiter");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlCSVOutput = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("CSVOutput");
    if (input.QuoteFields != null) {
        const node = xml_builder_1.XmlNode.of("QuoteFields", input.QuoteFields).withName("QuoteFields");
        bodyNode.addChildNode(node);
    }
    if (input.QuoteEscapeCharacter != null) {
        const node = xml_builder_1.XmlNode.of("QuoteEscapeCharacter", input.QuoteEscapeCharacter).withName("QuoteEscapeCharacter");
        bodyNode.addChildNode(node);
    }
    if (input.RecordDelimiter != null) {
        const node = xml_builder_1.XmlNode.of("RecordDelimiter", input.RecordDelimiter).withName("RecordDelimiter");
        bodyNode.addChildNode(node);
    }
    if (input.FieldDelimiter != null) {
        const node = xml_builder_1.XmlNode.of("FieldDelimiter", input.FieldDelimiter).withName("FieldDelimiter");
        bodyNode.addChildNode(node);
    }
    if (input.QuoteCharacter != null) {
        const node = xml_builder_1.XmlNode.of("QuoteCharacter", input.QuoteCharacter).withName("QuoteCharacter");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlDefaultRetention = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("DefaultRetention");
    if (input.Mode != null) {
        const node = xml_builder_1.XmlNode.of("ObjectLockRetentionMode", input.Mode).withName("Mode");
        bodyNode.addChildNode(node);
    }
    if (input.Days != null) {
        const node = xml_builder_1.XmlNode.of("Days", String(input.Days)).withName("Days");
        bodyNode.addChildNode(node);
    }
    if (input.Years != null) {
        const node = xml_builder_1.XmlNode.of("Years", String(input.Years)).withName("Years");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlDelete = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Delete");
    if (input.Objects != null) {
        const nodes = serializeAws_restXmlObjectIdentifierList(input.Objects, context);
        nodes.map((node) => {
            node = node.withName("Object");
            bodyNode.addChildNode(node);
        });
    }
    if (input.Quiet != null) {
        const node = xml_builder_1.XmlNode.of("Quiet", String(input.Quiet)).withName("Quiet");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlDeleteMarkerReplication = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("DeleteMarkerReplication");
    if (input.Status != null) {
        const node = xml_builder_1.XmlNode.of("DeleteMarkerReplicationStatus", input.Status).withName("Status");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlDestination = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Destination");
    if (input.Bucket != null) {
        const node = xml_builder_1.XmlNode.of("BucketName", input.Bucket).withName("Bucket");
        bodyNode.addChildNode(node);
    }
    if (input.Account != null) {
        const node = xml_builder_1.XmlNode.of("AccountId", input.Account).withName("Account");
        bodyNode.addChildNode(node);
    }
    if (input.StorageClass != null) {
        const node = xml_builder_1.XmlNode.of("StorageClass", input.StorageClass).withName("StorageClass");
        bodyNode.addChildNode(node);
    }
    if (input.AccessControlTranslation != null) {
        const node = serializeAws_restXmlAccessControlTranslation(input.AccessControlTranslation, context).withName("AccessControlTranslation");
        bodyNode.addChildNode(node);
    }
    if (input.EncryptionConfiguration != null) {
        const node = serializeAws_restXmlEncryptionConfiguration(input.EncryptionConfiguration, context).withName("EncryptionConfiguration");
        bodyNode.addChildNode(node);
    }
    if (input.ReplicationTime != null) {
        const node = serializeAws_restXmlReplicationTime(input.ReplicationTime, context).withName("ReplicationTime");
        bodyNode.addChildNode(node);
    }
    if (input.Metrics != null) {
        const node = serializeAws_restXmlMetrics(input.Metrics, context).withName("Metrics");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlEncryption = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Encryption");
    if (input.EncryptionType != null) {
        const node = xml_builder_1.XmlNode.of("ServerSideEncryption", input.EncryptionType).withName("EncryptionType");
        bodyNode.addChildNode(node);
    }
    if (input.KMSKeyId != null) {
        const node = xml_builder_1.XmlNode.of("SSEKMSKeyId", input.KMSKeyId).withName("KMSKeyId");
        bodyNode.addChildNode(node);
    }
    if (input.KMSContext != null) {
        const node = xml_builder_1.XmlNode.of("KMSContext", input.KMSContext).withName("KMSContext");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlEncryptionConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("EncryptionConfiguration");
    if (input.ReplicaKmsKeyID != null) {
        const node = xml_builder_1.XmlNode.of("ReplicaKmsKeyID", input.ReplicaKmsKeyID).withName("ReplicaKmsKeyID");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlErrorDocument = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ErrorDocument");
    if (input.Key != null) {
        const node = xml_builder_1.XmlNode.of("ObjectKey", input.Key).withName("Key");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlEventBridgeConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("EventBridgeConfiguration");
    return bodyNode;
};
const serializeAws_restXmlEventList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("Event", entry);
        return node.withName("member");
    });
};
const serializeAws_restXmlExistingObjectReplication = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ExistingObjectReplication");
    if (input.Status != null) {
        const node = xml_builder_1.XmlNode.of("ExistingObjectReplicationStatus", input.Status).withName("Status");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlExposeHeaders = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("ExposeHeader", entry);
        return node.withName("member");
    });
};
const serializeAws_restXmlFilterRule = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("FilterRule");
    if (input.Name != null) {
        const node = xml_builder_1.XmlNode.of("FilterRuleName", input.Name).withName("Name");
        bodyNode.addChildNode(node);
    }
    if (input.Value != null) {
        const node = xml_builder_1.XmlNode.of("FilterRuleValue", input.Value).withName("Value");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlFilterRuleList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = serializeAws_restXmlFilterRule(entry, context);
        return node.withName("member");
    });
};
const serializeAws_restXmlGlacierJobParameters = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("GlacierJobParameters");
    if (input.Tier != null) {
        const node = xml_builder_1.XmlNode.of("Tier", input.Tier).withName("Tier");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlGrant = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Grant");
    if (input.Grantee != null) {
        const node = serializeAws_restXmlGrantee(input.Grantee, context).withName("Grantee");
        node.addAttribute("xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        bodyNode.addChildNode(node);
    }
    if (input.Permission != null) {
        const node = xml_builder_1.XmlNode.of("Permission", input.Permission).withName("Permission");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlGrantee = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Grantee");
    if (input.DisplayName != null) {
        const node = xml_builder_1.XmlNode.of("DisplayName", input.DisplayName).withName("DisplayName");
        bodyNode.addChildNode(node);
    }
    if (input.EmailAddress != null) {
        const node = xml_builder_1.XmlNode.of("EmailAddress", input.EmailAddress).withName("EmailAddress");
        bodyNode.addChildNode(node);
    }
    if (input.ID != null) {
        const node = xml_builder_1.XmlNode.of("ID", input.ID).withName("ID");
        bodyNode.addChildNode(node);
    }
    if (input.URI != null) {
        const node = xml_builder_1.XmlNode.of("URI", input.URI).withName("URI");
        bodyNode.addChildNode(node);
    }
    if (input.Type != null) {
        bodyNode.addAttribute("xsi:type", input.Type);
    }
    return bodyNode;
};
const serializeAws_restXmlGrants = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = serializeAws_restXmlGrant(entry, context);
        return node.withName("Grant");
    });
};
const serializeAws_restXmlIndexDocument = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("IndexDocument");
    if (input.Suffix != null) {
        const node = xml_builder_1.XmlNode.of("Suffix", input.Suffix).withName("Suffix");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlInputSerialization = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("InputSerialization");
    if (input.CSV != null) {
        const node = serializeAws_restXmlCSVInput(input.CSV, context).withName("CSV");
        bodyNode.addChildNode(node);
    }
    if (input.CompressionType != null) {
        const node = xml_builder_1.XmlNode.of("CompressionType", input.CompressionType).withName("CompressionType");
        bodyNode.addChildNode(node);
    }
    if (input.JSON != null) {
        const node = serializeAws_restXmlJSONInput(input.JSON, context).withName("JSON");
        bodyNode.addChildNode(node);
    }
    if (input.Parquet != null) {
        const node = serializeAws_restXmlParquetInput(input.Parquet, context).withName("Parquet");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlIntelligentTieringAndOperator = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("IntelligentTieringAndOperator");
    if (input.Prefix != null) {
        const node = xml_builder_1.XmlNode.of("Prefix", input.Prefix).withName("Prefix");
        bodyNode.addChildNode(node);
    }
    if (input.Tags != null) {
        const nodes = serializeAws_restXmlTagSet(input.Tags, context);
        nodes.map((node) => {
            node = node.withName("Tag");
            bodyNode.addChildNode(node);
        });
    }
    return bodyNode;
};
const serializeAws_restXmlIntelligentTieringConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("IntelligentTieringConfiguration");
    if (input.Id != null) {
        const node = xml_builder_1.XmlNode.of("IntelligentTieringId", input.Id).withName("Id");
        bodyNode.addChildNode(node);
    }
    if (input.Filter != null) {
        const node = serializeAws_restXmlIntelligentTieringFilter(input.Filter, context).withName("Filter");
        bodyNode.addChildNode(node);
    }
    if (input.Status != null) {
        const node = xml_builder_1.XmlNode.of("IntelligentTieringStatus", input.Status).withName("Status");
        bodyNode.addChildNode(node);
    }
    if (input.Tierings != null) {
        const nodes = serializeAws_restXmlTieringList(input.Tierings, context);
        nodes.map((node) => {
            node = node.withName("Tiering");
            bodyNode.addChildNode(node);
        });
    }
    return bodyNode;
};
const serializeAws_restXmlIntelligentTieringFilter = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("IntelligentTieringFilter");
    if (input.Prefix != null) {
        const node = xml_builder_1.XmlNode.of("Prefix", input.Prefix).withName("Prefix");
        bodyNode.addChildNode(node);
    }
    if (input.Tag != null) {
        const node = serializeAws_restXmlTag(input.Tag, context).withName("Tag");
        bodyNode.addChildNode(node);
    }
    if (input.And != null) {
        const node = serializeAws_restXmlIntelligentTieringAndOperator(input.And, context).withName("And");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlInventoryConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("InventoryConfiguration");
    if (input.Destination != null) {
        const node = serializeAws_restXmlInventoryDestination(input.Destination, context).withName("Destination");
        bodyNode.addChildNode(node);
    }
    if (input.IsEnabled != null) {
        const node = xml_builder_1.XmlNode.of("IsEnabled", String(input.IsEnabled)).withName("IsEnabled");
        bodyNode.addChildNode(node);
    }
    if (input.Filter != null) {
        const node = serializeAws_restXmlInventoryFilter(input.Filter, context).withName("Filter");
        bodyNode.addChildNode(node);
    }
    if (input.Id != null) {
        const node = xml_builder_1.XmlNode.of("InventoryId", input.Id).withName("Id");
        bodyNode.addChildNode(node);
    }
    if (input.IncludedObjectVersions != null) {
        const node = xml_builder_1.XmlNode
            .of("InventoryIncludedObjectVersions", input.IncludedObjectVersions)
            .withName("IncludedObjectVersions");
        bodyNode.addChildNode(node);
    }
    if (input.OptionalFields != null) {
        const nodes = serializeAws_restXmlInventoryOptionalFields(input.OptionalFields, context);
        const containerNode = new xml_builder_1.XmlNode("OptionalFields");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Schedule != null) {
        const node = serializeAws_restXmlInventorySchedule(input.Schedule, context).withName("Schedule");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlInventoryDestination = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("InventoryDestination");
    if (input.S3BucketDestination != null) {
        const node = serializeAws_restXmlInventoryS3BucketDestination(input.S3BucketDestination, context).withName("S3BucketDestination");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlInventoryEncryption = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("InventoryEncryption");
    if (input.SSES3 != null) {
        const node = serializeAws_restXmlSSES3(input.SSES3, context).withName("SSE-S3");
        bodyNode.addChildNode(node);
    }
    if (input.SSEKMS != null) {
        const node = serializeAws_restXmlSSEKMS(input.SSEKMS, context).withName("SSE-KMS");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlInventoryFilter = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("InventoryFilter");
    if (input.Prefix != null) {
        const node = xml_builder_1.XmlNode.of("Prefix", input.Prefix).withName("Prefix");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlInventoryOptionalFields = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = xml_builder_1.XmlNode.of("InventoryOptionalField", entry);
        return node.withName("Field");
    });
};
const serializeAws_restXmlInventoryS3BucketDestination = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("InventoryS3BucketDestination");
    if (input.AccountId != null) {
        const node = xml_builder_1.XmlNode.of("AccountId", input.AccountId).withName("AccountId");
        bodyNode.addChildNode(node);
    }
    if (input.Bucket != null) {
        const node = xml_builder_1.XmlNode.of("BucketName", input.Bucket).withName("Bucket");
        bodyNode.addChildNode(node);
    }
    if (input.Format != null) {
        const node = xml_builder_1.XmlNode.of("InventoryFormat", input.Format).withName("Format");
        bodyNode.addChildNode(node);
    }
    if (input.Prefix != null) {
        const node = xml_builder_1.XmlNode.of("Prefix", input.Prefix).withName("Prefix");
        bodyNode.addChildNode(node);
    }
    if (input.Encryption != null) {
        const node = serializeAws_restXmlInventoryEncryption(input.Encryption, context).withName("Encryption");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlInventorySchedule = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("InventorySchedule");
    if (input.Frequency != null) {
        const node = xml_builder_1.XmlNode.of("InventoryFrequency", input.Frequency).withName("Frequency");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlJSONInput = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("JSONInput");
    if (input.Type != null) {
        const node = xml_builder_1.XmlNode.of("JSONType", input.Type).withName("Type");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlJSONOutput = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("JSONOutput");
    if (input.RecordDelimiter != null) {
        const node = xml_builder_1.XmlNode.of("RecordDelimiter", input.RecordDelimiter).withName("RecordDelimiter");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlLambdaFunctionConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LambdaFunctionConfiguration");
    if (input.Id != null) {
        const node = xml_builder_1.XmlNode.of("NotificationId", input.Id).withName("Id");
        bodyNode.addChildNode(node);
    }
    if (input.LambdaFunctionArn != null) {
        const node = xml_builder_1.XmlNode.of("LambdaFunctionArn", input.LambdaFunctionArn).withName("CloudFunction");
        bodyNode.addChildNode(node);
    }
    if (input.Events != null) {
        const nodes = serializeAws_restXmlEventList(input.Events, context);
        nodes.map((node) => {
            node = node.withName("Event");
            bodyNode.addChildNode(node);
        });
    }
    if (input.Filter != null) {
        const node = serializeAws_restXmlNotificationConfigurationFilter(input.Filter, context).withName("Filter");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlLambdaFunctionConfigurationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = serializeAws_restXmlLambdaFunctionConfiguration(entry, context);
        return node.withName("member");
    });
};
const serializeAws_restXmlLifecycleExpiration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LifecycleExpiration");
    if (input.Date != null) {
        const node = xml_builder_1.XmlNode.of("Date", (input.Date.toISOString().split(".")[0] + "Z").toString()).withName("Date");
        bodyNode.addChildNode(node);
    }
    if (input.Days != null) {
        const node = xml_builder_1.XmlNode.of("Days", String(input.Days)).withName("Days");
        bodyNode.addChildNode(node);
    }
    if (input.ExpiredObjectDeleteMarker != null) {
        const node = xml_builder_1.XmlNode
            .of("ExpiredObjectDeleteMarker", String(input.ExpiredObjectDeleteMarker))
            .withName("ExpiredObjectDeleteMarker");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlLifecycleRule = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LifecycleRule");
    if (input.Expiration != null) {
        const node = serializeAws_restXmlLifecycleExpiration(input.Expiration, context).withName("Expiration");
        bodyNode.addChildNode(node);
    }
    if (input.ID != null) {
        const node = xml_builder_1.XmlNode.of("ID", input.ID).withName("ID");
        bodyNode.addChildNode(node);
    }
    if (input.Prefix != null) {
        const node = xml_builder_1.XmlNode.of("Prefix", input.Prefix).withName("Prefix");
        bodyNode.addChildNode(node);
    }
    if (input.Filter != null) {
        const node = serializeAws_restXmlLifecycleRuleFilter(input.Filter, context).withName("Filter");
        bodyNode.addChildNode(node);
    }
    if (input.Status != null) {
        const node = xml_builder_1.XmlNode.of("ExpirationStatus", input.Status).withName("Status");
        bodyNode.addChildNode(node);
    }
    if (input.Transitions != null) {
        const nodes = serializeAws_restXmlTransitionList(input.Transitions, context);
        nodes.map((node) => {
            node = node.withName("Transition");
            bodyNode.addChildNode(node);
        });
    }
    if (input.NoncurrentVersionTransitions != null) {
        const nodes = serializeAws_restXmlNoncurrentVersionTransitionList(input.NoncurrentVersionTransitions, context);
        nodes.map((node) => {
            node = node.withName("NoncurrentVersionTransition");
            bodyNode.addChildNode(node);
        });
    }
    if (input.NoncurrentVersionExpiration != null) {
        const node = serializeAws_restXmlNoncurrentVersionExpiration(input.NoncurrentVersionExpiration, context).withName("NoncurrentVersionExpiration");
        bodyNode.addChildNode(node);
    }
    if (input.AbortIncompleteMultipartUpload != null) {
        const node = serializeAws_restXmlAbortIncompleteMultipartUpload(input.AbortIncompleteMultipartUpload, context).withName("AbortIncompleteMultipartUpload");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlLifecycleRuleAndOperator = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LifecycleRuleAndOperator");
    if (input.Prefix != null) {
        const node = xml_builder_1.XmlNode.of("Prefix", input.Prefix).withName("Prefix");
        bodyNode.addChildNode(node);
    }
    if (input.Tags != null) {
        const nodes = serializeAws_restXmlTagSet(input.Tags, context);
        nodes.map((node) => {
            node = node.withName("Tag");
            bodyNode.addChildNode(node);
        });
    }
    if (input.ObjectSizeGreaterThan != null) {
        const node = xml_builder_1.XmlNode
            .of("ObjectSizeGreaterThanBytes", String(input.ObjectSizeGreaterThan))
            .withName("ObjectSizeGreaterThan");
        bodyNode.addChildNode(node);
    }
    if (input.ObjectSizeLessThan != null) {
        const node = xml_builder_1.XmlNode
            .of("ObjectSizeLessThanBytes", String(input.ObjectSizeLessThan))
            .withName("ObjectSizeLessThan");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlLifecycleRuleFilter = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LifecycleRuleFilter");
    models_0_1.LifecycleRuleFilter.visit(input, {
        Prefix: (value) => {
            const node = xml_builder_1.XmlNode.of("Prefix", value).withName("Prefix");
            bodyNode.addChildNode(node);
        },
        Tag: (value) => {
            const node = serializeAws_restXmlTag(value, context).withName("Tag");
            bodyNode.addChildNode(node);
        },
        ObjectSizeGreaterThan: (value) => {
            const node = xml_builder_1.XmlNode.of("ObjectSizeGreaterThanBytes", String(value)).withName("ObjectSizeGreaterThan");
            bodyNode.addChildNode(node);
        },
        ObjectSizeLessThan: (value) => {
            const node = xml_builder_1.XmlNode.of("ObjectSizeLessThanBytes", String(value)).withName("ObjectSizeLessThan");
            bodyNode.addChildNode(node);
        },
        And: (value) => {
            const node = serializeAws_restXmlLifecycleRuleAndOperator(value, context).withName("And");
            bodyNode.addChildNode(node);
        },
        _: (name, value) => {
            if (!(value instanceof xml_builder_1.XmlNode || value instanceof xml_builder_1.XmlText)) {
                throw new Error("Unable to serialize unknown union members in XML.");
            }
            bodyNode.addChildNode(new xml_builder_1.XmlNode(name).addChildNode(value));
        },
    });
    return bodyNode;
};
const serializeAws_restXmlLifecycleRules = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = serializeAws_restXmlLifecycleRule(entry, context);
        return node.withName("member");
    });
};
const serializeAws_restXmlLoggingEnabled = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("LoggingEnabled");
    if (input.TargetBucket != null) {
        const node = xml_builder_1.XmlNode.of("TargetBucket", input.TargetBucket).withName("TargetBucket");
        bodyNode.addChildNode(node);
    }
    if (input.TargetGrants != null) {
        const nodes = serializeAws_restXmlTargetGrants(input.TargetGrants, context);
        const containerNode = new xml_builder_1.XmlNode("TargetGrants");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.TargetPrefix != null) {
        const node = xml_builder_1.XmlNode.of("TargetPrefix", input.TargetPrefix).withName("TargetPrefix");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlMetadataEntry = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("MetadataEntry");
    if (input.Name != null) {
        const node = xml_builder_1.XmlNode.of("MetadataKey", input.Name).withName("Name");
        bodyNode.addChildNode(node);
    }
    if (input.Value != null) {
        const node = xml_builder_1.XmlNode.of("MetadataValue", input.Value).withName("Value");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlMetrics = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Metrics");
    if (input.Status != null) {
        const node = xml_builder_1.XmlNode.of("MetricsStatus", input.Status).withName("Status");
        bodyNode.addChildNode(node);
    }
    if (input.EventThreshold != null) {
        const node = serializeAws_restXmlReplicationTimeValue(input.EventThreshold, context).withName("EventThreshold");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlMetricsAndOperator = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("MetricsAndOperator");
    if (input.Prefix != null) {
        const node = xml_builder_1.XmlNode.of("Prefix", input.Prefix).withName("Prefix");
        bodyNode.addChildNode(node);
    }
    if (input.Tags != null) {
        const nodes = serializeAws_restXmlTagSet(input.Tags, context);
        nodes.map((node) => {
            node = node.withName("Tag");
            bodyNode.addChildNode(node);
        });
    }
    if (input.AccessPointArn != null) {
        const node = xml_builder_1.XmlNode.of("AccessPointArn", input.AccessPointArn).withName("AccessPointArn");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlMetricsConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("MetricsConfiguration");
    if (input.Id != null) {
        const node = xml_builder_1.XmlNode.of("MetricsId", input.Id).withName("Id");
        bodyNode.addChildNode(node);
    }
    if (input.Filter != null) {
        const node = serializeAws_restXmlMetricsFilter(input.Filter, context).withName("Filter");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlMetricsFilter = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("MetricsFilter");
    models_0_1.MetricsFilter.visit(input, {
        Prefix: (value) => {
            const node = xml_builder_1.XmlNode.of("Prefix", value).withName("Prefix");
            bodyNode.addChildNode(node);
        },
        Tag: (value) => {
            const node = serializeAws_restXmlTag(value, context).withName("Tag");
            bodyNode.addChildNode(node);
        },
        AccessPointArn: (value) => {
            const node = xml_builder_1.XmlNode.of("AccessPointArn", value).withName("AccessPointArn");
            bodyNode.addChildNode(node);
        },
        And: (value) => {
            const node = serializeAws_restXmlMetricsAndOperator(value, context).withName("And");
            bodyNode.addChildNode(node);
        },
        _: (name, value) => {
            if (!(value instanceof xml_builder_1.XmlNode || value instanceof xml_builder_1.XmlText)) {
                throw new Error("Unable to serialize unknown union members in XML.");
            }
            bodyNode.addChildNode(new xml_builder_1.XmlNode(name).addChildNode(value));
        },
    });
    return bodyNode;
};
const serializeAws_restXmlNoncurrentVersionExpiration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("NoncurrentVersionExpiration");
    if (input.NoncurrentDays != null) {
        const node = xml_builder_1.XmlNode.of("Days", String(input.NoncurrentDays)).withName("NoncurrentDays");
        bodyNode.addChildNode(node);
    }
    if (input.NewerNoncurrentVersions != null) {
        const node = xml_builder_1.XmlNode
            .of("VersionCount", String(input.NewerNoncurrentVersions))
            .withName("NewerNoncurrentVersions");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlNoncurrentVersionTransition = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("NoncurrentVersionTransition");
    if (input.NoncurrentDays != null) {
        const node = xml_builder_1.XmlNode.of("Days", String(input.NoncurrentDays)).withName("NoncurrentDays");
        bodyNode.addChildNode(node);
    }
    if (input.StorageClass != null) {
        const node = xml_builder_1.XmlNode.of("TransitionStorageClass", input.StorageClass).withName("StorageClass");
        bodyNode.addChildNode(node);
    }
    if (input.NewerNoncurrentVersions != null) {
        const node = xml_builder_1.XmlNode
            .of("VersionCount", String(input.NewerNoncurrentVersions))
            .withName("NewerNoncurrentVersions");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlNoncurrentVersionTransitionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = serializeAws_restXmlNoncurrentVersionTransition(entry, context);
        return node.withName("member");
    });
};
const serializeAws_restXmlNotificationConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("NotificationConfiguration");
    if (input.TopicConfigurations != null) {
        const nodes = serializeAws_restXmlTopicConfigurationList(input.TopicConfigurations, context);
        nodes.map((node) => {
            node = node.withName("TopicConfiguration");
            bodyNode.addChildNode(node);
        });
    }
    if (input.QueueConfigurations != null) {
        const nodes = serializeAws_restXmlQueueConfigurationList(input.QueueConfigurations, context);
        nodes.map((node) => {
            node = node.withName("QueueConfiguration");
            bodyNode.addChildNode(node);
        });
    }
    if (input.LambdaFunctionConfigurations != null) {
        const nodes = serializeAws_restXmlLambdaFunctionConfigurationList(input.LambdaFunctionConfigurations, context);
        nodes.map((node) => {
            node = node.withName("CloudFunctionConfiguration");
            bodyNode.addChildNode(node);
        });
    }
    if (input.EventBridgeConfiguration != null) {
        const node = serializeAws_restXmlEventBridgeConfiguration(input.EventBridgeConfiguration, context).withName("EventBridgeConfiguration");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlNotificationConfigurationFilter = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("NotificationConfigurationFilter");
    if (input.Key != null) {
        const node = serializeAws_restXmlS3KeyFilter(input.Key, context).withName("S3Key");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlObjectIdentifier = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ObjectIdentifier");
    if (input.Key != null) {
        const node = xml_builder_1.XmlNode.of("ObjectKey", input.Key).withName("Key");
        bodyNode.addChildNode(node);
    }
    if (input.VersionId != null) {
        const node = xml_builder_1.XmlNode.of("ObjectVersionId", input.VersionId).withName("VersionId");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlObjectIdentifierList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = serializeAws_restXmlObjectIdentifier(entry, context);
        return node.withName("member");
    });
};
const serializeAws_restXmlObjectLockConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ObjectLockConfiguration");
    if (input.ObjectLockEnabled != null) {
        const node = xml_builder_1.XmlNode.of("ObjectLockEnabled", input.ObjectLockEnabled).withName("ObjectLockEnabled");
        bodyNode.addChildNode(node);
    }
    if (input.Rule != null) {
        const node = serializeAws_restXmlObjectLockRule(input.Rule, context).withName("Rule");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlObjectLockLegalHold = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ObjectLockLegalHold");
    if (input.Status != null) {
        const node = xml_builder_1.XmlNode.of("ObjectLockLegalHoldStatus", input.Status).withName("Status");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlObjectLockRetention = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ObjectLockRetention");
    if (input.Mode != null) {
        const node = xml_builder_1.XmlNode.of("ObjectLockRetentionMode", input.Mode).withName("Mode");
        bodyNode.addChildNode(node);
    }
    if (input.RetainUntilDate != null) {
        const node = xml_builder_1.XmlNode
            .of("Date", (input.RetainUntilDate.toISOString().split(".")[0] + "Z").toString())
            .withName("RetainUntilDate");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlObjectLockRule = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ObjectLockRule");
    if (input.DefaultRetention != null) {
        const node = serializeAws_restXmlDefaultRetention(input.DefaultRetention, context).withName("DefaultRetention");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlOutputLocation = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OutputLocation");
    if (input.S3 != null) {
        const node = serializeAws_restXmlS3Location(input.S3, context).withName("S3");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlOutputSerialization = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OutputSerialization");
    if (input.CSV != null) {
        const node = serializeAws_restXmlCSVOutput(input.CSV, context).withName("CSV");
        bodyNode.addChildNode(node);
    }
    if (input.JSON != null) {
        const node = serializeAws_restXmlJSONOutput(input.JSON, context).withName("JSON");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlOwner = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Owner");
    if (input.DisplayName != null) {
        const node = xml_builder_1.XmlNode.of("DisplayName", input.DisplayName).withName("DisplayName");
        bodyNode.addChildNode(node);
    }
    if (input.ID != null) {
        const node = xml_builder_1.XmlNode.of("ID", input.ID).withName("ID");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlOwnershipControls = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OwnershipControls");
    if (input.Rules != null) {
        const nodes = serializeAws_restXmlOwnershipControlsRules(input.Rules, context);
        nodes.map((node) => {
            node = node.withName("Rule");
            bodyNode.addChildNode(node);
        });
    }
    return bodyNode;
};
const serializeAws_restXmlOwnershipControlsRule = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("OwnershipControlsRule");
    if (input.ObjectOwnership != null) {
        const node = xml_builder_1.XmlNode.of("ObjectOwnership", input.ObjectOwnership).withName("ObjectOwnership");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlOwnershipControlsRules = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = serializeAws_restXmlOwnershipControlsRule(entry, context);
        return node.withName("member");
    });
};
const serializeAws_restXmlParquetInput = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ParquetInput");
    return bodyNode;
};
const serializeAws_restXmlPublicAccessBlockConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("PublicAccessBlockConfiguration");
    if (input.BlockPublicAcls != null) {
        const node = xml_builder_1.XmlNode.of("Setting", String(input.BlockPublicAcls)).withName("BlockPublicAcls");
        bodyNode.addChildNode(node);
    }
    if (input.IgnorePublicAcls != null) {
        const node = xml_builder_1.XmlNode.of("Setting", String(input.IgnorePublicAcls)).withName("IgnorePublicAcls");
        bodyNode.addChildNode(node);
    }
    if (input.BlockPublicPolicy != null) {
        const node = xml_builder_1.XmlNode.of("Setting", String(input.BlockPublicPolicy)).withName("BlockPublicPolicy");
        bodyNode.addChildNode(node);
    }
    if (input.RestrictPublicBuckets != null) {
        const node = xml_builder_1.XmlNode.of("Setting", String(input.RestrictPublicBuckets)).withName("RestrictPublicBuckets");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlQueueConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("QueueConfiguration");
    if (input.Id != null) {
        const node = xml_builder_1.XmlNode.of("NotificationId", input.Id).withName("Id");
        bodyNode.addChildNode(node);
    }
    if (input.QueueArn != null) {
        const node = xml_builder_1.XmlNode.of("QueueArn", input.QueueArn).withName("Queue");
        bodyNode.addChildNode(node);
    }
    if (input.Events != null) {
        const nodes = serializeAws_restXmlEventList(input.Events, context);
        nodes.map((node) => {
            node = node.withName("Event");
            bodyNode.addChildNode(node);
        });
    }
    if (input.Filter != null) {
        const node = serializeAws_restXmlNotificationConfigurationFilter(input.Filter, context).withName("Filter");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlQueueConfigurationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = serializeAws_restXmlQueueConfiguration(entry, context);
        return node.withName("member");
    });
};
const serializeAws_restXmlRedirect = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Redirect");
    if (input.HostName != null) {
        const node = xml_builder_1.XmlNode.of("HostName", input.HostName).withName("HostName");
        bodyNode.addChildNode(node);
    }
    if (input.HttpRedirectCode != null) {
        const node = xml_builder_1.XmlNode.of("HttpRedirectCode", input.HttpRedirectCode).withName("HttpRedirectCode");
        bodyNode.addChildNode(node);
    }
    if (input.Protocol != null) {
        const node = xml_builder_1.XmlNode.of("Protocol", input.Protocol).withName("Protocol");
        bodyNode.addChildNode(node);
    }
    if (input.ReplaceKeyPrefixWith != null) {
        const node = xml_builder_1.XmlNode.of("ReplaceKeyPrefixWith", input.ReplaceKeyPrefixWith).withName("ReplaceKeyPrefixWith");
        bodyNode.addChildNode(node);
    }
    if (input.ReplaceKeyWith != null) {
        const node = xml_builder_1.XmlNode.of("ReplaceKeyWith", input.ReplaceKeyWith).withName("ReplaceKeyWith");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlRedirectAllRequestsTo = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("RedirectAllRequestsTo");
    if (input.HostName != null) {
        const node = xml_builder_1.XmlNode.of("HostName", input.HostName).withName("HostName");
        bodyNode.addChildNode(node);
    }
    if (input.Protocol != null) {
        const node = xml_builder_1.XmlNode.of("Protocol", input.Protocol).withName("Protocol");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlReplicaModifications = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ReplicaModifications");
    if (input.Status != null) {
        const node = xml_builder_1.XmlNode.of("ReplicaModificationsStatus", input.Status).withName("Status");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlReplicationConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ReplicationConfiguration");
    if (input.Role != null) {
        const node = xml_builder_1.XmlNode.of("Role", input.Role).withName("Role");
        bodyNode.addChildNode(node);
    }
    if (input.Rules != null) {
        const nodes = serializeAws_restXmlReplicationRules(input.Rules, context);
        nodes.map((node) => {
            node = node.withName("Rule");
            bodyNode.addChildNode(node);
        });
    }
    return bodyNode;
};
const serializeAws_restXmlReplicationRule = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ReplicationRule");
    if (input.ID != null) {
        const node = xml_builder_1.XmlNode.of("ID", input.ID).withName("ID");
        bodyNode.addChildNode(node);
    }
    if (input.Priority != null) {
        const node = xml_builder_1.XmlNode.of("Priority", String(input.Priority)).withName("Priority");
        bodyNode.addChildNode(node);
    }
    if (input.Prefix != null) {
        const node = xml_builder_1.XmlNode.of("Prefix", input.Prefix).withName("Prefix");
        bodyNode.addChildNode(node);
    }
    if (input.Filter != null) {
        const node = serializeAws_restXmlReplicationRuleFilter(input.Filter, context).withName("Filter");
        bodyNode.addChildNode(node);
    }
    if (input.Status != null) {
        const node = xml_builder_1.XmlNode.of("ReplicationRuleStatus", input.Status).withName("Status");
        bodyNode.addChildNode(node);
    }
    if (input.SourceSelectionCriteria != null) {
        const node = serializeAws_restXmlSourceSelectionCriteria(input.SourceSelectionCriteria, context).withName("SourceSelectionCriteria");
        bodyNode.addChildNode(node);
    }
    if (input.ExistingObjectReplication != null) {
        const node = serializeAws_restXmlExistingObjectReplication(input.ExistingObjectReplication, context).withName("ExistingObjectReplication");
        bodyNode.addChildNode(node);
    }
    if (input.Destination != null) {
        const node = serializeAws_restXmlDestination(input.Destination, context).withName("Destination");
        bodyNode.addChildNode(node);
    }
    if (input.DeleteMarkerReplication != null) {
        const node = serializeAws_restXmlDeleteMarkerReplication(input.DeleteMarkerReplication, context).withName("DeleteMarkerReplication");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlReplicationRuleAndOperator = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ReplicationRuleAndOperator");
    if (input.Prefix != null) {
        const node = xml_builder_1.XmlNode.of("Prefix", input.Prefix).withName("Prefix");
        bodyNode.addChildNode(node);
    }
    if (input.Tags != null) {
        const nodes = serializeAws_restXmlTagSet(input.Tags, context);
        nodes.map((node) => {
            node = node.withName("Tag");
            bodyNode.addChildNode(node);
        });
    }
    return bodyNode;
};
const serializeAws_restXmlReplicationRuleFilter = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ReplicationRuleFilter");
    models_0_1.ReplicationRuleFilter.visit(input, {
        Prefix: (value) => {
            const node = xml_builder_1.XmlNode.of("Prefix", value).withName("Prefix");
            bodyNode.addChildNode(node);
        },
        Tag: (value) => {
            const node = serializeAws_restXmlTag(value, context).withName("Tag");
            bodyNode.addChildNode(node);
        },
        And: (value) => {
            const node = serializeAws_restXmlReplicationRuleAndOperator(value, context).withName("And");
            bodyNode.addChildNode(node);
        },
        _: (name, value) => {
            if (!(value instanceof xml_builder_1.XmlNode || value instanceof xml_builder_1.XmlText)) {
                throw new Error("Unable to serialize unknown union members in XML.");
            }
            bodyNode.addChildNode(new xml_builder_1.XmlNode(name).addChildNode(value));
        },
    });
    return bodyNode;
};
const serializeAws_restXmlReplicationRules = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = serializeAws_restXmlReplicationRule(entry, context);
        return node.withName("member");
    });
};
const serializeAws_restXmlReplicationTime = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ReplicationTime");
    if (input.Status != null) {
        const node = xml_builder_1.XmlNode.of("ReplicationTimeStatus", input.Status).withName("Status");
        bodyNode.addChildNode(node);
    }
    if (input.Time != null) {
        const node = serializeAws_restXmlReplicationTimeValue(input.Time, context).withName("Time");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlReplicationTimeValue = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ReplicationTimeValue");
    if (input.Minutes != null) {
        const node = xml_builder_1.XmlNode.of("Minutes", String(input.Minutes)).withName("Minutes");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlRequestPaymentConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("RequestPaymentConfiguration");
    if (input.Payer != null) {
        const node = xml_builder_1.XmlNode.of("Payer", input.Payer).withName("Payer");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlRequestProgress = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("RequestProgress");
    if (input.Enabled != null) {
        const node = xml_builder_1.XmlNode.of("EnableRequestProgress", String(input.Enabled)).withName("Enabled");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlRestoreRequest = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("RestoreRequest");
    if (input.Days != null) {
        const node = xml_builder_1.XmlNode.of("Days", String(input.Days)).withName("Days");
        bodyNode.addChildNode(node);
    }
    if (input.GlacierJobParameters != null) {
        const node = serializeAws_restXmlGlacierJobParameters(input.GlacierJobParameters, context).withName("GlacierJobParameters");
        bodyNode.addChildNode(node);
    }
    if (input.Type != null) {
        const node = xml_builder_1.XmlNode.of("RestoreRequestType", input.Type).withName("Type");
        bodyNode.addChildNode(node);
    }
    if (input.Tier != null) {
        const node = xml_builder_1.XmlNode.of("Tier", input.Tier).withName("Tier");
        bodyNode.addChildNode(node);
    }
    if (input.Description != null) {
        const node = xml_builder_1.XmlNode.of("Description", input.Description).withName("Description");
        bodyNode.addChildNode(node);
    }
    if (input.SelectParameters != null) {
        const node = serializeAws_restXmlSelectParameters(input.SelectParameters, context).withName("SelectParameters");
        bodyNode.addChildNode(node);
    }
    if (input.OutputLocation != null) {
        const node = serializeAws_restXmlOutputLocation(input.OutputLocation, context).withName("OutputLocation");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlRoutingRule = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("RoutingRule");
    if (input.Condition != null) {
        const node = serializeAws_restXmlCondition(input.Condition, context).withName("Condition");
        bodyNode.addChildNode(node);
    }
    if (input.Redirect != null) {
        const node = serializeAws_restXmlRedirect(input.Redirect, context).withName("Redirect");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlRoutingRules = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = serializeAws_restXmlRoutingRule(entry, context);
        return node.withName("RoutingRule");
    });
};
const serializeAws_restXmlS3KeyFilter = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3KeyFilter");
    if (input.FilterRules != null) {
        const nodes = serializeAws_restXmlFilterRuleList(input.FilterRules, context);
        nodes.map((node) => {
            node = node.withName("FilterRule");
            bodyNode.addChildNode(node);
        });
    }
    return bodyNode;
};
const serializeAws_restXmlS3Location = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("S3Location");
    if (input.BucketName != null) {
        const node = xml_builder_1.XmlNode.of("BucketName", input.BucketName).withName("BucketName");
        bodyNode.addChildNode(node);
    }
    if (input.Prefix != null) {
        const node = xml_builder_1.XmlNode.of("LocationPrefix", input.Prefix).withName("Prefix");
        bodyNode.addChildNode(node);
    }
    if (input.Encryption != null) {
        const node = serializeAws_restXmlEncryption(input.Encryption, context).withName("Encryption");
        bodyNode.addChildNode(node);
    }
    if (input.CannedACL != null) {
        const node = xml_builder_1.XmlNode.of("ObjectCannedACL", input.CannedACL).withName("CannedACL");
        bodyNode.addChildNode(node);
    }
    if (input.AccessControlList != null) {
        const nodes = serializeAws_restXmlGrants(input.AccessControlList, context);
        const containerNode = new xml_builder_1.XmlNode("AccessControlList");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.Tagging != null) {
        const node = serializeAws_restXmlTagging(input.Tagging, context).withName("Tagging");
        bodyNode.addChildNode(node);
    }
    if (input.UserMetadata != null) {
        const nodes = serializeAws_restXmlUserMetadata(input.UserMetadata, context);
        const containerNode = new xml_builder_1.XmlNode("UserMetadata");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    if (input.StorageClass != null) {
        const node = xml_builder_1.XmlNode.of("StorageClass", input.StorageClass).withName("StorageClass");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlScanRange = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ScanRange");
    if (input.Start != null) {
        const node = xml_builder_1.XmlNode.of("Start", String(input.Start)).withName("Start");
        bodyNode.addChildNode(node);
    }
    if (input.End != null) {
        const node = xml_builder_1.XmlNode.of("End", String(input.End)).withName("End");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlSelectParameters = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("SelectParameters");
    if (input.InputSerialization != null) {
        const node = serializeAws_restXmlInputSerialization(input.InputSerialization, context).withName("InputSerialization");
        bodyNode.addChildNode(node);
    }
    if (input.ExpressionType != null) {
        const node = xml_builder_1.XmlNode.of("ExpressionType", input.ExpressionType).withName("ExpressionType");
        bodyNode.addChildNode(node);
    }
    if (input.Expression != null) {
        const node = xml_builder_1.XmlNode.of("Expression", input.Expression).withName("Expression");
        bodyNode.addChildNode(node);
    }
    if (input.OutputSerialization != null) {
        const node = serializeAws_restXmlOutputSerialization(input.OutputSerialization, context).withName("OutputSerialization");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlServerSideEncryptionByDefault = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ServerSideEncryptionByDefault");
    if (input.SSEAlgorithm != null) {
        const node = xml_builder_1.XmlNode.of("ServerSideEncryption", input.SSEAlgorithm).withName("SSEAlgorithm");
        bodyNode.addChildNode(node);
    }
    if (input.KMSMasterKeyID != null) {
        const node = xml_builder_1.XmlNode.of("SSEKMSKeyId", input.KMSMasterKeyID).withName("KMSMasterKeyID");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlServerSideEncryptionConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ServerSideEncryptionConfiguration");
    if (input.Rules != null) {
        const nodes = serializeAws_restXmlServerSideEncryptionRules(input.Rules, context);
        nodes.map((node) => {
            node = node.withName("Rule");
            bodyNode.addChildNode(node);
        });
    }
    return bodyNode;
};
const serializeAws_restXmlServerSideEncryptionRule = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("ServerSideEncryptionRule");
    if (input.ApplyServerSideEncryptionByDefault != null) {
        const node = serializeAws_restXmlServerSideEncryptionByDefault(input.ApplyServerSideEncryptionByDefault, context).withName("ApplyServerSideEncryptionByDefault");
        bodyNode.addChildNode(node);
    }
    if (input.BucketKeyEnabled != null) {
        const node = xml_builder_1.XmlNode.of("BucketKeyEnabled", String(input.BucketKeyEnabled)).withName("BucketKeyEnabled");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlServerSideEncryptionRules = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = serializeAws_restXmlServerSideEncryptionRule(entry, context);
        return node.withName("member");
    });
};
const serializeAws_restXmlSourceSelectionCriteria = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("SourceSelectionCriteria");
    if (input.SseKmsEncryptedObjects != null) {
        const node = serializeAws_restXmlSseKmsEncryptedObjects(input.SseKmsEncryptedObjects, context).withName("SseKmsEncryptedObjects");
        bodyNode.addChildNode(node);
    }
    if (input.ReplicaModifications != null) {
        const node = serializeAws_restXmlReplicaModifications(input.ReplicaModifications, context).withName("ReplicaModifications");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlSSEKMS = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("SSE-KMS");
    if (input.KeyId != null) {
        const node = xml_builder_1.XmlNode.of("SSEKMSKeyId", input.KeyId).withName("KeyId");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlSseKmsEncryptedObjects = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("SseKmsEncryptedObjects");
    if (input.Status != null) {
        const node = xml_builder_1.XmlNode.of("SseKmsEncryptedObjectsStatus", input.Status).withName("Status");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlSSES3 = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("SSE-S3");
    return bodyNode;
};
const serializeAws_restXmlStorageClassAnalysis = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("StorageClassAnalysis");
    if (input.DataExport != null) {
        const node = serializeAws_restXmlStorageClassAnalysisDataExport(input.DataExport, context).withName("DataExport");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlStorageClassAnalysisDataExport = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("StorageClassAnalysisDataExport");
    if (input.OutputSchemaVersion != null) {
        const node = xml_builder_1.XmlNode
            .of("StorageClassAnalysisSchemaVersion", input.OutputSchemaVersion)
            .withName("OutputSchemaVersion");
        bodyNode.addChildNode(node);
    }
    if (input.Destination != null) {
        const node = serializeAws_restXmlAnalyticsExportDestination(input.Destination, context).withName("Destination");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlTag = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Tag");
    if (input.Key != null) {
        const node = xml_builder_1.XmlNode.of("ObjectKey", input.Key).withName("Key");
        bodyNode.addChildNode(node);
    }
    if (input.Value != null) {
        const node = xml_builder_1.XmlNode.of("Value", input.Value).withName("Value");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlTagging = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Tagging");
    if (input.TagSet != null) {
        const nodes = serializeAws_restXmlTagSet(input.TagSet, context);
        const containerNode = new xml_builder_1.XmlNode("TagSet");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const serializeAws_restXmlTagSet = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = serializeAws_restXmlTag(entry, context);
        return node.withName("Tag");
    });
};
const serializeAws_restXmlTargetGrant = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("TargetGrant");
    if (input.Grantee != null) {
        const node = serializeAws_restXmlGrantee(input.Grantee, context).withName("Grantee");
        node.addAttribute("xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        bodyNode.addChildNode(node);
    }
    if (input.Permission != null) {
        const node = xml_builder_1.XmlNode.of("BucketLogsPermission", input.Permission).withName("Permission");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlTargetGrants = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = serializeAws_restXmlTargetGrant(entry, context);
        return node.withName("Grant");
    });
};
const serializeAws_restXmlTiering = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Tiering");
    if (input.Days != null) {
        const node = xml_builder_1.XmlNode.of("IntelligentTieringDays", String(input.Days)).withName("Days");
        bodyNode.addChildNode(node);
    }
    if (input.AccessTier != null) {
        const node = xml_builder_1.XmlNode.of("IntelligentTieringAccessTier", input.AccessTier).withName("AccessTier");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlTieringList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = serializeAws_restXmlTiering(entry, context);
        return node.withName("member");
    });
};
const serializeAws_restXmlTopicConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("TopicConfiguration");
    if (input.Id != null) {
        const node = xml_builder_1.XmlNode.of("NotificationId", input.Id).withName("Id");
        bodyNode.addChildNode(node);
    }
    if (input.TopicArn != null) {
        const node = xml_builder_1.XmlNode.of("TopicArn", input.TopicArn).withName("Topic");
        bodyNode.addChildNode(node);
    }
    if (input.Events != null) {
        const nodes = serializeAws_restXmlEventList(input.Events, context);
        nodes.map((node) => {
            node = node.withName("Event");
            bodyNode.addChildNode(node);
        });
    }
    if (input.Filter != null) {
        const node = serializeAws_restXmlNotificationConfigurationFilter(input.Filter, context).withName("Filter");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlTopicConfigurationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = serializeAws_restXmlTopicConfiguration(entry, context);
        return node.withName("member");
    });
};
const serializeAws_restXmlTransition = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("Transition");
    if (input.Date != null) {
        const node = xml_builder_1.XmlNode.of("Date", (input.Date.toISOString().split(".")[0] + "Z").toString()).withName("Date");
        bodyNode.addChildNode(node);
    }
    if (input.Days != null) {
        const node = xml_builder_1.XmlNode.of("Days", String(input.Days)).withName("Days");
        bodyNode.addChildNode(node);
    }
    if (input.StorageClass != null) {
        const node = xml_builder_1.XmlNode.of("TransitionStorageClass", input.StorageClass).withName("StorageClass");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlTransitionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = serializeAws_restXmlTransition(entry, context);
        return node.withName("member");
    });
};
const serializeAws_restXmlUserMetadata = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        const node = serializeAws_restXmlMetadataEntry(entry, context);
        return node.withName("MetadataEntry");
    });
};
const serializeAws_restXmlVersioningConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("VersioningConfiguration");
    if (input.MFADelete != null) {
        const node = xml_builder_1.XmlNode.of("MFADelete", input.MFADelete).withName("MfaDelete");
        bodyNode.addChildNode(node);
    }
    if (input.Status != null) {
        const node = xml_builder_1.XmlNode.of("BucketVersioningStatus", input.Status).withName("Status");
        bodyNode.addChildNode(node);
    }
    return bodyNode;
};
const serializeAws_restXmlWebsiteConfiguration = (input, context) => {
    const bodyNode = new xml_builder_1.XmlNode("WebsiteConfiguration");
    if (input.ErrorDocument != null) {
        const node = serializeAws_restXmlErrorDocument(input.ErrorDocument, context).withName("ErrorDocument");
        bodyNode.addChildNode(node);
    }
    if (input.IndexDocument != null) {
        const node = serializeAws_restXmlIndexDocument(input.IndexDocument, context).withName("IndexDocument");
        bodyNode.addChildNode(node);
    }
    if (input.RedirectAllRequestsTo != null) {
        const node = serializeAws_restXmlRedirectAllRequestsTo(input.RedirectAllRequestsTo, context).withName("RedirectAllRequestsTo");
        bodyNode.addChildNode(node);
    }
    if (input.RoutingRules != null) {
        const nodes = serializeAws_restXmlRoutingRules(input.RoutingRules, context);
        const containerNode = new xml_builder_1.XmlNode("RoutingRules");
        nodes.map((node) => {
            containerNode.addChildNode(node);
        });
        bodyNode.addChildNode(containerNode);
    }
    return bodyNode;
};
const deserializeAws_restXmlAbortIncompleteMultipartUpload = (output, context) => {
    const contents = {
        DaysAfterInitiation: undefined,
    };
    if (output["DaysAfterInitiation"] !== undefined) {
        contents.DaysAfterInitiation = (0, smithy_client_1.strictParseInt32)(output["DaysAfterInitiation"]);
    }
    return contents;
};
const deserializeAws_restXmlAccessControlTranslation = (output, context) => {
    const contents = {
        Owner: undefined,
    };
    if (output["Owner"] !== undefined) {
        contents.Owner = (0, smithy_client_1.expectString)(output["Owner"]);
    }
    return contents;
};
const deserializeAws_restXmlAllowedHeaders = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const deserializeAws_restXmlAllowedMethods = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const deserializeAws_restXmlAllowedOrigins = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const deserializeAws_restXmlAnalyticsAndOperator = (output, context) => {
    const contents = {
        Prefix: undefined,
        Tags: undefined,
    };
    if (output["Prefix"] !== undefined) {
        contents.Prefix = (0, smithy_client_1.expectString)(output["Prefix"]);
    }
    if (output.Tag === "") {
        contents.Tags = [];
    }
    else if (output["Tag"] !== undefined) {
        contents.Tags = deserializeAws_restXmlTagSet((0, smithy_client_1.getArrayIfSingleItem)(output["Tag"]), context);
    }
    return contents;
};
const deserializeAws_restXmlAnalyticsConfiguration = (output, context) => {
    const contents = {
        Id: undefined,
        Filter: undefined,
        StorageClassAnalysis: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output.Filter === "") {
    }
    else if (output["Filter"] !== undefined) {
        contents.Filter = deserializeAws_restXmlAnalyticsFilter((0, smithy_client_1.expectUnion)(output["Filter"]), context);
    }
    if (output["StorageClassAnalysis"] !== undefined) {
        contents.StorageClassAnalysis = deserializeAws_restXmlStorageClassAnalysis(output["StorageClassAnalysis"], context);
    }
    return contents;
};
const deserializeAws_restXmlAnalyticsConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlAnalyticsConfiguration(entry, context);
    });
};
const deserializeAws_restXmlAnalyticsExportDestination = (output, context) => {
    const contents = {
        S3BucketDestination: undefined,
    };
    if (output["S3BucketDestination"] !== undefined) {
        contents.S3BucketDestination = deserializeAws_restXmlAnalyticsS3BucketDestination(output["S3BucketDestination"], context);
    }
    return contents;
};
const deserializeAws_restXmlAnalyticsFilter = (output, context) => {
    if (output["Prefix"] !== undefined) {
        return {
            Prefix: (0, smithy_client_1.expectString)(output["Prefix"]),
        };
    }
    if (output["Tag"] !== undefined) {
        return {
            Tag: deserializeAws_restXmlTag(output["Tag"], context),
        };
    }
    if (output["And"] !== undefined) {
        return {
            And: deserializeAws_restXmlAnalyticsAndOperator(output["And"], context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restXmlAnalyticsS3BucketDestination = (output, context) => {
    const contents = {
        Format: undefined,
        BucketAccountId: undefined,
        Bucket: undefined,
        Prefix: undefined,
    };
    if (output["Format"] !== undefined) {
        contents.Format = (0, smithy_client_1.expectString)(output["Format"]);
    }
    if (output["BucketAccountId"] !== undefined) {
        contents.BucketAccountId = (0, smithy_client_1.expectString)(output["BucketAccountId"]);
    }
    if (output["Bucket"] !== undefined) {
        contents.Bucket = (0, smithy_client_1.expectString)(output["Bucket"]);
    }
    if (output["Prefix"] !== undefined) {
        contents.Prefix = (0, smithy_client_1.expectString)(output["Prefix"]);
    }
    return contents;
};
const deserializeAws_restXmlBucket = (output, context) => {
    const contents = {
        Name: undefined,
        CreationDate: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(output["Name"]);
    }
    if (output["CreationDate"] !== undefined) {
        contents.CreationDate = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["CreationDate"]));
    }
    return contents;
};
const deserializeAws_restXmlBuckets = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlBucket(entry, context);
    });
};
const deserializeAws_restXmlChecksum = (output, context) => {
    const contents = {
        ChecksumCRC32: undefined,
        ChecksumCRC32C: undefined,
        ChecksumSHA1: undefined,
        ChecksumSHA256: undefined,
    };
    if (output["ChecksumCRC32"] !== undefined) {
        contents.ChecksumCRC32 = (0, smithy_client_1.expectString)(output["ChecksumCRC32"]);
    }
    if (output["ChecksumCRC32C"] !== undefined) {
        contents.ChecksumCRC32C = (0, smithy_client_1.expectString)(output["ChecksumCRC32C"]);
    }
    if (output["ChecksumSHA1"] !== undefined) {
        contents.ChecksumSHA1 = (0, smithy_client_1.expectString)(output["ChecksumSHA1"]);
    }
    if (output["ChecksumSHA256"] !== undefined) {
        contents.ChecksumSHA256 = (0, smithy_client_1.expectString)(output["ChecksumSHA256"]);
    }
    return contents;
};
const deserializeAws_restXmlChecksumAlgorithmList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const deserializeAws_restXmlCommonPrefix = (output, context) => {
    const contents = {
        Prefix: undefined,
    };
    if (output["Prefix"] !== undefined) {
        contents.Prefix = (0, smithy_client_1.expectString)(output["Prefix"]);
    }
    return contents;
};
const deserializeAws_restXmlCommonPrefixList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlCommonPrefix(entry, context);
    });
};
const deserializeAws_restXmlCondition = (output, context) => {
    const contents = {
        HttpErrorCodeReturnedEquals: undefined,
        KeyPrefixEquals: undefined,
    };
    if (output["HttpErrorCodeReturnedEquals"] !== undefined) {
        contents.HttpErrorCodeReturnedEquals = (0, smithy_client_1.expectString)(output["HttpErrorCodeReturnedEquals"]);
    }
    if (output["KeyPrefixEquals"] !== undefined) {
        contents.KeyPrefixEquals = (0, smithy_client_1.expectString)(output["KeyPrefixEquals"]);
    }
    return contents;
};
const deserializeAws_restXmlContinuationEvent = (output, context) => {
    const contents = {};
    return contents;
};
const deserializeAws_restXmlCopyObjectResult = (output, context) => {
    const contents = {
        ETag: undefined,
        LastModified: undefined,
        ChecksumCRC32: undefined,
        ChecksumCRC32C: undefined,
        ChecksumSHA1: undefined,
        ChecksumSHA256: undefined,
    };
    if (output["ETag"] !== undefined) {
        contents.ETag = (0, smithy_client_1.expectString)(output["ETag"]);
    }
    if (output["LastModified"] !== undefined) {
        contents.LastModified = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["LastModified"]));
    }
    if (output["ChecksumCRC32"] !== undefined) {
        contents.ChecksumCRC32 = (0, smithy_client_1.expectString)(output["ChecksumCRC32"]);
    }
    if (output["ChecksumCRC32C"] !== undefined) {
        contents.ChecksumCRC32C = (0, smithy_client_1.expectString)(output["ChecksumCRC32C"]);
    }
    if (output["ChecksumSHA1"] !== undefined) {
        contents.ChecksumSHA1 = (0, smithy_client_1.expectString)(output["ChecksumSHA1"]);
    }
    if (output["ChecksumSHA256"] !== undefined) {
        contents.ChecksumSHA256 = (0, smithy_client_1.expectString)(output["ChecksumSHA256"]);
    }
    return contents;
};
const deserializeAws_restXmlCopyPartResult = (output, context) => {
    const contents = {
        ETag: undefined,
        LastModified: undefined,
        ChecksumCRC32: undefined,
        ChecksumCRC32C: undefined,
        ChecksumSHA1: undefined,
        ChecksumSHA256: undefined,
    };
    if (output["ETag"] !== undefined) {
        contents.ETag = (0, smithy_client_1.expectString)(output["ETag"]);
    }
    if (output["LastModified"] !== undefined) {
        contents.LastModified = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["LastModified"]));
    }
    if (output["ChecksumCRC32"] !== undefined) {
        contents.ChecksumCRC32 = (0, smithy_client_1.expectString)(output["ChecksumCRC32"]);
    }
    if (output["ChecksumCRC32C"] !== undefined) {
        contents.ChecksumCRC32C = (0, smithy_client_1.expectString)(output["ChecksumCRC32C"]);
    }
    if (output["ChecksumSHA1"] !== undefined) {
        contents.ChecksumSHA1 = (0, smithy_client_1.expectString)(output["ChecksumSHA1"]);
    }
    if (output["ChecksumSHA256"] !== undefined) {
        contents.ChecksumSHA256 = (0, smithy_client_1.expectString)(output["ChecksumSHA256"]);
    }
    return contents;
};
const deserializeAws_restXmlCORSRule = (output, context) => {
    const contents = {
        ID: undefined,
        AllowedHeaders: undefined,
        AllowedMethods: undefined,
        AllowedOrigins: undefined,
        ExposeHeaders: undefined,
        MaxAgeSeconds: undefined,
    };
    if (output["ID"] !== undefined) {
        contents.ID = (0, smithy_client_1.expectString)(output["ID"]);
    }
    if (output.AllowedHeader === "") {
        contents.AllowedHeaders = [];
    }
    else if (output["AllowedHeader"] !== undefined) {
        contents.AllowedHeaders = deserializeAws_restXmlAllowedHeaders((0, smithy_client_1.getArrayIfSingleItem)(output["AllowedHeader"]), context);
    }
    if (output.AllowedMethod === "") {
        contents.AllowedMethods = [];
    }
    else if (output["AllowedMethod"] !== undefined) {
        contents.AllowedMethods = deserializeAws_restXmlAllowedMethods((0, smithy_client_1.getArrayIfSingleItem)(output["AllowedMethod"]), context);
    }
    if (output.AllowedOrigin === "") {
        contents.AllowedOrigins = [];
    }
    else if (output["AllowedOrigin"] !== undefined) {
        contents.AllowedOrigins = deserializeAws_restXmlAllowedOrigins((0, smithy_client_1.getArrayIfSingleItem)(output["AllowedOrigin"]), context);
    }
    if (output.ExposeHeader === "") {
        contents.ExposeHeaders = [];
    }
    else if (output["ExposeHeader"] !== undefined) {
        contents.ExposeHeaders = deserializeAws_restXmlExposeHeaders((0, smithy_client_1.getArrayIfSingleItem)(output["ExposeHeader"]), context);
    }
    if (output["MaxAgeSeconds"] !== undefined) {
        contents.MaxAgeSeconds = (0, smithy_client_1.strictParseInt32)(output["MaxAgeSeconds"]);
    }
    return contents;
};
const deserializeAws_restXmlCORSRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlCORSRule(entry, context);
    });
};
const deserializeAws_restXmlDefaultRetention = (output, context) => {
    const contents = {
        Mode: undefined,
        Days: undefined,
        Years: undefined,
    };
    if (output["Mode"] !== undefined) {
        contents.Mode = (0, smithy_client_1.expectString)(output["Mode"]);
    }
    if (output["Days"] !== undefined) {
        contents.Days = (0, smithy_client_1.strictParseInt32)(output["Days"]);
    }
    if (output["Years"] !== undefined) {
        contents.Years = (0, smithy_client_1.strictParseInt32)(output["Years"]);
    }
    return contents;
};
const deserializeAws_restXmlDeletedObject = (output, context) => {
    const contents = {
        Key: undefined,
        VersionId: undefined,
        DeleteMarker: undefined,
        DeleteMarkerVersionId: undefined,
    };
    if (output["Key"] !== undefined) {
        contents.Key = (0, smithy_client_1.expectString)(output["Key"]);
    }
    if (output["VersionId"] !== undefined) {
        contents.VersionId = (0, smithy_client_1.expectString)(output["VersionId"]);
    }
    if (output["DeleteMarker"] !== undefined) {
        contents.DeleteMarker = (0, smithy_client_1.parseBoolean)(output["DeleteMarker"]);
    }
    if (output["DeleteMarkerVersionId"] !== undefined) {
        contents.DeleteMarkerVersionId = (0, smithy_client_1.expectString)(output["DeleteMarkerVersionId"]);
    }
    return contents;
};
const deserializeAws_restXmlDeletedObjects = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlDeletedObject(entry, context);
    });
};
const deserializeAws_restXmlDeleteMarkerEntry = (output, context) => {
    const contents = {
        Owner: undefined,
        Key: undefined,
        VersionId: undefined,
        IsLatest: undefined,
        LastModified: undefined,
    };
    if (output["Owner"] !== undefined) {
        contents.Owner = deserializeAws_restXmlOwner(output["Owner"], context);
    }
    if (output["Key"] !== undefined) {
        contents.Key = (0, smithy_client_1.expectString)(output["Key"]);
    }
    if (output["VersionId"] !== undefined) {
        contents.VersionId = (0, smithy_client_1.expectString)(output["VersionId"]);
    }
    if (output["IsLatest"] !== undefined) {
        contents.IsLatest = (0, smithy_client_1.parseBoolean)(output["IsLatest"]);
    }
    if (output["LastModified"] !== undefined) {
        contents.LastModified = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["LastModified"]));
    }
    return contents;
};
const deserializeAws_restXmlDeleteMarkerReplication = (output, context) => {
    const contents = {
        Status: undefined,
    };
    if (output["Status"] !== undefined) {
        contents.Status = (0, smithy_client_1.expectString)(output["Status"]);
    }
    return contents;
};
const deserializeAws_restXmlDeleteMarkers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlDeleteMarkerEntry(entry, context);
    });
};
const deserializeAws_restXmlDestination = (output, context) => {
    const contents = {
        Bucket: undefined,
        Account: undefined,
        StorageClass: undefined,
        AccessControlTranslation: undefined,
        EncryptionConfiguration: undefined,
        ReplicationTime: undefined,
        Metrics: undefined,
    };
    if (output["Bucket"] !== undefined) {
        contents.Bucket = (0, smithy_client_1.expectString)(output["Bucket"]);
    }
    if (output["Account"] !== undefined) {
        contents.Account = (0, smithy_client_1.expectString)(output["Account"]);
    }
    if (output["StorageClass"] !== undefined) {
        contents.StorageClass = (0, smithy_client_1.expectString)(output["StorageClass"]);
    }
    if (output["AccessControlTranslation"] !== undefined) {
        contents.AccessControlTranslation = deserializeAws_restXmlAccessControlTranslation(output["AccessControlTranslation"], context);
    }
    if (output["EncryptionConfiguration"] !== undefined) {
        contents.EncryptionConfiguration = deserializeAws_restXmlEncryptionConfiguration(output["EncryptionConfiguration"], context);
    }
    if (output["ReplicationTime"] !== undefined) {
        contents.ReplicationTime = deserializeAws_restXmlReplicationTime(output["ReplicationTime"], context);
    }
    if (output["Metrics"] !== undefined) {
        contents.Metrics = deserializeAws_restXmlMetrics(output["Metrics"], context);
    }
    return contents;
};
const deserializeAws_restXmlEncryptionConfiguration = (output, context) => {
    const contents = {
        ReplicaKmsKeyID: undefined,
    };
    if (output["ReplicaKmsKeyID"] !== undefined) {
        contents.ReplicaKmsKeyID = (0, smithy_client_1.expectString)(output["ReplicaKmsKeyID"]);
    }
    return contents;
};
const deserializeAws_restXmlEndEvent = (output, context) => {
    const contents = {};
    return contents;
};
const deserializeAws_restXml_Error = (output, context) => {
    const contents = {
        Key: undefined,
        VersionId: undefined,
        Code: undefined,
        Message: undefined,
    };
    if (output["Key"] !== undefined) {
        contents.Key = (0, smithy_client_1.expectString)(output["Key"]);
    }
    if (output["VersionId"] !== undefined) {
        contents.VersionId = (0, smithy_client_1.expectString)(output["VersionId"]);
    }
    if (output["Code"] !== undefined) {
        contents.Code = (0, smithy_client_1.expectString)(output["Code"]);
    }
    if (output["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(output["Message"]);
    }
    return contents;
};
const deserializeAws_restXmlErrorDocument = (output, context) => {
    const contents = {
        Key: undefined,
    };
    if (output["Key"] !== undefined) {
        contents.Key = (0, smithy_client_1.expectString)(output["Key"]);
    }
    return contents;
};
const deserializeAws_restXmlErrors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXml_Error(entry, context);
    });
};
const deserializeAws_restXmlEventBridgeConfiguration = (output, context) => {
    const contents = {};
    return contents;
};
const deserializeAws_restXmlEventList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const deserializeAws_restXmlExistingObjectReplication = (output, context) => {
    const contents = {
        Status: undefined,
    };
    if (output["Status"] !== undefined) {
        contents.Status = (0, smithy_client_1.expectString)(output["Status"]);
    }
    return contents;
};
const deserializeAws_restXmlExposeHeaders = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const deserializeAws_restXmlFilterRule = (output, context) => {
    const contents = {
        Name: undefined,
        Value: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(output["Name"]);
    }
    if (output["Value"] !== undefined) {
        contents.Value = (0, smithy_client_1.expectString)(output["Value"]);
    }
    return contents;
};
const deserializeAws_restXmlFilterRuleList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlFilterRule(entry, context);
    });
};
const deserializeAws_restXmlGetObjectAttributesParts = (output, context) => {
    const contents = {
        TotalPartsCount: undefined,
        PartNumberMarker: undefined,
        NextPartNumberMarker: undefined,
        MaxParts: undefined,
        IsTruncated: undefined,
        Parts: undefined,
    };
    if (output["PartsCount"] !== undefined) {
        contents.TotalPartsCount = (0, smithy_client_1.strictParseInt32)(output["PartsCount"]);
    }
    if (output["PartNumberMarker"] !== undefined) {
        contents.PartNumberMarker = (0, smithy_client_1.expectString)(output["PartNumberMarker"]);
    }
    if (output["NextPartNumberMarker"] !== undefined) {
        contents.NextPartNumberMarker = (0, smithy_client_1.expectString)(output["NextPartNumberMarker"]);
    }
    if (output["MaxParts"] !== undefined) {
        contents.MaxParts = (0, smithy_client_1.strictParseInt32)(output["MaxParts"]);
    }
    if (output["IsTruncated"] !== undefined) {
        contents.IsTruncated = (0, smithy_client_1.parseBoolean)(output["IsTruncated"]);
    }
    if (output.Part === "") {
        contents.Parts = [];
    }
    else if (output["Part"] !== undefined) {
        contents.Parts = deserializeAws_restXmlPartsList((0, smithy_client_1.getArrayIfSingleItem)(output["Part"]), context);
    }
    return contents;
};
const deserializeAws_restXmlGrant = (output, context) => {
    const contents = {
        Grantee: undefined,
        Permission: undefined,
    };
    if (output["Grantee"] !== undefined) {
        contents.Grantee = deserializeAws_restXmlGrantee(output["Grantee"], context);
    }
    if (output["Permission"] !== undefined) {
        contents.Permission = (0, smithy_client_1.expectString)(output["Permission"]);
    }
    return contents;
};
const deserializeAws_restXmlGrantee = (output, context) => {
    const contents = {
        DisplayName: undefined,
        EmailAddress: undefined,
        ID: undefined,
        URI: undefined,
        Type: undefined,
    };
    if (output["DisplayName"] !== undefined) {
        contents.DisplayName = (0, smithy_client_1.expectString)(output["DisplayName"]);
    }
    if (output["EmailAddress"] !== undefined) {
        contents.EmailAddress = (0, smithy_client_1.expectString)(output["EmailAddress"]);
    }
    if (output["ID"] !== undefined) {
        contents.ID = (0, smithy_client_1.expectString)(output["ID"]);
    }
    if (output["URI"] !== undefined) {
        contents.URI = (0, smithy_client_1.expectString)(output["URI"]);
    }
    if (output["xsi:type"] !== undefined) {
        contents.Type = (0, smithy_client_1.expectString)(output["xsi:type"]);
    }
    return contents;
};
const deserializeAws_restXmlGrants = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlGrant(entry, context);
    });
};
const deserializeAws_restXmlIndexDocument = (output, context) => {
    const contents = {
        Suffix: undefined,
    };
    if (output["Suffix"] !== undefined) {
        contents.Suffix = (0, smithy_client_1.expectString)(output["Suffix"]);
    }
    return contents;
};
const deserializeAws_restXmlInitiator = (output, context) => {
    const contents = {
        ID: undefined,
        DisplayName: undefined,
    };
    if (output["ID"] !== undefined) {
        contents.ID = (0, smithy_client_1.expectString)(output["ID"]);
    }
    if (output["DisplayName"] !== undefined) {
        contents.DisplayName = (0, smithy_client_1.expectString)(output["DisplayName"]);
    }
    return contents;
};
const deserializeAws_restXmlIntelligentTieringAndOperator = (output, context) => {
    const contents = {
        Prefix: undefined,
        Tags: undefined,
    };
    if (output["Prefix"] !== undefined) {
        contents.Prefix = (0, smithy_client_1.expectString)(output["Prefix"]);
    }
    if (output.Tag === "") {
        contents.Tags = [];
    }
    else if (output["Tag"] !== undefined) {
        contents.Tags = deserializeAws_restXmlTagSet((0, smithy_client_1.getArrayIfSingleItem)(output["Tag"]), context);
    }
    return contents;
};
const deserializeAws_restXmlIntelligentTieringConfiguration = (output, context) => {
    const contents = {
        Id: undefined,
        Filter: undefined,
        Status: undefined,
        Tierings: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["Filter"] !== undefined) {
        contents.Filter = deserializeAws_restXmlIntelligentTieringFilter(output["Filter"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = (0, smithy_client_1.expectString)(output["Status"]);
    }
    if (output.Tiering === "") {
        contents.Tierings = [];
    }
    else if (output["Tiering"] !== undefined) {
        contents.Tierings = deserializeAws_restXmlTieringList((0, smithy_client_1.getArrayIfSingleItem)(output["Tiering"]), context);
    }
    return contents;
};
const deserializeAws_restXmlIntelligentTieringConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlIntelligentTieringConfiguration(entry, context);
    });
};
const deserializeAws_restXmlIntelligentTieringFilter = (output, context) => {
    const contents = {
        Prefix: undefined,
        Tag: undefined,
        And: undefined,
    };
    if (output["Prefix"] !== undefined) {
        contents.Prefix = (0, smithy_client_1.expectString)(output["Prefix"]);
    }
    if (output["Tag"] !== undefined) {
        contents.Tag = deserializeAws_restXmlTag(output["Tag"], context);
    }
    if (output["And"] !== undefined) {
        contents.And = deserializeAws_restXmlIntelligentTieringAndOperator(output["And"], context);
    }
    return contents;
};
const deserializeAws_restXmlInventoryConfiguration = (output, context) => {
    const contents = {
        Destination: undefined,
        IsEnabled: undefined,
        Filter: undefined,
        Id: undefined,
        IncludedObjectVersions: undefined,
        OptionalFields: undefined,
        Schedule: undefined,
    };
    if (output["Destination"] !== undefined) {
        contents.Destination = deserializeAws_restXmlInventoryDestination(output["Destination"], context);
    }
    if (output["IsEnabled"] !== undefined) {
        contents.IsEnabled = (0, smithy_client_1.parseBoolean)(output["IsEnabled"]);
    }
    if (output["Filter"] !== undefined) {
        contents.Filter = deserializeAws_restXmlInventoryFilter(output["Filter"], context);
    }
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["IncludedObjectVersions"] !== undefined) {
        contents.IncludedObjectVersions = (0, smithy_client_1.expectString)(output["IncludedObjectVersions"]);
    }
    if (output.OptionalFields === "") {
        contents.OptionalFields = [];
    }
    else if (output["OptionalFields"] !== undefined && output["OptionalFields"]["Field"] !== undefined) {
        contents.OptionalFields = deserializeAws_restXmlInventoryOptionalFields((0, smithy_client_1.getArrayIfSingleItem)(output["OptionalFields"]["Field"]), context);
    }
    if (output["Schedule"] !== undefined) {
        contents.Schedule = deserializeAws_restXmlInventorySchedule(output["Schedule"], context);
    }
    return contents;
};
const deserializeAws_restXmlInventoryConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlInventoryConfiguration(entry, context);
    });
};
const deserializeAws_restXmlInventoryDestination = (output, context) => {
    const contents = {
        S3BucketDestination: undefined,
    };
    if (output["S3BucketDestination"] !== undefined) {
        contents.S3BucketDestination = deserializeAws_restXmlInventoryS3BucketDestination(output["S3BucketDestination"], context);
    }
    return contents;
};
const deserializeAws_restXmlInventoryEncryption = (output, context) => {
    const contents = {
        SSES3: undefined,
        SSEKMS: undefined,
    };
    if (output["SSE-S3"] !== undefined) {
        contents.SSES3 = deserializeAws_restXmlSSES3(output["SSE-S3"], context);
    }
    if (output["SSE-KMS"] !== undefined) {
        contents.SSEKMS = deserializeAws_restXmlSSEKMS(output["SSE-KMS"], context);
    }
    return contents;
};
const deserializeAws_restXmlInventoryFilter = (output, context) => {
    const contents = {
        Prefix: undefined,
    };
    if (output["Prefix"] !== undefined) {
        contents.Prefix = (0, smithy_client_1.expectString)(output["Prefix"]);
    }
    return contents;
};
const deserializeAws_restXmlInventoryOptionalFields = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const deserializeAws_restXmlInventoryS3BucketDestination = (output, context) => {
    const contents = {
        AccountId: undefined,
        Bucket: undefined,
        Format: undefined,
        Prefix: undefined,
        Encryption: undefined,
    };
    if (output["AccountId"] !== undefined) {
        contents.AccountId = (0, smithy_client_1.expectString)(output["AccountId"]);
    }
    if (output["Bucket"] !== undefined) {
        contents.Bucket = (0, smithy_client_1.expectString)(output["Bucket"]);
    }
    if (output["Format"] !== undefined) {
        contents.Format = (0, smithy_client_1.expectString)(output["Format"]);
    }
    if (output["Prefix"] !== undefined) {
        contents.Prefix = (0, smithy_client_1.expectString)(output["Prefix"]);
    }
    if (output["Encryption"] !== undefined) {
        contents.Encryption = deserializeAws_restXmlInventoryEncryption(output["Encryption"], context);
    }
    return contents;
};
const deserializeAws_restXmlInventorySchedule = (output, context) => {
    const contents = {
        Frequency: undefined,
    };
    if (output["Frequency"] !== undefined) {
        contents.Frequency = (0, smithy_client_1.expectString)(output["Frequency"]);
    }
    return contents;
};
const deserializeAws_restXmlLambdaFunctionConfiguration = (output, context) => {
    const contents = {
        Id: undefined,
        LambdaFunctionArn: undefined,
        Events: undefined,
        Filter: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["CloudFunction"] !== undefined) {
        contents.LambdaFunctionArn = (0, smithy_client_1.expectString)(output["CloudFunction"]);
    }
    if (output.Event === "") {
        contents.Events = [];
    }
    else if (output["Event"] !== undefined) {
        contents.Events = deserializeAws_restXmlEventList((0, smithy_client_1.getArrayIfSingleItem)(output["Event"]), context);
    }
    if (output["Filter"] !== undefined) {
        contents.Filter = deserializeAws_restXmlNotificationConfigurationFilter(output["Filter"], context);
    }
    return contents;
};
const deserializeAws_restXmlLambdaFunctionConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlLambdaFunctionConfiguration(entry, context);
    });
};
const deserializeAws_restXmlLifecycleExpiration = (output, context) => {
    const contents = {
        Date: undefined,
        Days: undefined,
        ExpiredObjectDeleteMarker: undefined,
    };
    if (output["Date"] !== undefined) {
        contents.Date = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["Date"]));
    }
    if (output["Days"] !== undefined) {
        contents.Days = (0, smithy_client_1.strictParseInt32)(output["Days"]);
    }
    if (output["ExpiredObjectDeleteMarker"] !== undefined) {
        contents.ExpiredObjectDeleteMarker = (0, smithy_client_1.parseBoolean)(output["ExpiredObjectDeleteMarker"]);
    }
    return contents;
};
const deserializeAws_restXmlLifecycleRule = (output, context) => {
    const contents = {
        Expiration: undefined,
        ID: undefined,
        Prefix: undefined,
        Filter: undefined,
        Status: undefined,
        Transitions: undefined,
        NoncurrentVersionTransitions: undefined,
        NoncurrentVersionExpiration: undefined,
        AbortIncompleteMultipartUpload: undefined,
    };
    if (output["Expiration"] !== undefined) {
        contents.Expiration = deserializeAws_restXmlLifecycleExpiration(output["Expiration"], context);
    }
    if (output["ID"] !== undefined) {
        contents.ID = (0, smithy_client_1.expectString)(output["ID"]);
    }
    if (output["Prefix"] !== undefined) {
        contents.Prefix = (0, smithy_client_1.expectString)(output["Prefix"]);
    }
    if (output.Filter === "") {
    }
    else if (output["Filter"] !== undefined) {
        contents.Filter = deserializeAws_restXmlLifecycleRuleFilter((0, smithy_client_1.expectUnion)(output["Filter"]), context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = (0, smithy_client_1.expectString)(output["Status"]);
    }
    if (output.Transition === "") {
        contents.Transitions = [];
    }
    else if (output["Transition"] !== undefined) {
        contents.Transitions = deserializeAws_restXmlTransitionList((0, smithy_client_1.getArrayIfSingleItem)(output["Transition"]), context);
    }
    if (output.NoncurrentVersionTransition === "") {
        contents.NoncurrentVersionTransitions = [];
    }
    else if (output["NoncurrentVersionTransition"] !== undefined) {
        contents.NoncurrentVersionTransitions = deserializeAws_restXmlNoncurrentVersionTransitionList((0, smithy_client_1.getArrayIfSingleItem)(output["NoncurrentVersionTransition"]), context);
    }
    if (output["NoncurrentVersionExpiration"] !== undefined) {
        contents.NoncurrentVersionExpiration = deserializeAws_restXmlNoncurrentVersionExpiration(output["NoncurrentVersionExpiration"], context);
    }
    if (output["AbortIncompleteMultipartUpload"] !== undefined) {
        contents.AbortIncompleteMultipartUpload = deserializeAws_restXmlAbortIncompleteMultipartUpload(output["AbortIncompleteMultipartUpload"], context);
    }
    return contents;
};
const deserializeAws_restXmlLifecycleRuleAndOperator = (output, context) => {
    const contents = {
        Prefix: undefined,
        Tags: undefined,
        ObjectSizeGreaterThan: undefined,
        ObjectSizeLessThan: undefined,
    };
    if (output["Prefix"] !== undefined) {
        contents.Prefix = (0, smithy_client_1.expectString)(output["Prefix"]);
    }
    if (output.Tag === "") {
        contents.Tags = [];
    }
    else if (output["Tag"] !== undefined) {
        contents.Tags = deserializeAws_restXmlTagSet((0, smithy_client_1.getArrayIfSingleItem)(output["Tag"]), context);
    }
    if (output["ObjectSizeGreaterThan"] !== undefined) {
        contents.ObjectSizeGreaterThan = (0, smithy_client_1.strictParseLong)(output["ObjectSizeGreaterThan"]);
    }
    if (output["ObjectSizeLessThan"] !== undefined) {
        contents.ObjectSizeLessThan = (0, smithy_client_1.strictParseLong)(output["ObjectSizeLessThan"]);
    }
    return contents;
};
const deserializeAws_restXmlLifecycleRuleFilter = (output, context) => {
    if (output["Prefix"] !== undefined) {
        return {
            Prefix: (0, smithy_client_1.expectString)(output["Prefix"]),
        };
    }
    if (output["Tag"] !== undefined) {
        return {
            Tag: deserializeAws_restXmlTag(output["Tag"], context),
        };
    }
    if (output["ObjectSizeGreaterThan"] !== undefined) {
        return {
            ObjectSizeGreaterThan: (0, smithy_client_1.strictParseLong)(output["ObjectSizeGreaterThan"]),
        };
    }
    if (output["ObjectSizeLessThan"] !== undefined) {
        return {
            ObjectSizeLessThan: (0, smithy_client_1.strictParseLong)(output["ObjectSizeLessThan"]),
        };
    }
    if (output["And"] !== undefined) {
        return {
            And: deserializeAws_restXmlLifecycleRuleAndOperator(output["And"], context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restXmlLifecycleRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlLifecycleRule(entry, context);
    });
};
const deserializeAws_restXmlLoggingEnabled = (output, context) => {
    const contents = {
        TargetBucket: undefined,
        TargetGrants: undefined,
        TargetPrefix: undefined,
    };
    if (output["TargetBucket"] !== undefined) {
        contents.TargetBucket = (0, smithy_client_1.expectString)(output["TargetBucket"]);
    }
    if (output.TargetGrants === "") {
        contents.TargetGrants = [];
    }
    else if (output["TargetGrants"] !== undefined && output["TargetGrants"]["Grant"] !== undefined) {
        contents.TargetGrants = deserializeAws_restXmlTargetGrants((0, smithy_client_1.getArrayIfSingleItem)(output["TargetGrants"]["Grant"]), context);
    }
    if (output["TargetPrefix"] !== undefined) {
        contents.TargetPrefix = (0, smithy_client_1.expectString)(output["TargetPrefix"]);
    }
    return contents;
};
const deserializeAws_restXmlMetrics = (output, context) => {
    const contents = {
        Status: undefined,
        EventThreshold: undefined,
    };
    if (output["Status"] !== undefined) {
        contents.Status = (0, smithy_client_1.expectString)(output["Status"]);
    }
    if (output["EventThreshold"] !== undefined) {
        contents.EventThreshold = deserializeAws_restXmlReplicationTimeValue(output["EventThreshold"], context);
    }
    return contents;
};
const deserializeAws_restXmlMetricsAndOperator = (output, context) => {
    const contents = {
        Prefix: undefined,
        Tags: undefined,
        AccessPointArn: undefined,
    };
    if (output["Prefix"] !== undefined) {
        contents.Prefix = (0, smithy_client_1.expectString)(output["Prefix"]);
    }
    if (output.Tag === "") {
        contents.Tags = [];
    }
    else if (output["Tag"] !== undefined) {
        contents.Tags = deserializeAws_restXmlTagSet((0, smithy_client_1.getArrayIfSingleItem)(output["Tag"]), context);
    }
    if (output["AccessPointArn"] !== undefined) {
        contents.AccessPointArn = (0, smithy_client_1.expectString)(output["AccessPointArn"]);
    }
    return contents;
};
const deserializeAws_restXmlMetricsConfiguration = (output, context) => {
    const contents = {
        Id: undefined,
        Filter: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output.Filter === "") {
    }
    else if (output["Filter"] !== undefined) {
        contents.Filter = deserializeAws_restXmlMetricsFilter((0, smithy_client_1.expectUnion)(output["Filter"]), context);
    }
    return contents;
};
const deserializeAws_restXmlMetricsConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlMetricsConfiguration(entry, context);
    });
};
const deserializeAws_restXmlMetricsFilter = (output, context) => {
    if (output["Prefix"] !== undefined) {
        return {
            Prefix: (0, smithy_client_1.expectString)(output["Prefix"]),
        };
    }
    if (output["Tag"] !== undefined) {
        return {
            Tag: deserializeAws_restXmlTag(output["Tag"], context),
        };
    }
    if (output["AccessPointArn"] !== undefined) {
        return {
            AccessPointArn: (0, smithy_client_1.expectString)(output["AccessPointArn"]),
        };
    }
    if (output["And"] !== undefined) {
        return {
            And: deserializeAws_restXmlMetricsAndOperator(output["And"], context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restXmlMultipartUpload = (output, context) => {
    const contents = {
        UploadId: undefined,
        Key: undefined,
        Initiated: undefined,
        StorageClass: undefined,
        Owner: undefined,
        Initiator: undefined,
        ChecksumAlgorithm: undefined,
    };
    if (output["UploadId"] !== undefined) {
        contents.UploadId = (0, smithy_client_1.expectString)(output["UploadId"]);
    }
    if (output["Key"] !== undefined) {
        contents.Key = (0, smithy_client_1.expectString)(output["Key"]);
    }
    if (output["Initiated"] !== undefined) {
        contents.Initiated = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["Initiated"]));
    }
    if (output["StorageClass"] !== undefined) {
        contents.StorageClass = (0, smithy_client_1.expectString)(output["StorageClass"]);
    }
    if (output["Owner"] !== undefined) {
        contents.Owner = deserializeAws_restXmlOwner(output["Owner"], context);
    }
    if (output["Initiator"] !== undefined) {
        contents.Initiator = deserializeAws_restXmlInitiator(output["Initiator"], context);
    }
    if (output["ChecksumAlgorithm"] !== undefined) {
        contents.ChecksumAlgorithm = (0, smithy_client_1.expectString)(output["ChecksumAlgorithm"]);
    }
    return contents;
};
const deserializeAws_restXmlMultipartUploadList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlMultipartUpload(entry, context);
    });
};
const deserializeAws_restXmlNoncurrentVersionExpiration = (output, context) => {
    const contents = {
        NoncurrentDays: undefined,
        NewerNoncurrentVersions: undefined,
    };
    if (output["NoncurrentDays"] !== undefined) {
        contents.NoncurrentDays = (0, smithy_client_1.strictParseInt32)(output["NoncurrentDays"]);
    }
    if (output["NewerNoncurrentVersions"] !== undefined) {
        contents.NewerNoncurrentVersions = (0, smithy_client_1.strictParseInt32)(output["NewerNoncurrentVersions"]);
    }
    return contents;
};
const deserializeAws_restXmlNoncurrentVersionTransition = (output, context) => {
    const contents = {
        NoncurrentDays: undefined,
        StorageClass: undefined,
        NewerNoncurrentVersions: undefined,
    };
    if (output["NoncurrentDays"] !== undefined) {
        contents.NoncurrentDays = (0, smithy_client_1.strictParseInt32)(output["NoncurrentDays"]);
    }
    if (output["StorageClass"] !== undefined) {
        contents.StorageClass = (0, smithy_client_1.expectString)(output["StorageClass"]);
    }
    if (output["NewerNoncurrentVersions"] !== undefined) {
        contents.NewerNoncurrentVersions = (0, smithy_client_1.strictParseInt32)(output["NewerNoncurrentVersions"]);
    }
    return contents;
};
const deserializeAws_restXmlNoncurrentVersionTransitionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlNoncurrentVersionTransition(entry, context);
    });
};
const deserializeAws_restXmlNotificationConfigurationFilter = (output, context) => {
    const contents = {
        Key: undefined,
    };
    if (output["S3Key"] !== undefined) {
        contents.Key = deserializeAws_restXmlS3KeyFilter(output["S3Key"], context);
    }
    return contents;
};
const deserializeAws_restXml_Object = (output, context) => {
    const contents = {
        Key: undefined,
        LastModified: undefined,
        ETag: undefined,
        ChecksumAlgorithm: undefined,
        Size: undefined,
        StorageClass: undefined,
        Owner: undefined,
    };
    if (output["Key"] !== undefined) {
        contents.Key = (0, smithy_client_1.expectString)(output["Key"]);
    }
    if (output["LastModified"] !== undefined) {
        contents.LastModified = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["LastModified"]));
    }
    if (output["ETag"] !== undefined) {
        contents.ETag = (0, smithy_client_1.expectString)(output["ETag"]);
    }
    if (output.ChecksumAlgorithm === "") {
        contents.ChecksumAlgorithm = [];
    }
    else if (output["ChecksumAlgorithm"] !== undefined) {
        contents.ChecksumAlgorithm = deserializeAws_restXmlChecksumAlgorithmList((0, smithy_client_1.getArrayIfSingleItem)(output["ChecksumAlgorithm"]), context);
    }
    if (output["Size"] !== undefined) {
        contents.Size = (0, smithy_client_1.strictParseLong)(output["Size"]);
    }
    if (output["StorageClass"] !== undefined) {
        contents.StorageClass = (0, smithy_client_1.expectString)(output["StorageClass"]);
    }
    if (output["Owner"] !== undefined) {
        contents.Owner = deserializeAws_restXmlOwner(output["Owner"], context);
    }
    return contents;
};
const deserializeAws_restXmlObjectList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXml_Object(entry, context);
    });
};
const deserializeAws_restXmlObjectLockConfiguration = (output, context) => {
    const contents = {
        ObjectLockEnabled: undefined,
        Rule: undefined,
    };
    if (output["ObjectLockEnabled"] !== undefined) {
        contents.ObjectLockEnabled = (0, smithy_client_1.expectString)(output["ObjectLockEnabled"]);
    }
    if (output["Rule"] !== undefined) {
        contents.Rule = deserializeAws_restXmlObjectLockRule(output["Rule"], context);
    }
    return contents;
};
const deserializeAws_restXmlObjectLockLegalHold = (output, context) => {
    const contents = {
        Status: undefined,
    };
    if (output["Status"] !== undefined) {
        contents.Status = (0, smithy_client_1.expectString)(output["Status"]);
    }
    return contents;
};
const deserializeAws_restXmlObjectLockRetention = (output, context) => {
    const contents = {
        Mode: undefined,
        RetainUntilDate: undefined,
    };
    if (output["Mode"] !== undefined) {
        contents.Mode = (0, smithy_client_1.expectString)(output["Mode"]);
    }
    if (output["RetainUntilDate"] !== undefined) {
        contents.RetainUntilDate = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["RetainUntilDate"]));
    }
    return contents;
};
const deserializeAws_restXmlObjectLockRule = (output, context) => {
    const contents = {
        DefaultRetention: undefined,
    };
    if (output["DefaultRetention"] !== undefined) {
        contents.DefaultRetention = deserializeAws_restXmlDefaultRetention(output["DefaultRetention"], context);
    }
    return contents;
};
const deserializeAws_restXmlObjectPart = (output, context) => {
    const contents = {
        PartNumber: undefined,
        Size: undefined,
        ChecksumCRC32: undefined,
        ChecksumCRC32C: undefined,
        ChecksumSHA1: undefined,
        ChecksumSHA256: undefined,
    };
    if (output["PartNumber"] !== undefined) {
        contents.PartNumber = (0, smithy_client_1.strictParseInt32)(output["PartNumber"]);
    }
    if (output["Size"] !== undefined) {
        contents.Size = (0, smithy_client_1.strictParseLong)(output["Size"]);
    }
    if (output["ChecksumCRC32"] !== undefined) {
        contents.ChecksumCRC32 = (0, smithy_client_1.expectString)(output["ChecksumCRC32"]);
    }
    if (output["ChecksumCRC32C"] !== undefined) {
        contents.ChecksumCRC32C = (0, smithy_client_1.expectString)(output["ChecksumCRC32C"]);
    }
    if (output["ChecksumSHA1"] !== undefined) {
        contents.ChecksumSHA1 = (0, smithy_client_1.expectString)(output["ChecksumSHA1"]);
    }
    if (output["ChecksumSHA256"] !== undefined) {
        contents.ChecksumSHA256 = (0, smithy_client_1.expectString)(output["ChecksumSHA256"]);
    }
    return contents;
};
const deserializeAws_restXmlObjectVersion = (output, context) => {
    const contents = {
        ETag: undefined,
        ChecksumAlgorithm: undefined,
        Size: undefined,
        StorageClass: undefined,
        Key: undefined,
        VersionId: undefined,
        IsLatest: undefined,
        LastModified: undefined,
        Owner: undefined,
    };
    if (output["ETag"] !== undefined) {
        contents.ETag = (0, smithy_client_1.expectString)(output["ETag"]);
    }
    if (output.ChecksumAlgorithm === "") {
        contents.ChecksumAlgorithm = [];
    }
    else if (output["ChecksumAlgorithm"] !== undefined) {
        contents.ChecksumAlgorithm = deserializeAws_restXmlChecksumAlgorithmList((0, smithy_client_1.getArrayIfSingleItem)(output["ChecksumAlgorithm"]), context);
    }
    if (output["Size"] !== undefined) {
        contents.Size = (0, smithy_client_1.strictParseLong)(output["Size"]);
    }
    if (output["StorageClass"] !== undefined) {
        contents.StorageClass = (0, smithy_client_1.expectString)(output["StorageClass"]);
    }
    if (output["Key"] !== undefined) {
        contents.Key = (0, smithy_client_1.expectString)(output["Key"]);
    }
    if (output["VersionId"] !== undefined) {
        contents.VersionId = (0, smithy_client_1.expectString)(output["VersionId"]);
    }
    if (output["IsLatest"] !== undefined) {
        contents.IsLatest = (0, smithy_client_1.parseBoolean)(output["IsLatest"]);
    }
    if (output["LastModified"] !== undefined) {
        contents.LastModified = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["LastModified"]));
    }
    if (output["Owner"] !== undefined) {
        contents.Owner = deserializeAws_restXmlOwner(output["Owner"], context);
    }
    return contents;
};
const deserializeAws_restXmlObjectVersionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlObjectVersion(entry, context);
    });
};
const deserializeAws_restXmlOwner = (output, context) => {
    const contents = {
        DisplayName: undefined,
        ID: undefined,
    };
    if (output["DisplayName"] !== undefined) {
        contents.DisplayName = (0, smithy_client_1.expectString)(output["DisplayName"]);
    }
    if (output["ID"] !== undefined) {
        contents.ID = (0, smithy_client_1.expectString)(output["ID"]);
    }
    return contents;
};
const deserializeAws_restXmlOwnershipControls = (output, context) => {
    const contents = {
        Rules: undefined,
    };
    if (output.Rule === "") {
        contents.Rules = [];
    }
    else if (output["Rule"] !== undefined) {
        contents.Rules = deserializeAws_restXmlOwnershipControlsRules((0, smithy_client_1.getArrayIfSingleItem)(output["Rule"]), context);
    }
    return contents;
};
const deserializeAws_restXmlOwnershipControlsRule = (output, context) => {
    const contents = {
        ObjectOwnership: undefined,
    };
    if (output["ObjectOwnership"] !== undefined) {
        contents.ObjectOwnership = (0, smithy_client_1.expectString)(output["ObjectOwnership"]);
    }
    return contents;
};
const deserializeAws_restXmlOwnershipControlsRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlOwnershipControlsRule(entry, context);
    });
};
const deserializeAws_restXmlPart = (output, context) => {
    const contents = {
        PartNumber: undefined,
        LastModified: undefined,
        ETag: undefined,
        Size: undefined,
        ChecksumCRC32: undefined,
        ChecksumCRC32C: undefined,
        ChecksumSHA1: undefined,
        ChecksumSHA256: undefined,
    };
    if (output["PartNumber"] !== undefined) {
        contents.PartNumber = (0, smithy_client_1.strictParseInt32)(output["PartNumber"]);
    }
    if (output["LastModified"] !== undefined) {
        contents.LastModified = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["LastModified"]));
    }
    if (output["ETag"] !== undefined) {
        contents.ETag = (0, smithy_client_1.expectString)(output["ETag"]);
    }
    if (output["Size"] !== undefined) {
        contents.Size = (0, smithy_client_1.strictParseLong)(output["Size"]);
    }
    if (output["ChecksumCRC32"] !== undefined) {
        contents.ChecksumCRC32 = (0, smithy_client_1.expectString)(output["ChecksumCRC32"]);
    }
    if (output["ChecksumCRC32C"] !== undefined) {
        contents.ChecksumCRC32C = (0, smithy_client_1.expectString)(output["ChecksumCRC32C"]);
    }
    if (output["ChecksumSHA1"] !== undefined) {
        contents.ChecksumSHA1 = (0, smithy_client_1.expectString)(output["ChecksumSHA1"]);
    }
    if (output["ChecksumSHA256"] !== undefined) {
        contents.ChecksumSHA256 = (0, smithy_client_1.expectString)(output["ChecksumSHA256"]);
    }
    return contents;
};
const deserializeAws_restXmlParts = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlPart(entry, context);
    });
};
const deserializeAws_restXmlPartsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlObjectPart(entry, context);
    });
};
const deserializeAws_restXmlPolicyStatus = (output, context) => {
    const contents = {
        IsPublic: undefined,
    };
    if (output["IsPublic"] !== undefined) {
        contents.IsPublic = (0, smithy_client_1.parseBoolean)(output["IsPublic"]);
    }
    return contents;
};
const deserializeAws_restXmlProgress = (output, context) => {
    const contents = {
        BytesScanned: undefined,
        BytesProcessed: undefined,
        BytesReturned: undefined,
    };
    if (output["BytesScanned"] !== undefined) {
        contents.BytesScanned = (0, smithy_client_1.strictParseLong)(output["BytesScanned"]);
    }
    if (output["BytesProcessed"] !== undefined) {
        contents.BytesProcessed = (0, smithy_client_1.strictParseLong)(output["BytesProcessed"]);
    }
    if (output["BytesReturned"] !== undefined) {
        contents.BytesReturned = (0, smithy_client_1.strictParseLong)(output["BytesReturned"]);
    }
    return contents;
};
const deserializeAws_restXmlPublicAccessBlockConfiguration = (output, context) => {
    const contents = {
        BlockPublicAcls: undefined,
        IgnorePublicAcls: undefined,
        BlockPublicPolicy: undefined,
        RestrictPublicBuckets: undefined,
    };
    if (output["BlockPublicAcls"] !== undefined) {
        contents.BlockPublicAcls = (0, smithy_client_1.parseBoolean)(output["BlockPublicAcls"]);
    }
    if (output["IgnorePublicAcls"] !== undefined) {
        contents.IgnorePublicAcls = (0, smithy_client_1.parseBoolean)(output["IgnorePublicAcls"]);
    }
    if (output["BlockPublicPolicy"] !== undefined) {
        contents.BlockPublicPolicy = (0, smithy_client_1.parseBoolean)(output["BlockPublicPolicy"]);
    }
    if (output["RestrictPublicBuckets"] !== undefined) {
        contents.RestrictPublicBuckets = (0, smithy_client_1.parseBoolean)(output["RestrictPublicBuckets"]);
    }
    return contents;
};
const deserializeAws_restXmlQueueConfiguration = (output, context) => {
    const contents = {
        Id: undefined,
        QueueArn: undefined,
        Events: undefined,
        Filter: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["Queue"] !== undefined) {
        contents.QueueArn = (0, smithy_client_1.expectString)(output["Queue"]);
    }
    if (output.Event === "") {
        contents.Events = [];
    }
    else if (output["Event"] !== undefined) {
        contents.Events = deserializeAws_restXmlEventList((0, smithy_client_1.getArrayIfSingleItem)(output["Event"]), context);
    }
    if (output["Filter"] !== undefined) {
        contents.Filter = deserializeAws_restXmlNotificationConfigurationFilter(output["Filter"], context);
    }
    return contents;
};
const deserializeAws_restXmlQueueConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlQueueConfiguration(entry, context);
    });
};
const deserializeAws_restXmlRedirect = (output, context) => {
    const contents = {
        HostName: undefined,
        HttpRedirectCode: undefined,
        Protocol: undefined,
        ReplaceKeyPrefixWith: undefined,
        ReplaceKeyWith: undefined,
    };
    if (output["HostName"] !== undefined) {
        contents.HostName = (0, smithy_client_1.expectString)(output["HostName"]);
    }
    if (output["HttpRedirectCode"] !== undefined) {
        contents.HttpRedirectCode = (0, smithy_client_1.expectString)(output["HttpRedirectCode"]);
    }
    if (output["Protocol"] !== undefined) {
        contents.Protocol = (0, smithy_client_1.expectString)(output["Protocol"]);
    }
    if (output["ReplaceKeyPrefixWith"] !== undefined) {
        contents.ReplaceKeyPrefixWith = (0, smithy_client_1.expectString)(output["ReplaceKeyPrefixWith"]);
    }
    if (output["ReplaceKeyWith"] !== undefined) {
        contents.ReplaceKeyWith = (0, smithy_client_1.expectString)(output["ReplaceKeyWith"]);
    }
    return contents;
};
const deserializeAws_restXmlRedirectAllRequestsTo = (output, context) => {
    const contents = {
        HostName: undefined,
        Protocol: undefined,
    };
    if (output["HostName"] !== undefined) {
        contents.HostName = (0, smithy_client_1.expectString)(output["HostName"]);
    }
    if (output["Protocol"] !== undefined) {
        contents.Protocol = (0, smithy_client_1.expectString)(output["Protocol"]);
    }
    return contents;
};
const deserializeAws_restXmlReplicaModifications = (output, context) => {
    const contents = {
        Status: undefined,
    };
    if (output["Status"] !== undefined) {
        contents.Status = (0, smithy_client_1.expectString)(output["Status"]);
    }
    return contents;
};
const deserializeAws_restXmlReplicationConfiguration = (output, context) => {
    const contents = {
        Role: undefined,
        Rules: undefined,
    };
    if (output["Role"] !== undefined) {
        contents.Role = (0, smithy_client_1.expectString)(output["Role"]);
    }
    if (output.Rule === "") {
        contents.Rules = [];
    }
    else if (output["Rule"] !== undefined) {
        contents.Rules = deserializeAws_restXmlReplicationRules((0, smithy_client_1.getArrayIfSingleItem)(output["Rule"]), context);
    }
    return contents;
};
const deserializeAws_restXmlReplicationRule = (output, context) => {
    const contents = {
        ID: undefined,
        Priority: undefined,
        Prefix: undefined,
        Filter: undefined,
        Status: undefined,
        SourceSelectionCriteria: undefined,
        ExistingObjectReplication: undefined,
        Destination: undefined,
        DeleteMarkerReplication: undefined,
    };
    if (output["ID"] !== undefined) {
        contents.ID = (0, smithy_client_1.expectString)(output["ID"]);
    }
    if (output["Priority"] !== undefined) {
        contents.Priority = (0, smithy_client_1.strictParseInt32)(output["Priority"]);
    }
    if (output["Prefix"] !== undefined) {
        contents.Prefix = (0, smithy_client_1.expectString)(output["Prefix"]);
    }
    if (output.Filter === "") {
    }
    else if (output["Filter"] !== undefined) {
        contents.Filter = deserializeAws_restXmlReplicationRuleFilter((0, smithy_client_1.expectUnion)(output["Filter"]), context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = (0, smithy_client_1.expectString)(output["Status"]);
    }
    if (output["SourceSelectionCriteria"] !== undefined) {
        contents.SourceSelectionCriteria = deserializeAws_restXmlSourceSelectionCriteria(output["SourceSelectionCriteria"], context);
    }
    if (output["ExistingObjectReplication"] !== undefined) {
        contents.ExistingObjectReplication = deserializeAws_restXmlExistingObjectReplication(output["ExistingObjectReplication"], context);
    }
    if (output["Destination"] !== undefined) {
        contents.Destination = deserializeAws_restXmlDestination(output["Destination"], context);
    }
    if (output["DeleteMarkerReplication"] !== undefined) {
        contents.DeleteMarkerReplication = deserializeAws_restXmlDeleteMarkerReplication(output["DeleteMarkerReplication"], context);
    }
    return contents;
};
const deserializeAws_restXmlReplicationRuleAndOperator = (output, context) => {
    const contents = {
        Prefix: undefined,
        Tags: undefined,
    };
    if (output["Prefix"] !== undefined) {
        contents.Prefix = (0, smithy_client_1.expectString)(output["Prefix"]);
    }
    if (output.Tag === "") {
        contents.Tags = [];
    }
    else if (output["Tag"] !== undefined) {
        contents.Tags = deserializeAws_restXmlTagSet((0, smithy_client_1.getArrayIfSingleItem)(output["Tag"]), context);
    }
    return contents;
};
const deserializeAws_restXmlReplicationRuleFilter = (output, context) => {
    if (output["Prefix"] !== undefined) {
        return {
            Prefix: (0, smithy_client_1.expectString)(output["Prefix"]),
        };
    }
    if (output["Tag"] !== undefined) {
        return {
            Tag: deserializeAws_restXmlTag(output["Tag"], context),
        };
    }
    if (output["And"] !== undefined) {
        return {
            And: deserializeAws_restXmlReplicationRuleAndOperator(output["And"], context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restXmlReplicationRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlReplicationRule(entry, context);
    });
};
const deserializeAws_restXmlReplicationTime = (output, context) => {
    const contents = {
        Status: undefined,
        Time: undefined,
    };
    if (output["Status"] !== undefined) {
        contents.Status = (0, smithy_client_1.expectString)(output["Status"]);
    }
    if (output["Time"] !== undefined) {
        contents.Time = deserializeAws_restXmlReplicationTimeValue(output["Time"], context);
    }
    return contents;
};
const deserializeAws_restXmlReplicationTimeValue = (output, context) => {
    const contents = {
        Minutes: undefined,
    };
    if (output["Minutes"] !== undefined) {
        contents.Minutes = (0, smithy_client_1.strictParseInt32)(output["Minutes"]);
    }
    return contents;
};
const deserializeAws_restXmlRoutingRule = (output, context) => {
    const contents = {
        Condition: undefined,
        Redirect: undefined,
    };
    if (output["Condition"] !== undefined) {
        contents.Condition = deserializeAws_restXmlCondition(output["Condition"], context);
    }
    if (output["Redirect"] !== undefined) {
        contents.Redirect = deserializeAws_restXmlRedirect(output["Redirect"], context);
    }
    return contents;
};
const deserializeAws_restXmlRoutingRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlRoutingRule(entry, context);
    });
};
const deserializeAws_restXmlS3KeyFilter = (output, context) => {
    const contents = {
        FilterRules: undefined,
    };
    if (output.FilterRule === "") {
        contents.FilterRules = [];
    }
    else if (output["FilterRule"] !== undefined) {
        contents.FilterRules = deserializeAws_restXmlFilterRuleList((0, smithy_client_1.getArrayIfSingleItem)(output["FilterRule"]), context);
    }
    return contents;
};
const deserializeAws_restXmlServerSideEncryptionByDefault = (output, context) => {
    const contents = {
        SSEAlgorithm: undefined,
        KMSMasterKeyID: undefined,
    };
    if (output["SSEAlgorithm"] !== undefined) {
        contents.SSEAlgorithm = (0, smithy_client_1.expectString)(output["SSEAlgorithm"]);
    }
    if (output["KMSMasterKeyID"] !== undefined) {
        contents.KMSMasterKeyID = (0, smithy_client_1.expectString)(output["KMSMasterKeyID"]);
    }
    return contents;
};
const deserializeAws_restXmlServerSideEncryptionConfiguration = (output, context) => {
    const contents = {
        Rules: undefined,
    };
    if (output.Rule === "") {
        contents.Rules = [];
    }
    else if (output["Rule"] !== undefined) {
        contents.Rules = deserializeAws_restXmlServerSideEncryptionRules((0, smithy_client_1.getArrayIfSingleItem)(output["Rule"]), context);
    }
    return contents;
};
const deserializeAws_restXmlServerSideEncryptionRule = (output, context) => {
    const contents = {
        ApplyServerSideEncryptionByDefault: undefined,
        BucketKeyEnabled: undefined,
    };
    if (output["ApplyServerSideEncryptionByDefault"] !== undefined) {
        contents.ApplyServerSideEncryptionByDefault = deserializeAws_restXmlServerSideEncryptionByDefault(output["ApplyServerSideEncryptionByDefault"], context);
    }
    if (output["BucketKeyEnabled"] !== undefined) {
        contents.BucketKeyEnabled = (0, smithy_client_1.parseBoolean)(output["BucketKeyEnabled"]);
    }
    return contents;
};
const deserializeAws_restXmlServerSideEncryptionRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlServerSideEncryptionRule(entry, context);
    });
};
const deserializeAws_restXmlSourceSelectionCriteria = (output, context) => {
    const contents = {
        SseKmsEncryptedObjects: undefined,
        ReplicaModifications: undefined,
    };
    if (output["SseKmsEncryptedObjects"] !== undefined) {
        contents.SseKmsEncryptedObjects = deserializeAws_restXmlSseKmsEncryptedObjects(output["SseKmsEncryptedObjects"], context);
    }
    if (output["ReplicaModifications"] !== undefined) {
        contents.ReplicaModifications = deserializeAws_restXmlReplicaModifications(output["ReplicaModifications"], context);
    }
    return contents;
};
const deserializeAws_restXmlSSEKMS = (output, context) => {
    const contents = {
        KeyId: undefined,
    };
    if (output["KeyId"] !== undefined) {
        contents.KeyId = (0, smithy_client_1.expectString)(output["KeyId"]);
    }
    return contents;
};
const deserializeAws_restXmlSseKmsEncryptedObjects = (output, context) => {
    const contents = {
        Status: undefined,
    };
    if (output["Status"] !== undefined) {
        contents.Status = (0, smithy_client_1.expectString)(output["Status"]);
    }
    return contents;
};
const deserializeAws_restXmlSSES3 = (output, context) => {
    const contents = {};
    return contents;
};
const deserializeAws_restXmlStats = (output, context) => {
    const contents = {
        BytesScanned: undefined,
        BytesProcessed: undefined,
        BytesReturned: undefined,
    };
    if (output["BytesScanned"] !== undefined) {
        contents.BytesScanned = (0, smithy_client_1.strictParseLong)(output["BytesScanned"]);
    }
    if (output["BytesProcessed"] !== undefined) {
        contents.BytesProcessed = (0, smithy_client_1.strictParseLong)(output["BytesProcessed"]);
    }
    if (output["BytesReturned"] !== undefined) {
        contents.BytesReturned = (0, smithy_client_1.strictParseLong)(output["BytesReturned"]);
    }
    return contents;
};
const deserializeAws_restXmlStorageClassAnalysis = (output, context) => {
    const contents = {
        DataExport: undefined,
    };
    if (output["DataExport"] !== undefined) {
        contents.DataExport = deserializeAws_restXmlStorageClassAnalysisDataExport(output["DataExport"], context);
    }
    return contents;
};
const deserializeAws_restXmlStorageClassAnalysisDataExport = (output, context) => {
    const contents = {
        OutputSchemaVersion: undefined,
        Destination: undefined,
    };
    if (output["OutputSchemaVersion"] !== undefined) {
        contents.OutputSchemaVersion = (0, smithy_client_1.expectString)(output["OutputSchemaVersion"]);
    }
    if (output["Destination"] !== undefined) {
        contents.Destination = deserializeAws_restXmlAnalyticsExportDestination(output["Destination"], context);
    }
    return contents;
};
const deserializeAws_restXmlTag = (output, context) => {
    const contents = {
        Key: undefined,
        Value: undefined,
    };
    if (output["Key"] !== undefined) {
        contents.Key = (0, smithy_client_1.expectString)(output["Key"]);
    }
    if (output["Value"] !== undefined) {
        contents.Value = (0, smithy_client_1.expectString)(output["Value"]);
    }
    return contents;
};
const deserializeAws_restXmlTagSet = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlTag(entry, context);
    });
};
const deserializeAws_restXmlTargetGrant = (output, context) => {
    const contents = {
        Grantee: undefined,
        Permission: undefined,
    };
    if (output["Grantee"] !== undefined) {
        contents.Grantee = deserializeAws_restXmlGrantee(output["Grantee"], context);
    }
    if (output["Permission"] !== undefined) {
        contents.Permission = (0, smithy_client_1.expectString)(output["Permission"]);
    }
    return contents;
};
const deserializeAws_restXmlTargetGrants = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlTargetGrant(entry, context);
    });
};
const deserializeAws_restXmlTiering = (output, context) => {
    const contents = {
        Days: undefined,
        AccessTier: undefined,
    };
    if (output["Days"] !== undefined) {
        contents.Days = (0, smithy_client_1.strictParseInt32)(output["Days"]);
    }
    if (output["AccessTier"] !== undefined) {
        contents.AccessTier = (0, smithy_client_1.expectString)(output["AccessTier"]);
    }
    return contents;
};
const deserializeAws_restXmlTieringList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlTiering(entry, context);
    });
};
const deserializeAws_restXmlTopicConfiguration = (output, context) => {
    const contents = {
        Id: undefined,
        TopicArn: undefined,
        Events: undefined,
        Filter: undefined,
    };
    if (output["Id"] !== undefined) {
        contents.Id = (0, smithy_client_1.expectString)(output["Id"]);
    }
    if (output["Topic"] !== undefined) {
        contents.TopicArn = (0, smithy_client_1.expectString)(output["Topic"]);
    }
    if (output.Event === "") {
        contents.Events = [];
    }
    else if (output["Event"] !== undefined) {
        contents.Events = deserializeAws_restXmlEventList((0, smithy_client_1.getArrayIfSingleItem)(output["Event"]), context);
    }
    if (output["Filter"] !== undefined) {
        contents.Filter = deserializeAws_restXmlNotificationConfigurationFilter(output["Filter"], context);
    }
    return contents;
};
const deserializeAws_restXmlTopicConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlTopicConfiguration(entry, context);
    });
};
const deserializeAws_restXmlTransition = (output, context) => {
    const contents = {
        Date: undefined,
        Days: undefined,
        StorageClass: undefined,
    };
    if (output["Date"] !== undefined) {
        contents.Date = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["Date"]));
    }
    if (output["Days"] !== undefined) {
        contents.Days = (0, smithy_client_1.strictParseInt32)(output["Days"]);
    }
    if (output["StorageClass"] !== undefined) {
        contents.StorageClass = (0, smithy_client_1.expectString)(output["StorageClass"]);
    }
    return contents;
};
const deserializeAws_restXmlTransitionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return deserializeAws_restXmlTransition(entry, context);
    });
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        const parser = new fast_xml_parser_1.XMLParser({
            attributeNamePrefix: "",
            htmlEntities: true,
            ignoreAttributes: false,
            ignoreDeclaration: true,
            parseTagValue: false,
            trimValues: false,
            tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
        });
        parser.addEntity("#xD", "\r");
        parser.addEntity("#10", "\n");
        const parsedObj = parser.parse(encoded);
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
            parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
            delete parsedObjToReturn[textNodeName];
        }
        return (0, smithy_client_1.getValueFromTextNode)(parsedObjToReturn);
    }
    return {};
});
const parseErrorBody = async (errorBody, context) => {
    const value = await parseBody(errorBody, context);
    if (value.Error) {
        value.Error.message = value.Error.message ?? value.Error.Message;
    }
    return value;
};
const loadRestXmlErrorCode = (output, data) => {
    if (data?.Code !== undefined) {
        return data.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
};
/// <reference types="node" />
import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { PutObjectOutput, PutObjectRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link PutObjectCommand}.
 */
type PutObjectCommandInputType = Omit<PutObjectRequest, "Body"> & {
    /**
     * For *`PutObjectRequest["Body"]`*, see {@link PutObjectRequest.Body}.
     */
    Body?: PutObjectRequest["Body"] | string | Uint8Array | Buffer;
};
/**
 * This interface extends from `PutObjectRequest` interface. There are more parameters than `Body` defined in {@link PutObjectRequest}
 */
export interface PutObjectCommandInput extends PutObjectCommandInputType {
}
/**
 * The output of {@link PutObjectCommand}.
 */
export interface PutObjectCommandOutput extends PutObjectOutput, __MetadataBearer {
}
/**
 * <p>Adds an object to a bucket. You must have WRITE permissions on a bucket to add an object
 *          to it.</p>
 *          <p>Amazon S3 never adds partial objects; if you receive a success response, Amazon S3 added the
 *          entire object to the bucket.</p>
 *          <p>Amazon S3 is a distributed system. If it receives multiple write requests for the same object
 *          simultaneously, it overwrites all but the last object written. Amazon S3 does not provide object
 *          locking; if you need this, make sure to build it into your application layer or use
 *          versioning instead.</p>
 *          <p>To ensure that data is not corrupted traversing the network, use the
 *             <code>Content-MD5</code> header. When you use this header, Amazon S3 checks the object
 *          against the provided MD5 value and, if they do not match, returns an error. Additionally,
 *          you can calculate the MD5 while putting an object to Amazon S3 and compare the returned ETag to
 *          the calculated MD5 value.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>To successfully complete the <code>PutObject</code> request, you must have the
 *                <code>s3:PutObject</code> in your IAM permissions.</p>
 *                </li>
 *                <li>
 *                   <p>To successfully change the objects acl of your <code>PutObject</code> request,
 *                you must have the <code>s3:PutObjectAcl</code> in your IAM permissions.</p>
 *                </li>
 *                <li>
 *                   <p> The <code>Content-MD5</code> header is required for any request to upload an object
 *                   with a retention period configured using Amazon S3 Object Lock. For more information about
 *                   Amazon S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html">Amazon S3 Object Lock Overview</a>
 *                   in the <i>Amazon S3 User Guide</i>. </p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>
 *             <b>Server-side Encryption</b>
 *          </p>
 *          <p>You can optionally request server-side encryption. With server-side encryption, Amazon S3 encrypts
 *          your data as it writes it to disks in its data centers and decrypts the data
 *          when you access it. You have the option to provide your own encryption key or use Amazon Web Services
 *          managed encryption keys (SSE-S3 or SSE-KMS). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html">Using Server-Side
 *             Encryption</a>.</p>
 *          <p>If you request server-side encryption using Amazon Web Services Key Management Service (SSE-KMS), you can enable
 *          an S3 Bucket Key at the object-level. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html">Amazon S3 Bucket Keys</a> in the
 *          <i>Amazon S3 User Guide</i>.</p>
 *          <p>
 *             <b>Access Control List (ACL)-Specific Request
 *          Headers</b>
 *          </p>
 *          <p>You can use headers to grant ACL- based permissions. By default, all objects are
 *          private. Only the owner has full access control. When adding a new object, you can grant
 *          permissions to individual Amazon Web Services accounts or to predefined groups defined by Amazon S3. These
 *          permissions are then added to the ACL on the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html">Access Control List
 *             (ACL) Overview</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-using-rest-api.html">Managing ACLs Using the REST
 *             API</a>. </p>
 *          <p>If the bucket that you're uploading objects to uses the bucket owner enforced setting
 *          for S3 Object Ownership, ACLs are disabled and no longer affect permissions. Buckets that
 *          use this setting only accept PUT requests that don't specify an ACL or PUT requests that
 *          specify bucket owner full control ACLs, such as the <code>bucket-owner-full-control</code> canned
 *          ACL or an equivalent form of this ACL expressed in the XML format. PUT requests that contain other
 *          ACLs (for example, custom grants to certain Amazon Web Services accounts) fail and return a
 *             <code>400</code> error with the error code
 *          <code>AccessControlListNotSupported</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html"> Controlling ownership of
 *          objects and disabling ACLs</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>If your bucket uses the bucket owner enforced setting for Object Ownership,
 *             all objects written to the bucket by any account will be owned by the bucket owner.</p>
 *          </note>
 *          <p>
 *             <b>Storage Class Options</b>
 *          </p>
 *          <p>By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The
 *          STANDARD storage class provides high durability and high availability. Depending on
 *          performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses
 *          the OUTPOSTS Storage Class. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a> in the
 *          <i>Amazon S3 User Guide</i>.</p>
 *          <p>
 *             <b>Versioning</b>
 *          </p>
 *          <p>If you enable versioning for a bucket, Amazon S3 automatically generates a unique version ID
 *          for the object being stored. Amazon S3 returns this ID in the response. When you enable
 *          versioning for a bucket, if Amazon S3 receives multiple write requests for the same object
 *          simultaneously, it stores all of the objects.</p>
 *          <p>For more information about versioning, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/AddingObjectstoVersioningEnabledBuckets.html">Adding Objects to
 *             Versioning Enabled Buckets</a>. For information about returning the versioning state
 *          of a bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html">GetBucketVersioning</a>. </p>
 *          <p class="title">
 *             <b>Related Resources</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html">CopyObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html">DeleteObject</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new PutObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutObjectCommandInput} for command's `input` shape.
 * @see {@link PutObjectCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 * @example To upload an object
 * ```javascript
 * // The following example uploads an object to a versioning-enabled bucket. The source file is specified using Windows file syntax. S3 returns VersionId of the newly created object.
 * const input = {
 *   "Body": "HappyFace.jpg",
 *   "Bucket": "examplebucket",
 *   "Key": "HappyFace.jpg"
 * };
 * const command = new PutObjectCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
 *   "VersionId": "tpf3zF08nBplQK1XLOefGskR7mGDwcDk"
 * }
 * *\/
 * // example id: to-upload-an-object-1481760101010
 * ```
 *
 * @example To upload object and specify user-defined metadata
 * ```javascript
 * // The following example creates an object. The request also specifies optional metadata. If the bucket is versioning enabled, S3 returns version ID in response.
 * const input = {
 *   "Body": "filetoupload",
 *   "Bucket": "examplebucket",
 *   "Key": "exampleobject",
 *   "Metadata": {
 *     "metadata1": "value1",
 *     "metadata2": "value2"
 *   }
 * };
 * const command = new PutObjectCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
 *   "VersionId": "pSKidl4pHBiNwukdbcPXAIs.sshFFOc0"
 * }
 * *\/
 * // example id: to-upload-object-and-specify-user-defined-metadata-1483396974757
 * ```
 *
 * @example To upload an object (specify optional headers)
 * ```javascript
 * // The following example uploads an object. The request specifies optional request headers to directs S3 to use specific storage class and use server-side encryption.
 * const input = {
 *   "Body": "HappyFace.jpg",
 *   "Bucket": "examplebucket",
 *   "Key": "HappyFace.jpg",
 *   "ServerSideEncryption": "AES256",
 *   "StorageClass": "STANDARD_IA"
 * };
 * const command = new PutObjectCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
 *   "ServerSideEncryption": "AES256",
 *   "VersionId": "CG612hodqujkf8FaaNfp8U..FIhLROcp"
 * }
 * *\/
 * // example id: to-upload-an-object-(specify-optional-headers)
 * ```
 *
 * @example To create an object.
 * ```javascript
 * // The following example creates an object. If the bucket is versioning enabled, S3 returns version ID in response.
 * const input = {
 *   "Body": "filetoupload",
 *   "Bucket": "examplebucket",
 *   "Key": "objectkey"
 * };
 * const command = new PutObjectCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
 *   "VersionId": "Bvq0EDKxOcXLJXNo_Lkz37eM3R4pfzyQ"
 * }
 * *\/
 * // example id: to-create-an-object-1483147613675
 * ```
 *
 * @example To upload an object and specify server-side encryption and object tags
 * ```javascript
 * // The following example uploads and object. The request specifies the optional server-side encryption option. The request also specifies optional object tags. If the bucket is versioning enabled, S3 returns version ID in response.
 * const input = {
 *   "Body": "filetoupload",
 *   "Bucket": "examplebucket",
 *   "Key": "exampleobject",
 *   "ServerSideEncryption": "AES256",
 *   "Tagging": "key1=value1&key2=value2"
 * };
 * const command = new PutObjectCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
 *   "ServerSideEncryption": "AES256",
 *   "VersionId": "Ri.vC6qVlA4dEnjgRV4ZHsHoFIjqEMNt"
 * }
 * *\/
 * // example id: to-upload-an-object-and-specify-server-side-encryption-and-object-tags-1483398331831
 * ```
 *
 * @example To upload an object and specify optional tags
 * ```javascript
 * // The following example uploads an object. The request specifies optional object tags. The bucket is versioned, therefore S3 returns version ID of the newly created object.
 * const input = {
 *   "Body": "c:\\HappyFace.jpg",
 *   "Bucket": "examplebucket",
 *   "Key": "HappyFace.jpg",
 *   "Tagging": "key1=value1&key2=value2"
 * };
 * const command = new PutObjectCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
 *   "VersionId": "psM2sYY4.o1501dSx8wMvnkOzSBB.V4a"
 * }
 * *\/
 * // example id: to-upload-an-object-and-specify-optional-tags-1481762310955
 * ```
 *
 * @example To upload an object and specify canned ACL.
 * ```javascript
 * // The following example uploads and object. The request specifies optional canned ACL (access control list) to all READ access to authenticated users. If the bucket is versioning enabled, S3 returns version ID in response.
 * const input = {
 *   "ACL": "authenticated-read",
 *   "Body": "filetoupload",
 *   "Bucket": "examplebucket",
 *   "Key": "exampleobject"
 * };
 * const command = new PutObjectCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
 *   "VersionId": "Kirh.unyZwjQ69YxcQLA8z4F5j3kJJKr"
 * }
 * *\/
 * // example id: to-upload-an-object-and-specify-canned-acl-1483397779571
 * ```
 *
 */
export declare class PutObjectCommand extends $Command<PutObjectCommandInput, PutObjectCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutObjectCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: PutObjectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutObjectCommandInput, PutObjectCommandOutput>;
    private serialize;
    private deserialize;
}
export {};
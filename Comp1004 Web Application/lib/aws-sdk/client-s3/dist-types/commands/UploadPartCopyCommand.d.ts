import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { UploadPartCopyOutput, UploadPartCopyRequest } from "../models/models_1";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link UploadPartCopyCommand}.
 */
export interface UploadPartCopyCommandInput extends UploadPartCopyRequest {
}
/**
 * The output of {@link UploadPartCopyCommand}.
 */
export interface UploadPartCopyCommandOutput extends UploadPartCopyOutput, __MetadataBearer {
}
/**
 * <p>Uploads a part by copying data from an existing object as data source. You specify the
 *          data source by adding the request header <code>x-amz-copy-source</code> in your request and
 *          a byte range by adding the request header <code>x-amz-copy-source-range</code> in your
 *          request. </p>
 *          <p>For information about maximum and minimum part sizes and other multipart upload specifications, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/qfacts.html">Multipart upload limits</a> in the <i>Amazon S3 User Guide</i>. </p>
 *          <note>
 *             <p>Instead of using an existing object as part data, you might use the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html">UploadPart</a>
 *             action and provide data in your request.</p>
 *          </note>
 *          <p>You must initiate a multipart upload before you can upload any part. In response to your
 *          initiate request. Amazon S3 returns a unique identifier, the upload ID, that you must include in
 *          your upload part request.</p>
 *          <p>For more information about using the <code>UploadPartCopy</code> operation, see the
 *          following:</p>
 *          <ul>
 *             <li>
 *                <p>For conceptual information about multipart uploads, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/uploadobjusingmpu.html">Uploading Objects Using Multipart
 *                   Upload</a> in the <i>Amazon S3 User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>For information about permissions required to use the multipart upload API, see
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuAndPermissions.html">Multipart Upload  and
 *                   Permissions</a> in the <i>Amazon S3 User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>For information about copying objects using a single atomic action vs. a multipart
 *                upload, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectOperations.html">Operations on Objects</a> in
 *                the <i>Amazon S3 User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>For information about using server-side encryption with customer-provided
 *                encryption keys with the <code>UploadPartCopy</code> operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html">CopyObject</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html">UploadPart</a>.</p>
 *             </li>
 *          </ul>
 *          <p>Note the following additional considerations about the request headers
 *             <code>x-amz-copy-source-if-match</code>, <code>x-amz-copy-source-if-none-match</code>,
 *             <code>x-amz-copy-source-if-unmodified-since</code>, and
 *             <code>x-amz-copy-source-if-modified-since</code>:</p>
 *          <p> </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Consideration 1</b> - If both of the
 *                   <code>x-amz-copy-source-if-match</code> and
 *                   <code>x-amz-copy-source-if-unmodified-since</code> headers are present in the
 *                request as follows:</p>
 *                <p>
 *                   <code>x-amz-copy-source-if-match</code> condition evaluates to <code>true</code>,
 *                and;</p>
 *                <p>
 *                   <code>x-amz-copy-source-if-unmodified-since</code> condition evaluates to
 *                   <code>false</code>;</p>
 *                <p>Amazon S3 returns <code>200 OK</code> and copies the data.
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Consideration 2</b> - If both of the
 *                   <code>x-amz-copy-source-if-none-match</code> and
 *                   <code>x-amz-copy-source-if-modified-since</code> headers are present in the
 *                request as follows:</p>
 *                <p>
 *                   <code>x-amz-copy-source-if-none-match</code> condition evaluates to
 *                   <code>false</code>, and;</p>
 *                <p>
 *                   <code>x-amz-copy-source-if-modified-since</code> condition evaluates to
 *                   <code>true</code>;</p>
 *                <p>Amazon S3 returns <code>412 Precondition Failed</code> response code.
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Versioning</b>
 *          </p>
 *          <p>If your bucket has versioning enabled, you could have multiple versions of the same
 *          object. By default, <code>x-amz-copy-source</code> identifies the current version of the
 *          object to copy. If the current version is a delete marker and you don't specify a versionId
 *          in the <code>x-amz-copy-source</code>, Amazon S3 returns a 404 error, because the object does
 *          not exist. If you specify versionId in the <code>x-amz-copy-source</code> and the versionId
 *          is a delete marker, Amazon S3 returns an HTTP 400 error, because you are not allowed to specify
 *          a delete marker as a version for the <code>x-amz-copy-source</code>. </p>
 *          <p>You can optionally specify a specific version of the source object to copy by adding the
 *             <code>versionId</code> subresource as shown in the following example:</p>
 *          <p>
 *             <code>x-amz-copy-source: /bucket/object?versionId=version id</code>
 *          </p>
 *          <p class="title">
 *             <b>Special Errors</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <i>Code: NoSuchUpload</i>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <i>Cause: The specified multipart upload does not exist. The upload
 *                         ID might be invalid, or the multipart upload might have been aborted or
 *                         completed.</i>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <i>HTTP Status Code: 404 Not Found</i>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <i>Code: InvalidRequest</i>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <i>Cause: The specified copy source is not supported as a byte-range
 *                         copy source.</i>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <i>HTTP Status Code: 400 Bad Request</i>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p class="title">
 *             <b>Related Resources</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateMultipartUpload.html">CreateMultipartUpload</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPart.html">UploadPart</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html">CompleteMultipartUpload</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_AbortMultipartUpload.html">AbortMultipartUpload</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html">ListParts</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListMultipartUploads.html">ListMultipartUploads</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, UploadPartCopyCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, UploadPartCopyCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new UploadPartCopyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UploadPartCopyCommandInput} for command's `input` shape.
 * @see {@link UploadPartCopyCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 * @example To upload a part by copying byte range from an existing object as data source
 * ```javascript
 * // The following example uploads a part of a multipart upload by copying a specified byte range from an existing object as data source.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "CopySource": "/bucketname/sourceobjectkey",
 *   "CopySourceRange": "bytes=1-100000",
 *   "Key": "examplelargeobject",
 *   "PartNumber": "2",
 *   "UploadId": "exampleuoh_10OhKhT7YukE9bjzTPRiuaCotmZM_pFngJFir9OZNrSr5cWa3cq3LZSUsfjI4FI7PkP91We7Nrw--"
 * };
 * const command = new UploadPartCopyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CopyPartResult": {
 *     "ETag": "\"65d16d19e65a7508a51f043180edcc36\"",
 *     "LastModified": "2016-12-29T21:44:28.000Z"
 *   }
 * }
 * *\/
 * // example id: to-upload-a-part-by-copying-byte-range-from-an-existing-object-as-data-source-1483048068594
 * ```
 *
 * @example To upload a part by copying data from an existing object as data source
 * ```javascript
 * // The following example uploads a part of a multipart upload by copying data from an existing object as data source.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "CopySource": "/bucketname/sourceobjectkey",
 *   "Key": "examplelargeobject",
 *   "PartNumber": "1",
 *   "UploadId": "exampleuoh_10OhKhT7YukE9bjzTPRiuaCotmZM_pFngJFir9OZNrSr5cWa3cq3LZSUsfjI4FI7PkP91We7Nrw--"
 * };
 * const command = new UploadPartCopyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CopyPartResult": {
 *     "ETag": "\"b0c6f0e7e054ab8fa2536a2677f8734d\"",
 *     "LastModified": "2016-12-29T21:24:43.000Z"
 *   }
 * }
 * *\/
 * // example id: to-upload-a-part-by-copying-data-from-an-existing-object-as-data-source-1483046746348
 * ```
 *
 */
export declare class UploadPartCopyCommand extends $Command<UploadPartCopyCommandInput, UploadPartCopyCommandOutput, S3ClientResolvedConfig> {
    readonly input: UploadPartCopyCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: UploadPartCopyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UploadPartCopyCommandInput, UploadPartCopyCommandOutput>;
    private serialize;
    private deserialize;
}
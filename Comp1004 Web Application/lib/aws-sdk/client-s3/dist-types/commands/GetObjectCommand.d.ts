import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack, WithSdkStreamMixin as __WithSdkStreamMixin } from "@aws-sdk/types";
import { GetObjectOutput, GetObjectRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link GetObjectCommand}.
 */
export interface GetObjectCommandInput extends GetObjectRequest {
}
/**
 * The output of {@link GetObjectCommand}.
 */
export interface GetObjectCommandOutput extends __WithSdkStreamMixin<GetObjectOutput, "Body">, __MetadataBearer {
}
/**
 * <p>Retrieves objects from Amazon S3. To use <code>GET</code>, you must have <code>READ</code>
 *          access to the object. If you grant <code>READ</code> access to the anonymous user, you can
 *          return the object without using an authorization header.</p>
 *          <p>An Amazon S3 bucket has no directory hierarchy such as you would find in a typical computer
 *          file system. You can, however, create a logical hierarchy by using object key names that
 *          imply a folder structure. For example, instead of naming an object <code>sample.jpg</code>,
 *          you can name it <code>photos/2006/February/sample.jpg</code>.</p>
 *          <p>To get an object from such a logical hierarchy, specify the full key name for the object
 *          in the <code>GET</code> operation. For a virtual hosted-style request example, if you have
 *          the object <code>photos/2006/February/sample.jpg</code>, specify the resource as
 *             <code>/photos/2006/February/sample.jpg</code>. For a path-style request example, if you
 *          have the object <code>photos/2006/February/sample.jpg</code> in the bucket named
 *             <code>examplebucket</code>, specify the resource as
 *             <code>/examplebucket/photos/2006/February/sample.jpg</code>. For more information about
 *          request types, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html#VirtualHostingSpecifyBucket">HTTP Host Header Bucket Specification</a>.</p>
 *          <p>For more information about returning the ACL of an object, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html">GetObjectAcl</a>.</p>
 *          <p>If the object you are retrieving is stored in the S3 Glacier or
 *          S3 Glacier Deep Archive storage class, or S3 Intelligent-Tiering Archive or
 *          S3 Intelligent-Tiering Deep Archive tiers, before you can retrieve the object you must first restore a
 *          copy using <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html">RestoreObject</a>. Otherwise, this action returns an
 *             <code>InvalidObjectStateError</code> error. For information about restoring archived
 *          objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/restoring-objects.html">Restoring Archived
 *             Objects</a>.</p>
 *          <p>Encryption request headers, like <code>x-amz-server-side-encryption</code>, should not
 *          be sent for GET requests if your object uses server-side encryption with KMS keys (SSE-KMS)
 *          or server-side encryption with Amazon S3–managed encryption keys (SSE-S3). If your
 *          object does use these types of keys, you’ll get an HTTP 400 BadRequest error.</p>
 *          <p>If you encrypt an object by using server-side encryption with customer-provided
 *          encryption keys (SSE-C) when you store the object in Amazon S3, then when you GET the object,
 *          you must use the following headers:</p>
 *          <ul>
 *             <li>
 *                <p>x-amz-server-side-encryption-customer-algorithm</p>
 *             </li>
 *             <li>
 *                <p>x-amz-server-side-encryption-customer-key</p>
 *             </li>
 *             <li>
 *                <p>x-amz-server-side-encryption-customer-key-MD5</p>
 *             </li>
 *          </ul>
 *          <p>For more information about SSE-C, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Server-Side Encryption (Using
 *             Customer-Provided Encryption Keys)</a>.</p>
 *          <p>Assuming you have the relevant permission to read object tags, the response also returns the
 *             <code>x-amz-tagging-count</code> header that provides the count of number of tags
 *          associated with the object. You can use <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html">GetObjectTagging</a> to retrieve
 *          the tag set associated with an object.</p>
 *          <p>
 *             <b>Permissions</b>
 *          </p>
 *          <p>You need the relevant read object (or version) permission for this operation. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html">Specifying Permissions
 *             in a Policy</a>. If the object you request does not exist, the error Amazon S3 returns
 *          depends on whether you also have the <code>s3:ListBucket</code> permission.</p>
 *          <ul>
 *             <li>
 *                <p>If you have the <code>s3:ListBucket</code> permission on the bucket, Amazon S3 will
 *                return an HTTP status code 404 ("no such key") error.</p>
 *             </li>
 *             <li>
 *                <p>If you don’t have the <code>s3:ListBucket</code> permission, Amazon S3 will return an
 *                HTTP status code 403 ("access denied") error.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Versioning</b>
 *          </p>
 *          <p>By default, the GET action returns the current version of an object. To return a
 *          different version, use the <code>versionId</code> subresource.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>
 *                     If you supply a <code>versionId</code>, you need the <code>s3:GetObjectVersion</code> permission to
 *                     access a specific version of an object. If you request a specific version, you do not need to have
 *                     the <code>s3:GetObject</code> permission.
 *                 </p>
 *                </li>
 *                <li>
 *                   <p>If the current version of the object is a delete marker, Amazon S3 behaves as if the
 *                   object was deleted and includes <code>x-amz-delete-marker: true</code> in the
 *                   response.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>For more information about versioning, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketVersioning.html">PutBucketVersioning</a>. </p>
 *          <p>
 *             <b>Overriding Response Header Values</b>
 *          </p>
 *          <p>There are times when you want to override certain response header values in a GET
 *          response. For example, you might override the <code>Content-Disposition</code> response
 *          header value in your GET request.</p>
 *          <p>You can override values for a set of response headers using the following query
 *          parameters. These response header values are sent only on a successful request, that is,
 *          when status code 200 OK is returned. The set of headers you can override using these
 *          parameters is a subset of the headers that Amazon S3 accepts when you create an object. The
 *          response headers that you can override for the GET response are <code>Content-Type</code>,
 *             <code>Content-Language</code>, <code>Expires</code>, <code>Cache-Control</code>,
 *             <code>Content-Disposition</code>, and <code>Content-Encoding</code>. To override these
 *          header values in the GET response, you use the following request parameters.</p>
 *          <note>
 *             <p>You must sign the request, either using an Authorization header or a presigned URL,
 *             when using these parameters. They cannot be used with an unsigned (anonymous)
 *             request.</p>
 *          </note>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>response-content-type</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>response-content-language</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>response-expires</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>response-cache-control</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>response-content-disposition</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>response-content-encoding</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Additional Considerations about Request Headers</b>
 *          </p>
 *          <p>If both of the <code>If-Match</code> and <code>If-Unmodified-Since</code> headers are
 *          present in the request as follows: <code>If-Match</code> condition evaluates to
 *             <code>true</code>, and; <code>If-Unmodified-Since</code> condition evaluates to
 *             <code>false</code>; then, S3 returns 200 OK and the data requested. </p>
 *          <p>If both of the <code>If-None-Match</code> and <code>If-Modified-Since</code> headers are
 *          present in the request as follows:<code> If-None-Match</code> condition evaluates to
 *             <code>false</code>, and; <code>If-Modified-Since</code> condition evaluates to
 *             <code>true</code>; then, S3 returns 304 Not Modified response code.</p>
 *          <p>For more information about conditional requests, see <a href="https://tools.ietf.org/html/rfc7232">RFC 7232</a>.</p>
 *          <p>The following operations are related to <code>GetObject</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html">ListBuckets</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html">GetObjectAcl</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetObjectCommandInput} for command's `input` shape.
 * @see {@link GetObjectCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link InvalidObjectState} (client fault)
 *  <p>Object is archived and inaccessible until restored.</p>
 *
 * @throws {@link NoSuchKey} (client fault)
 *  <p>The specified key does not exist.</p>
 *
 *
 * @example To retrieve a byte range of an object
 * ```javascript
 * // The following example retrieves an object for an S3 bucket. The request specifies the range header to retrieve a specific byte range.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Key": "SampleFile.txt",
 *   "Range": "bytes=0-9"
 * };
 * const command = new GetObjectCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AcceptRanges": "bytes",
 *   "ContentLength": "10",
 *   "ContentRange": "bytes 0-9/43",
 *   "ContentType": "text/plain",
 *   "ETag": "\"0d94420ffd0bc68cd3d152506b97a9cc\"",
 *   "LastModified": "Thu, 09 Oct 2014 22:57:28 GMT",
 *   "Metadata": {},
 *   "VersionId": "null"
 * }
 * *\/
 * // example id: to-retrieve-a-byte-range-of-an-object--1481832674603
 * ```
 *
 * @example To retrieve an object
 * ```javascript
 * // The following example retrieves an object for an S3 bucket.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Key": "HappyFace.jpg"
 * };
 * const command = new GetObjectCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AcceptRanges": "bytes",
 *   "ContentLength": "3191",
 *   "ContentType": "image/jpeg",
 *   "ETag": "\"6805f2cfc46c0f04559748bb039d69ae\"",
 *   "LastModified": "Thu, 15 Dec 2016 01:19:41 GMT",
 *   "Metadata": {},
 *   "TagCount": 2,
 *   "VersionId": "null"
 * }
 * *\/
 * // example id: to-retrieve-an-object-1481827837012
 * ```
 *
 */
export declare class GetObjectCommand extends $Command<GetObjectCommandInput, GetObjectCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetObjectCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: GetObjectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetObjectCommandInput, GetObjectCommandOutput>;
    private serialize;
    private deserialize;
}
import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DeleteObjectOutput, DeleteObjectRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link DeleteObjectCommand}.
 */
export interface DeleteObjectCommandInput extends DeleteObjectRequest {
}
/**
 * The output of {@link DeleteObjectCommand}.
 */
export interface DeleteObjectCommandOutput extends DeleteObjectOutput, __MetadataBearer {
}
/**
 * <p>Removes the null version (if there is one) of an object and inserts a delete marker,
 *          which becomes the latest version of the object. If there isn't a null version, Amazon S3 does
 *          not remove any objects but will still respond that the command was successful.</p>
 *          <p>To remove a specific version, you must be the bucket owner and you must use the version
 *          Id subresource. Using this subresource permanently deletes the version. If the object
 *          deleted is a delete marker, Amazon S3 sets the response header,
 *          <code>x-amz-delete-marker</code>, to true. </p>
 *          <p>If the object you want to delete is in a bucket where the bucket versioning
 *          configuration is MFA Delete enabled, you must include the <code>x-amz-mfa</code> request
 *          header in the DELETE <code>versionId</code> request. Requests that include
 *             <code>x-amz-mfa</code> must use HTTPS. </p>
 *          <p> For more information about MFA Delete, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMFADelete.html">Using MFA Delete</a>. To see sample requests that use versioning, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectDELETE.html#ExampleVersionObjectDelete">Sample Request</a>. </p>
 *          <p>You can delete objects by explicitly calling DELETE Object or configure its
 *          lifecycle (<a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycle.html">PutBucketLifecycle</a>) to
 *          enable Amazon S3 to remove them for you. If you want to block users or accounts from removing or
 *          deleting objects from your bucket, you must deny them the <code>s3:DeleteObject</code>,
 *             <code>s3:DeleteObjectVersion</code>, and <code>s3:PutLifeCycleConfiguration</code>
 *          actions. </p>
 *          <p>The following action is related to <code>DeleteObject</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteObjectCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new DeleteObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteObjectCommandInput} for command's `input` shape.
 * @see {@link DeleteObjectCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 * @example To delete an object (from a non-versioned bucket)
 * ```javascript
 * // The following example deletes an object from a non-versioned bucket.
 * const input = {
 *   "Bucket": "ExampleBucket",
 *   "Key": "HappyFace.jpg"
 * };
 * const command = new DeleteObjectCommand(input);
 * await client.send(command);
 * // example id: to-delete-an-object-from-a-non-versioned-bucket-1481588533089
 * ```
 *
 * @example To delete an object
 * ```javascript
 * // The following example deletes an object from an S3 bucket.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Key": "objectkey.jpg"
 * };
 * const command = new DeleteObjectCommand(input);
 * await client.send(command);
 * // example id: to-delete-an-object-1472850136595
 * ```
 *
 */
export declare class DeleteObjectCommand extends $Command<DeleteObjectCommandInput, DeleteObjectCommandOutput, S3ClientResolvedConfig> {
    readonly input: DeleteObjectCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: DeleteObjectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteObjectCommandInput, DeleteObjectCommandOutput>;
    private serialize;
    private deserialize;
}

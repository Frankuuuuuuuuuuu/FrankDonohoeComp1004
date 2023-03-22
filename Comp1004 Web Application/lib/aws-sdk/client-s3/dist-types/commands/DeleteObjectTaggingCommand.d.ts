import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DeleteObjectTaggingOutput, DeleteObjectTaggingRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link DeleteObjectTaggingCommand}.
 */
export interface DeleteObjectTaggingCommandInput extends DeleteObjectTaggingRequest {
}
/**
 * The output of {@link DeleteObjectTaggingCommand}.
 */
export interface DeleteObjectTaggingCommandOutput extends DeleteObjectTaggingOutput, __MetadataBearer {
}
/**
 * <p>Removes the entire tag set from the specified object. For more information about
 *          managing object tags, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html"> Object
 *             Tagging</a>.</p>
 *          <p>To use this operation, you must have permission to perform the
 *             <code>s3:DeleteObjectTagging</code> action.</p>
 *          <p>To delete tags of a specific object version, add the <code>versionId</code> query
 *          parameter in the request. You will need permission for the
 *             <code>s3:DeleteObjectVersionTagging</code> action.</p>
 *          <p>The following operations are related to
 *          <code>DeleteBucketMetricsConfiguration</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html">PutObjectTagging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html">GetObjectTagging</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteObjectTaggingCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteObjectTaggingCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new DeleteObjectTaggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteObjectTaggingCommandInput} for command's `input` shape.
 * @see {@link DeleteObjectTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 * @example To remove tag set from an object
 * ```javascript
 * // The following example removes tag set associated with the specified object. If the bucket is versioning enabled, the operation removes tag set from the latest object version.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Key": "HappyFace.jpg"
 * };
 * const command = new DeleteObjectTaggingCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "VersionId": "null"
 * }
 * *\/
 * // example id: to-remove-tag-set-from-an-object-1483145342862
 * ```
 *
 * @example To remove tag set from an object version
 * ```javascript
 * // The following example removes tag set associated with the specified object version. The request specifies both the object key and object version.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Key": "HappyFace.jpg",
 *   "VersionId": "ydlaNkwWm0SfKJR.T1b1fIdPRbldTYRI"
 * };
 * const command = new DeleteObjectTaggingCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "VersionId": "ydlaNkwWm0SfKJR.T1b1fIdPRbldTYRI"
 * }
 * *\/
 * // example id: to-remove-tag-set-from-an-object-version-1483145285913
 * ```
 *
 */
export declare class DeleteObjectTaggingCommand extends $Command<DeleteObjectTaggingCommandInput, DeleteObjectTaggingCommandOutput, S3ClientResolvedConfig> {
    readonly input: DeleteObjectTaggingCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: DeleteObjectTaggingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteObjectTaggingCommandInput, DeleteObjectTaggingCommandOutput>;
    private serialize;
    private deserialize;
}

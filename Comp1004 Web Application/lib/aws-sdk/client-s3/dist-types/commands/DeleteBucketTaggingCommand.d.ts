import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DeleteBucketTaggingRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link DeleteBucketTaggingCommand}.
 */
export interface DeleteBucketTaggingCommandInput extends DeleteBucketTaggingRequest {
}
/**
 * The output of {@link DeleteBucketTaggingCommand}.
 */
export interface DeleteBucketTaggingCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the tags from the bucket.</p>
 *          <p>To use this operation, you must have permission to perform the
 *             <code>s3:PutBucketTagging</code> action. By default, the bucket owner has this
 *          permission and can grant this permission to others. </p>
 *          <p>The following operations are related to <code>DeleteBucketTagging</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html">GetBucketTagging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html">PutBucketTagging</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteBucketTaggingCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteBucketTaggingCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new DeleteBucketTaggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBucketTaggingCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 * @example To delete bucket tags
 * ```javascript
 * // The following example deletes bucket tags.
 * const input = {
 *   "Bucket": "examplebucket"
 * };
 * const command = new DeleteBucketTaggingCommand(input);
 * await client.send(command);
 * // example id: to-delete-bucket-tags-1483043846509
 * ```
 *
 */
export declare class DeleteBucketTaggingCommand extends $Command<DeleteBucketTaggingCommandInput, DeleteBucketTaggingCommandOutput, S3ClientResolvedConfig> {
    readonly input: DeleteBucketTaggingCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: DeleteBucketTaggingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBucketTaggingCommandInput, DeleteBucketTaggingCommandOutput>;
    private serialize;
    private deserialize;
}
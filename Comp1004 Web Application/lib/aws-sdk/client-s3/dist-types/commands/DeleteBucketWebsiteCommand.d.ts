import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DeleteBucketWebsiteRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link DeleteBucketWebsiteCommand}.
 */
export interface DeleteBucketWebsiteCommandInput extends DeleteBucketWebsiteRequest {
}
/**
 * The output of {@link DeleteBucketWebsiteCommand}.
 */
export interface DeleteBucketWebsiteCommandOutput extends __MetadataBearer {
}
/**
 * <p>This action removes the website configuration for a bucket. Amazon S3 returns a <code>200
 *             OK</code> response upon successfully deleting a website configuration on the specified
 *          bucket. You will get a <code>200 OK</code> response if the website configuration you are
 *          trying to delete does not exist on the bucket. Amazon S3 returns a <code>404</code> response if
 *          the bucket specified in the request does not exist.</p>
 *          <p>This DELETE action requires the <code>S3:DeleteBucketWebsite</code> permission. By
 *          default, only the bucket owner can delete the website configuration attached to a bucket.
 *          However, bucket owners can grant other users permission to delete the website configuration
 *          by writing a bucket policy granting them the <code>S3:DeleteBucketWebsite</code>
 *          permission. </p>
 *          <p>For more information about hosting websites, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">Hosting Websites on Amazon S3</a>. </p>
 *          <p>The following operations are related to <code>DeleteBucketWebsite</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketWebsite.html">GetBucketWebsite</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketWebsite.html">PutBucketWebsite</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteBucketWebsiteCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteBucketWebsiteCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new DeleteBucketWebsiteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBucketWebsiteCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketWebsiteCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 * @example To delete bucket website configuration
 * ```javascript
 * // The following example deletes bucket website configuration.
 * const input = {
 *   "Bucket": "examplebucket"
 * };
 * const command = new DeleteBucketWebsiteCommand(input);
 * await client.send(command);
 * // example id: to-delete-bucket-website-configuration-1483043937825
 * ```
 *
 */
export declare class DeleteBucketWebsiteCommand extends $Command<DeleteBucketWebsiteCommandInput, DeleteBucketWebsiteCommandOutput, S3ClientResolvedConfig> {
    readonly input: DeleteBucketWebsiteCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: DeleteBucketWebsiteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBucketWebsiteCommandInput, DeleteBucketWebsiteCommandOutput>;
    private serialize;
    private deserialize;
}

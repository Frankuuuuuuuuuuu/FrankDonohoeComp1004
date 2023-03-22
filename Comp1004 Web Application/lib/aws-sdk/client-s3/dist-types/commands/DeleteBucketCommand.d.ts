import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DeleteBucketRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link DeleteBucketCommand}.
 */
export interface DeleteBucketCommandInput extends DeleteBucketRequest {
}
/**
 * The output of {@link DeleteBucketCommand}.
 */
export interface DeleteBucketCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the S3 bucket. All objects (including all object versions and delete markers) in
 *          the bucket must be deleted before the bucket itself can be deleted.</p>
 *          <p class="title">
 *             <b>Related Resources</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>
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
 * import { S3Client, DeleteBucketCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteBucketCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new DeleteBucketCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBucketCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 * @example To delete a bucket
 * ```javascript
 * // The following example deletes the specified bucket.
 * const input = {
 *   "Bucket": "forrandall2"
 * };
 * const command = new DeleteBucketCommand(input);
 * await client.send(command);
 * // example id: to-delete-a-bucket-1473108514262
 * ```
 *
 */
export declare class DeleteBucketCommand extends $Command<DeleteBucketCommandInput, DeleteBucketCommandOutput, S3ClientResolvedConfig> {
    readonly input: DeleteBucketCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: DeleteBucketCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBucketCommandInput, DeleteBucketCommandOutput>;
    private serialize;
    private deserialize;
}
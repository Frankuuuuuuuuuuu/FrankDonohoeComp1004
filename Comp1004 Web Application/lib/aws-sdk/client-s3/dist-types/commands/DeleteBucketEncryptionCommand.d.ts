import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DeleteBucketEncryptionRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link DeleteBucketEncryptionCommand}.
 */
export interface DeleteBucketEncryptionCommandInput extends DeleteBucketEncryptionRequest {
}
/**
 * The output of {@link DeleteBucketEncryptionCommand}.
 */
export interface DeleteBucketEncryptionCommandOutput extends __MetadataBearer {
}
/**
 * <p>This implementation of the DELETE action removes default encryption from the bucket.
 *          For information about the Amazon S3 default encryption feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html">Amazon S3 Default Bucket Encryption</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <p>To use this operation, you must have permissions to perform the
 *             <code>s3:PutEncryptionConfiguration</code> action. The bucket owner has this permission
 *          by default. The bucket owner can grant this permission to others. For more information
 *          about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to your Amazon S3
 *             Resources</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p class="title">
 *             <b>Related Resources</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketEncryption.html">PutBucketEncryption</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketEncryption.html">GetBucketEncryption</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteBucketEncryptionCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteBucketEncryptionCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new DeleteBucketEncryptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBucketEncryptionCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketEncryptionCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 */
export declare class DeleteBucketEncryptionCommand extends $Command<DeleteBucketEncryptionCommandInput, DeleteBucketEncryptionCommandOutput, S3ClientResolvedConfig> {
    readonly input: DeleteBucketEncryptionCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: DeleteBucketEncryptionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBucketEncryptionCommandInput, DeleteBucketEncryptionCommandOutput>;
    private serialize;
    private deserialize;
}
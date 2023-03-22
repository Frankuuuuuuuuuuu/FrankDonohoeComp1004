import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { DeleteBucketOwnershipControlsRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link DeleteBucketOwnershipControlsCommand}.
 */
export interface DeleteBucketOwnershipControlsCommandInput extends DeleteBucketOwnershipControlsRequest {
}
/**
 * The output of {@link DeleteBucketOwnershipControlsCommand}.
 */
export interface DeleteBucketOwnershipControlsCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes <code>OwnershipControls</code> for an Amazon S3 bucket. To use this operation, you
 *          must have the <code>s3:PutBucketOwnershipControls</code> permission. For more information
 *          about Amazon S3 permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html">Specifying
 *             Permissions in a Policy</a>.</p>
 *          <p>For information about Amazon S3 Object Ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/about-object-ownership.html">Using Object Ownership</a>. </p>
 *          <p>The following operations are related to
 *          <code>DeleteBucketOwnershipControls</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GetBucketOwnershipControls</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>PutBucketOwnershipControls</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteBucketOwnershipControlsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteBucketOwnershipControlsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new DeleteBucketOwnershipControlsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBucketOwnershipControlsCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketOwnershipControlsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 */
export declare class DeleteBucketOwnershipControlsCommand extends $Command<DeleteBucketOwnershipControlsCommandInput, DeleteBucketOwnershipControlsCommandOutput, S3ClientResolvedConfig> {
    readonly input: DeleteBucketOwnershipControlsCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: DeleteBucketOwnershipControlsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBucketOwnershipControlsCommandInput, DeleteBucketOwnershipControlsCommandOutput>;
    private serialize;
    private deserialize;
}

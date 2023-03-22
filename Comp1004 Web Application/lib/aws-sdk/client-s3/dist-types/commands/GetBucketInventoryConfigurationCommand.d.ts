import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetBucketInventoryConfigurationOutput, GetBucketInventoryConfigurationRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link GetBucketInventoryConfigurationCommand}.
 */
export interface GetBucketInventoryConfigurationCommandInput extends GetBucketInventoryConfigurationRequest {
}
/**
 * The output of {@link GetBucketInventoryConfigurationCommand}.
 */
export interface GetBucketInventoryConfigurationCommandOutput extends GetBucketInventoryConfigurationOutput, __MetadataBearer {
}
/**
 * <p>Returns an inventory configuration (identified by the inventory configuration ID) from
 *          the bucket.</p>
 *          <p>To use this operation, you must have permissions to perform the
 *             <code>s3:GetInventoryConfiguration</code> action. The bucket owner has this permission
 *          by default and can grant this permission to others. For more information about permissions,
 *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3
 *             Resources</a>.</p>
 *          <p>For information about the Amazon S3 inventory feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html">Amazon S3 Inventory</a>.</p>
 *          <p>The following operations are related to
 *          <code>GetBucketInventoryConfiguration</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketInventoryConfiguration.html">DeleteBucketInventoryConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketInventoryConfigurations.html">ListBucketInventoryConfigurations</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketInventoryConfiguration.html">PutBucketInventoryConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketInventoryConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketInventoryConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetBucketInventoryConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBucketInventoryConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetBucketInventoryConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 */
export declare class GetBucketInventoryConfigurationCommand extends $Command<GetBucketInventoryConfigurationCommandInput, GetBucketInventoryConfigurationCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketInventoryConfigurationCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: GetBucketInventoryConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketInventoryConfigurationCommandInput, GetBucketInventoryConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}

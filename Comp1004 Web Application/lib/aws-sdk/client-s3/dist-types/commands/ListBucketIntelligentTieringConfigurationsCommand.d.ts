import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { ListBucketIntelligentTieringConfigurationsOutput, ListBucketIntelligentTieringConfigurationsRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link ListBucketIntelligentTieringConfigurationsCommand}.
 */
export interface ListBucketIntelligentTieringConfigurationsCommandInput extends ListBucketIntelligentTieringConfigurationsRequest {
}
/**
 * The output of {@link ListBucketIntelligentTieringConfigurationsCommand}.
 */
export interface ListBucketIntelligentTieringConfigurationsCommandOutput extends ListBucketIntelligentTieringConfigurationsOutput, __MetadataBearer {
}
/**
 * <p>Lists the S3 Intelligent-Tiering configuration from the specified bucket.</p>
 *          <p>The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without performance impact or operational overhead. S3 Intelligent-Tiering delivers automatic cost savings in three low latency and high throughput access tiers. To get the lowest storage cost on data that can be accessed in minutes to hours, you can choose to activate additional archiving capabilities.</p>
 *          <p>The S3 Intelligent-Tiering storage class is  the ideal storage class for data with unknown, changing, or unpredictable access patterns, independent of object size or retention period. If the size of an object is less than 128 KB, it is not monitored and not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the Frequent Access tier rates in the S3 Intelligent-Tiering storage class.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access">Storage class for automatically optimizing frequently and infrequently accessed objects</a>.</p>
 *          <p>Operations related to
 *             <code>ListBucketIntelligentTieringConfigurations</code> include: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketIntelligentTieringConfiguration.html">DeleteBucketIntelligentTieringConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketIntelligentTieringConfiguration.html">PutBucketIntelligentTieringConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketIntelligentTieringConfiguration.html">GetBucketIntelligentTieringConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, ListBucketIntelligentTieringConfigurationsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, ListBucketIntelligentTieringConfigurationsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new ListBucketIntelligentTieringConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBucketIntelligentTieringConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListBucketIntelligentTieringConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 */
export declare class ListBucketIntelligentTieringConfigurationsCommand extends $Command<ListBucketIntelligentTieringConfigurationsCommandInput, ListBucketIntelligentTieringConfigurationsCommandOutput, S3ClientResolvedConfig> {
    readonly input: ListBucketIntelligentTieringConfigurationsCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: ListBucketIntelligentTieringConfigurationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBucketIntelligentTieringConfigurationsCommandInput, ListBucketIntelligentTieringConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
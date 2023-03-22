import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetBucketAnalyticsConfigurationOutput, GetBucketAnalyticsConfigurationRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link GetBucketAnalyticsConfigurationCommand}.
 */
export interface GetBucketAnalyticsConfigurationCommandInput extends GetBucketAnalyticsConfigurationRequest {
}
/**
 * The output of {@link GetBucketAnalyticsConfigurationCommand}.
 */
export interface GetBucketAnalyticsConfigurationCommandOutput extends GetBucketAnalyticsConfigurationOutput, __MetadataBearer {
}
/**
 * <p>This implementation of the GET action returns an analytics configuration (identified
 *          by the analytics configuration ID) from the bucket.</p>
 *          <p>To use this operation, you must have permissions to perform the
 *             <code>s3:GetAnalyticsConfiguration</code> action. The bucket owner has this permission
 *          by default. The bucket owner can grant this permission to others. For more information
 *          about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources"> Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3
 *             Resources</a> in the <i>Amazon S3 User Guide</i>. </p>
 *          <p>For information about Amazon S3 analytics feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/analytics-storage-class.html">Amazon S3 Analytics – Storage Class
 *             Analysis</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p class="title">
 *             <b>Related Resources</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketAnalyticsConfiguration.html">DeleteBucketAnalyticsConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketAnalyticsConfigurations.html">ListBucketAnalyticsConfigurations</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAnalyticsConfiguration.html">PutBucketAnalyticsConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketAnalyticsConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketAnalyticsConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetBucketAnalyticsConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBucketAnalyticsConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetBucketAnalyticsConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 */
export declare class GetBucketAnalyticsConfigurationCommand extends $Command<GetBucketAnalyticsConfigurationCommandInput, GetBucketAnalyticsConfigurationCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketAnalyticsConfigurationCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: GetBucketAnalyticsConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketAnalyticsConfigurationCommandInput, GetBucketAnalyticsConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}

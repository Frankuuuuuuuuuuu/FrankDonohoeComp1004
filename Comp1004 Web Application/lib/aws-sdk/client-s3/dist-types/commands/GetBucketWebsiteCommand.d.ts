import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { GetBucketWebsiteOutput, GetBucketWebsiteRequest } from "../models/models_0";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
/**
 * The input for {@link GetBucketWebsiteCommand}.
 */
export interface GetBucketWebsiteCommandInput extends GetBucketWebsiteRequest {
}
/**
 * The output of {@link GetBucketWebsiteCommand}.
 */
export interface GetBucketWebsiteCommandOutput extends GetBucketWebsiteOutput, __MetadataBearer {
}
/**
 * <p>Returns the website configuration for a bucket. To host website on Amazon S3, you can
 *          configure a bucket as website by adding a website configuration. For more information about
 *          hosting websites, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">Hosting Websites on
 *             Amazon S3</a>. </p>
 *          <p>This GET action requires the <code>S3:GetBucketWebsite</code> permission. By default,
 *          only the bucket owner can read the bucket website configuration. However, bucket owners can
 *          allow other users to read the website configuration by writing a bucket policy granting
 *          them the <code>S3:GetBucketWebsite</code> permission.</p>
 *          <p>The following operations are related to <code>DeleteBucketWebsite</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketWebsite.html">DeleteBucketWebsite</a>
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
 * import { S3Client, GetBucketWebsiteCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketWebsiteCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetBucketWebsiteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBucketWebsiteCommandInput} for command's `input` shape.
 * @see {@link GetBucketWebsiteCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 *
 * @example To get bucket website configuration
 * ```javascript
 * // The following example retrieves website configuration of a bucket.
 * const input = {
 *   "Bucket": "examplebucket"
 * };
 * const command = new GetBucketWebsiteCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ErrorDocument": {
 *     "Key": "error.html"
 *   },
 *   "IndexDocument": {
 *     "Suffix": "index.html"
 *   }
 * }
 * *\/
 * // example id: to-get-bucket-website-configuration-1483037016926
 * ```
 *
 */
export declare class GetBucketWebsiteCommand extends $Command<GetBucketWebsiteCommandInput, GetBucketWebsiteCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketWebsiteCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: GetBucketWebsiteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketWebsiteCommandInput, GetBucketWebsiteCommandOutput>;
    private serialize;
    private deserialize;
}